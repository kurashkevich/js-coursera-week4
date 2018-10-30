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

var myCollection = friends;
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
    console.log('query');
    myCollection = args[0].slice();
    console.log(friends);
    console.log(myCollection);
    return myCollection;
}
function selectMethod(args){
    console.log('select');
    console.log(args);
}
function filterInMethod(){
    console.log('filterIn');
    //console.log('потом применяется фильтр');
}

function addElement(){
    console.log('addElement');
    var igor = {
        name: 'igor',
        gender: 'Мужской',
        email: 'igor@example.com',
        favoriteFruit: 'pork'
    }
    myCollection.push(igor);
    return myCollection;

}

var bestFriends = lib.query(friends, lib.select('name', 'email'), lib.filterIn(), addElement());
//console.log(bestFriends);


