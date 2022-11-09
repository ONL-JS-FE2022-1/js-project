function Old_User(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

function Old_UserProto() {
    this.getFullName = function() {
        return `${this.name} ${this.lastName}`
    }
}

Old_User.prototype = new Old_UserProto();

const obj1 = new Old_User('John', 'Doe', 56);
const obj2 = new Old_User('Jane', 'Doe', 68);