var Singleton = (function () {
    var _instance;

    function Singleton() {
        var _random = Math.random();

        return {
            getRandom: function () {
                return _random;
            }
        }
    }

    return {
        getInstance: function () {
            if (!_instance) {
                _instance = new Singleton();
            }

            return _instance;
        }
    }
})();
