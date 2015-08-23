var pubSub = (function () {
    var subscribers = {
        topics: [],
        token: -1,
        add: function (event, func) {
            if (!this.topics[event]) {
                this.topics[event] = [];
            }

            this.topics[event][++this.token] = func;

            return (this.token).toString();
        },
        remove: function (token) {
            for (var event in this.topics) {
                if (this.topics[event][token]) {
                    this.topics[event].splice(token, 1);

                    return true;
                }
            }

            return false;
        },
        broadcast: function (event, args) {
            for (var subscriber in this.topics[event]) {
                this.topics[event][subscriber](args);
            }
        }
    };

    return {
        subscribe: function (event, func) {
            return subscribers.add(event, func);
        },
        unsubscribe: function (token) {
            return subscribers.remove(token);
        },
        publish: function (event, args) {
            subscribers.broadcast(event, args);
        }
    }
})();
