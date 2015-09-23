// First example, using the module pattern, the javascript way
function coffee() {
    var price = 1;

    return {
        getPrice: function () {
            return price;
        }
    }
}

function sugar(ingredient) {
    var price = 3;

    return {
        getPrice: function () {
            return ingredient.getPrice() + price;
        }
    }
}

function milk(ingredient) {
    var price = 2;

    return {
        getPrice: function () {
            return ingredient.getPrice() + price;
        }
    }
}

// Second example, simulating OOP
function Coffee() {
    this.price = 1;
}
Coffee.prototype.getPrice = function () {
    return this.price;
};


function CoffeeDecorator(coffee) {
    Coffee.call(this);

    if (!(coffee instanceof Coffee)) {
        throw new Error("coffee must be an instance of Coffee");
    }

    this.price = 0;
    this.coffee = coffee;
}
CoffeeDecorator.prototype = Object.create(Coffee.prototype);
CoffeeDecorator.prototype.getPrice = function () {
    return this.coffee.getPrice() + this.price;
};

function Sugar(coffee) {
    CoffeeDecorator.call(this, coffee);

    this.price = 3;
}
Sugar.prototype = Object.create(CoffeeDecorator.prototype);

function Milk(coffee) {
    CoffeeDecorator.call(this, coffee);

    this.price = 2;
}
Milk.prototype = Object.create(CoffeeDecorator.prototype);
