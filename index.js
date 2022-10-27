const cat = {
    name: 'Murzik',
    color: 'Red',
    breed: 'Dvorovyi osobluvij',
    age: 2,
    weight: 5,
    sex: 'm',
    eat: function() {
        return 'I am eating'
    },
    sleep: function() {
        return 'I am sleeping'
    }
}

cat.sleep = undefined; // BAD PRACTICE

delete cat.sleep; // Good practice

// Adding properties
cat.girlfriend = {
    name: 'Murka',
    color: 'black',
    age: 1
};

