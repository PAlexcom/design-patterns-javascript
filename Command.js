function Calculator(value) {
    this.value = value;
}
Calculator.prototype.add = function (x) {
    this.value = this.value + x;
};
Calculator.prototype.substract = function (x) {
    this.value = this.value - x;
};
Calculator.prototype.multiply = function (x) {
    this.value = this.value * x;
};
Calculator.prototype.divide = function (x) {
    this.value = this.value / x;
};

function Command(value, receiver) {
    this.value = value || 0;
    this.receiver = receiver;
}
Command.prototype.execute = function () {
};
Command.prototype.undo = function () {
};

function Invoker() {
    this.history = [];
    this.commands = [];
}

Invoker.prototype.execute = function () {
    for (index in this.commands) {
        var command = this.commands[index];
        command.execute(command.value);

        this.history.push(command);
    }

    this.commands = [];
};

Invoker.prototype.undo = function () {
    if (this.history.length) {
        var command = this.history.pop();
        command.undo(command.value);
    }
};

Invoker.prototype.setCommand = function (command) {
    if (!(command instanceof Command)) {
        throw new Error("command needs to be an instance of Command");
    }

    this.commands.push(command);
};

function AddCommand(value, receiver) {
    Command.call(this, value, receiver);
}
AddCommand.prototype = Object.create(Command.prototype);
AddCommand.prototype.execute = function () {
    this.receiver.add(this.value);
};
AddCommand.prototype.undo = function () {
    this.receiver.substract(this.value);
};

function SubstractCommand(value, receiver) {
    Command.call(this, value, receiver);
}
SubstractCommand.prototype = Object.create(Command.prototype);
SubstractCommand.prototype.execute = function () {
    this.receiver.substract(this.value);
};
SubstractCommand.prototype.undo = function () {
    this.receiver.add(this.value);
};

function MultiplyCommand(value, receiver) {
    Command.call(this, value, receiver);
}
MultiplyCommand.prototype = Object.create(Command.prototype);
MultiplyCommand.prototype.execute = function () {
    this.receiver.multiply(this.value);
};
MultiplyCommand.prototype.undo = function () {
    this.receiver.divide(this.value);
};

function DivideCommand(value, receiver) {
    Command.call(this, value, receiver);
}
DivideCommand.prototype = Object.create(Command.prototype);
DivideCommand.prototype.execute = function () {
    this.receiver.divide(this.value);
};
DivideCommand.prototype.undo = function () {
    this.receiver.multiply(this.value);
};
