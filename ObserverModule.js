var Subject = function () {
    var observers = [];

    return {
        register: function (observer) {
            observers.push(observer);
        },
        unregister: function (observer) {
            observers.splice(
                observers.indexOf(observer),
                1
            );
        },
        notifyAll: function (context, data) {
            for (var index in observers) {
                observers[index].update(context, data);
            }
        }
    }
};

var ConcreteSubject = function () {
    var subject = Subject();
    var counter = 0;

    return {
        register: function (observer) {
            subject.register(observer);
            observer.update('counter', counter);
        },
        unregister: subject.unregister,
        incrementCounter: function () {
            counter++;
            subject.notifyAll('counter', counter);
        },
        getCounter: function () {
            return counter;
        }
    }
};

var ConcreteObserver = function () {
    var counter = null;

    return {
        update: function (context, data) {
            if (context === 'counter') {
                counter = data;
            }
        },
        getCounter: function () {
            return counter;
        }
    }
};


var cS = ConcreteSubject();
var cO = ConcreteObserver();

cS.register(cO);
