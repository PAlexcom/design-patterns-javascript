var moduleCounter = function () {
    var counter = 0;

    return {
        incrementCounter: function () {
            counter++;
        },
        getCounter: function () {
            return counter;
        },
        resetCounter: function () {
            counter = 0;
        }
    }
};
