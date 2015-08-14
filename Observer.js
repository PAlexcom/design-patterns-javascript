var Subject = function () {
    this.observers = [];
};

Subject.prototype.constructor = Subject;
Subject.prototype.register = function (observer) {
    this.observers.push(observer);
};

Subject.prototype.unregister = function (observer) {
    this.observers.splice(
        this.observers.indexOf(observer),
        1
    );
};

Subject.prototype.notifyAll = function () {
    for (var index in this.observers) {
        this.observers[index].update();
    }
};

var Observer = function (subject) {
    this.subject = subject;
    this.subject.register(this);
};

Observer.prototype.constructor = Observer;
Observer.prototype.update = function () {
};


var ConcreteSubject = function () {
    Subject.call(this);
    this.counter = 0;
};

ConcreteSubject.prototype.constructor = ConcreteSubject;
ConcreteSubject.prototype = Object.create(Subject.prototype);
ConcreteSubject.prototype.incrementCounter = function () {
    this.counter++;
    this.notifyAll();
};

ConcreteSubject.prototype.getCounter = function () {
    return this.counter;
};

var ConcreteObserver = function (subject) {
    Observer.call(this, subject);
    this.counter = subject.getCounter();
};

ConcreteObserver.prototype.constructor = ConcreteObserver;

ConcreteObserver.prototype = Object.create(Observer.prototype);

ConcreteObserver.prototype.update = function () {
    this.counter = this.subject.getCounter();
};

ConcreteObserver.prototype.getCounter = function () {
    return this.counter;
};


var s = new ConcreteSubject();
var o = new ConcreteObserver(s);
