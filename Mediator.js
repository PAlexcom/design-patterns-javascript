var mediator = (function () {
    return {
        registerToConference: function (user, conference) {
            if (!(user instanceof User)) {
                throw new Error("user should be an User instance")
            }

            if (!(conference instanceof Conference)) {
                throw new Error("event should be an Conference instance")
            }

            user.setId(
                conference.register(user.name)
            );
        }
    }
})();

function User(name) {
    this.name = name;
    this.id = null;
}
User.prototype.setId = function (id) {
    this.id = id;
};

function Conference() {
    this.attendees = [];
}

Conference.prototype.register = function (user) {
    this.attendees.push(user);

    return (this.attendees.length - 1);
};
