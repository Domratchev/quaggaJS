export default (function () {
    let events = {};

    function getEvent(eventName) {
        if (!events[eventName]) {
            events[eventName] = {
                subscribers: []
            };
        }
        return events[eventName];
    }

    function clearEvents() {
        events = {};
    }

    function publishSubscription(subscription, data) {
        if (subscription.async) {
            setTimeout(function () {
                subscription.callback(data);
            }, 4);
        } else {
            subscription.callback(data);
        }
    }

    function subscribe(event, callback, async) {
        let subscription;

        if (typeof callback === 'function') {
            subscription = {
                callback: callback,
                async: async
            };
        } else {
            subscription = callback;
            if (!subscription.callback) {
                throw 'Callback was not specified on options';
            }
        }

        getEvent(event).subscribers.push(subscription);
    }

    return {
        subscribe: function (event, callback, async) {
            return subscribe(event, callback, async);
        },
        publish: function (eventName, data) {
            const event = getEvent(eventName);
            const subscribers = event.subscribers;

            // Publish one-time subscriptions
            subscribers.filter(function (subscriber) {
                return !!subscriber.once;
            }).forEach((subscriber) => {
                publishSubscription(subscriber, data);
            });

            // remove them from the subscriber
            event.subscribers = subscribers.filter(function (subscriber) {
                return !subscriber.once;
            });

            // publish the rest
            event.subscribers.forEach((subscriber) => {
                publishSubscription(subscriber, data);
            });
        },
        once: function (event, callback, async) {
            subscribe(event, {
                callback: callback,
                async: async,
                once: true
            });
        },
        unsubscribe: function (eventName, callback) {
            let event;

            if (eventName) {
                event = getEvent(eventName);
                if (event && callback) {
                    event.subscribers = event.subscribers.filter(function (subscriber) {
                        return subscriber.callback !== callback;
                    });
                } else {
                    event.subscribers = [];
                }
            } else {
                clearEvents();
            }
        }
    };
})();
