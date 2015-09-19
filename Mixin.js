function Party (name) {
    this.name = name;
}
Party.prototype.getName = function () {
    return this.name;
};

function Employee (name, role) {
    Party.call(this, name);
    this.role = role;
}
Employee.prototype = Object.create(Party.prototype);
Employee.prototype.getRole = function () {
    return this.role;
};
