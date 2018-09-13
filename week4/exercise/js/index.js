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
            var resultSelect = [];
            var selects = [];
            for(var i=1; i<arguments.length; i++) {
                arguments[i];
            }
        },
        select: function () {
            var fields = [];
            for(var i=0; i< arguments.length; i++){
                fields.push(arguments[i]);
            }
            console.log('select');
            return ['select', getSelectedArr(fields)];

        },
        filterIn: function () {
            console.log('filterIn');
            return 'filterIn'
        },
    };
})();


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
    return selectedArr;
}


function intersect(a, b, c) {
    var t;
    var resultArr;
    //if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
    return a.filter(function (e) {
        return b.indexOf(e) > -1;
    });
}
var arr1 = ['name', 'gender', 'asd', 'email', 'favoriteFruit'];
var arr2 = ['name', 'gender',  'gender'];

var fields = intersect(arr2, arr1)

//console.log(fields);
console.log(lib.select('name', 'gender', 'gender'));
//var bestFriends = lib.query(friends, lib.select('name', 'gender','gender', 'email', 'asd'), lib.select('name', 'gender'), lib.filterIn());





















