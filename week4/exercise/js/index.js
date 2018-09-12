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

// test

var lib = (function () {
    return {
        query: function (arr) {

        },
        select: function () {
            var fields = [];
            for(var i=0; i< arguments.length; i++){
                fields.push(arguments[i]);
            }
            getSelectedArr(fields);
        },
        filterIn: function () {
            //console.log('filterIn');
        },
    };
})();





//var bestFriends = lib.query(friends, lib.select('name', 'gender', 'email'), lib.filterIn());



/**
 * QUERY
 * 1. Скопировать исходный массив
 * 2. Вызвать функции селект и фильтер
 * 3. удалить свойства, которых нет в селекте
 */




function getSelectedArr(fields){
    var selectedArr =[];
    for(var i=0; i<friends.length; i++){
        var obj = {};
        for(var y=0; y<fields.length; y++){
            if(friends[i].hasOwnProperty(fields[y])){
                Object.defineProperty(obj, fields[y], {
                    value: friends[i][fields[y]],
                    writable: true
                });
            }
        }
        selectedArr.push(obj);
    }
    console.log(selectedArr);
    return selectedArr;
}

console.log(lib.select('name', 'gender'));


























