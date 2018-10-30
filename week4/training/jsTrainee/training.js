


function getCounter() {
    var counter = 1;
    return counter++;
}

var myCounter = getCounter();
var myCounter2 = getCounter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

console.log(myCounter2());
console.log(myCounter());
console.log(myCounter());




/*
var panda2 = (function () {
    function eat(){
        return 'this panda can eat';
    }
    function go() {
        return 'this panda can go';
    }
})();

var myPanda = panda2;


console.log(panda2)



console.log(panda2);
var b;
function argTest() {
    return 5;
}


var a = function () {
    return 22+3;
}
b = argTest();
console.log(a);

var panda = {
    toString: function () {
        return 'this is panda';
    }
}

// value, writable, enumirable, configurable

Object.defineProperty(panda, 'test', {
    value: 'testVal',
    writable: true,
    configurable: false,
    enumerable: true
});

console.log(panda.test);
panda.test = 'asd';
console.log(panda.test);

delete panda.test;

console.log(Object.keys(panda));

console.log(Object.isFrozen(panda));

console.log(Object.getOwnPropertyDescriptor(panda, 'test'));


var testFunction = {
    likes: 16,
    getLikes: function () {
        console.log(this.likes);
        return this;
    },
    setLikes: function (value) {
        this.likes = value;
        return this;
    }
};


testFunction.setLikes(23)
    .getLikes()
    .setLikes(54)
    .getLikes();


var myObj = {
    id: 2,
    name: 'vlad',
    age: 27,
    testObj: {
        name: 'ye',
        surname: 'test2'
    },
    cars: [
        {name: "mazda", model: 2},
        {name: "opel", model: 'astra'},
    ]
}

console.log(myObj.testObj.name);

var keys = Object.keys(myObj);
console.log(keys);

console.log(myObj.hasOwnProperty('name'));


function isBigEnough(element, index, array) {
    return element >= 10;
}

console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true


var arr = [1, 2, 3, 4, 5];

var twwet = ['adsad', 'asd', 'zxc', 'wer', 'zxc2', 'wer3'];
twwet.splice(4, 0, 'Покупайте наших слонов!');
arr.splice(4, 0, 'Покупайте наших слонов!');
console.log(twwet);
console.log(arr);


var newarr = arr.slice(2, 5);
console.log(newarr);
console.log(arr);


var sum = function bar(a, b) {
    var result = a + b;
    return result;
};
var a = sum(2, 4);
*/
//console.log(a);