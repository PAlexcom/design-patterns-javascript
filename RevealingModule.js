var revealingModuleCounter = function () {
    var counter = 0;

    function publicIncrementCounter () {
        counter++;
    };

    function publicGetCounter () {
        return counter;
    };

    function publicResetCounter () {
        counter = 0;
    };

    return {
        incrementCounter: publicIncrementCounter,
        getCounter: publicGetCounter,
        resetCounter: publicResetCounter
    }
};
