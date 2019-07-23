import { findTagsInObjectURL } from './exif_helper';

export class ImageLoader {
    static async load(directory, callback, offset, size, sequence) {
        const htmlImagesSrcArray = new Array(size);
        const htmlImagesArray = new Array(size);

        async function loaded(loadedImage) {
            const notLoadedImages = htmlImagesArray.notLoaded;
            for (let x = 0; x < notLoadedImages.length; x++) {
                if (notLoadedImages[x] === loadedImage) {
                    notLoadedImages.splice(x, 1);
                    for (let y = 0; y < htmlImagesSrcArray.length; y++) {
                        const imageName = htmlImagesSrcArray[y].substr(htmlImagesSrcArray[y].lastIndexOf('/'));
                        if (loadedImage.src.lastIndexOf(imageName) !== -1) {
                            htmlImagesArray[y] = { image: loadedImage };
                            break;
                        }
                    }
                    break;
                }
            }
            if (notLoadedImages.length === 0) {
                if (process.env.NODE_ENV !== 'production') {
                    console.log('Images loaded');
                }
                try {
                    if (sequence === false) {
                        const firstImage = htmlImagesArray[0];
                        firstImage.tags = await findTagsInObjectURL(directory);
                    }
                } catch (ex) {
                    console.log(ex);
                } finally {
                    callback(htmlImagesArray);
                }
            }
        }

        if (sequence === false) {
            htmlImagesSrcArray[0] = directory;
        } else {
            for (let i = 0; i < size; i++) {
                const num = (offset + i);
                htmlImagesSrcArray[i] = directory + 'image-' + ('00' + num).slice(-3) + '.jpg';
            }
        }
        htmlImagesArray.notLoaded = [];
        htmlImagesArray.addImage = function (image) {
            htmlImagesArray.notLoaded.push(image);
        };
        for (let i = 0; i < htmlImagesSrcArray.length; i++) {
            const image = new Image();
            htmlImagesArray.addImage(image);
            image.onload = () => loaded(image);
            image.src = htmlImagesSrcArray[i];
        }
    }
}
