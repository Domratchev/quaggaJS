export class ImageDebug {
    static drawRect(pos, size, context, style) {
        context.strokeStyle = style.color;
        context.fillStyle = style.color;
        context.lineWidth = style.lineWidth || 1;
        context.beginPath();
        context.strokeRect(pos.x, pos.y, size.x, size.y);
    }

    static drawPath(path, def, context, style) {
        context.strokeStyle = style.color;
        context.fillStyle = style.color;
        context.lineWidth = style.lineWidth;
        context.beginPath();
        context.moveTo(path[0][def.x], path[0][def.y]);
        for (let j = 1; j < path.length; j++) {
            context.lineTo(path[j][def.x], path[j][def.y]);
        }
        context.closePath();
        context.stroke();
    }

    static drawImage(imageData, width, height, context) {
        const canvasData = context.getImageData(0, 0, width, height);
        const data = canvasData.data;
        let imageDataPos = imageData.length;
        let canvasDataPos = data.length;

        if (canvasDataPos / imageDataPos !== 4) {
            return false;
        }
        while (imageDataPos--) {
            const value = imageData[imageDataPos];
            data[--canvasDataPos] = 255;
            data[--canvasDataPos] = value;
            data[--canvasDataPos] = value;
            data[--canvasDataPos] = value;
        }
        context.putImageData(canvasData, 0, 0);
        return true;
    }
}
