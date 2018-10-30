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


var lib = {
        query: function () {
            return queryMethod(arguments);
        },
        select: function () {
            selectMethod(arguments);
            //return this;
        },
        filterIn: function () {
            filterInMethod();
            //return this;
        }
};

function queryMethod(args) {
    var newCollection = Object.values(args[0]);
    return newCollection;
}
function selectMethod(args){
    console.log(args);
}
function filterInMethod(){
    //console.log('потом применяется фильтр');
}

var bestFriends = lib.query(friends, lib.select('name', 'email'), lib.filterIn());
//console.log(bestFriends);

/**
 * QUERY
 * 1. Разделить аргументы, 1 коллекция, остальные операции
 * 2. Применить операнды
 * 3. Вернуть измененную коллекцию
 *
 *
 * **/
