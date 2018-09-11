// Сделать объект Counter, который будет иметь функции инкретмента и декремента

var Counter = function () {
    var currentValue = 0;  // Это и есть приватный элемент в контексте javascript
    function changeValue(val) { // Это и есть приватная функция в контексте javascript
        currentValue += val;
    }
    return {
        increment: function (someVal) {  // Это интерфейс, публичные функции, это и есть замыкания
            changeValue(someVal);
        },
        decrement: function (someVal) { // Это интерфейс, публичные функции, это и есть замыкания
            changeValue(-someVal);
        },
        value: function () { // Это интерфейс, публичные функции, это и есть замыкания. Эти функции замывкают приватные поля и функции
            return currentValue;
        }
    };
};


var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    }
};





var counter1 = Counter();
counter1.decrement(10);
console.log(counter1.value());