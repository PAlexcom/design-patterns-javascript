function Person(name) {
    this.name = name;
}

Person.prototype.toString = function () {
    return "Person: " + this.name;
};
