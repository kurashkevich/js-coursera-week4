// Коллекция данных
var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
];



var lib = (function () {

    return {
        query: function () {
            console.log('this is query function');
        },
        select: function () {
            console.log('this is select function');
        },
        filterIn: function () {
            console.log('this is filterIn function');
        },
        value: function () { // Это интерфейс, публичные функции, это и есть замыкания. Эти функции замывкают приватные поля и функции
            return 'asd';
        }
    };
})();

var bestFriends = lib.query();


function testFunction(a) {
    console.log(arguments.length + ' :' + arguments[6]);
    return a;
}

function test2() {
    return 5;
}

testFunction(2,4,6,7,8,9, test2());


























