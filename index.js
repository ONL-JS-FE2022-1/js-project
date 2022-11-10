class User {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Moderator extends User {
    constructor(name, surname, age) {
        super(name, surname, age);
    }

    createPost(header, text) {
        console.log('Create post')
    }

    deletePost(index) {
        console.log('Delete post')
    }
}

class Admin extends Moderator {
    constructor(name, surname, isAdmin) {
        super(name, surname, null);
        this.isAdmin = isAdmin;
    }

    setModerator() {
        console.log('Set moderator')
    }

    deleteModerator() {
        console.log('Delete moderator')
    }
}