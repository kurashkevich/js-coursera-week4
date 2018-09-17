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
            for(var i=0; i<arguments.length; i++){
                    var operation = arguments[i];
                    if(operation[0] === 'select'){
                    }
                    console.log(operation);
                    // Функция на проектирование корректной операции селект
                    // Функция, создающая копию коллекции на основе селект
            }
            console.log(selectOpsArr);
        },
        select: function () {
            var fields = [];
            for(var i=0; i<arguments.length; i++){
                fields.push(arguments[i]);
            }
            //console.log(fields);

            return ['select', fields];
        },
        filterIn: function () {
            console.log('filterIn');
        },
    };
})();

/**
 *              QUERY
 * Копия массива если передана только коллекция
 * Функция, записывающая массив селектов
 *
 *
 *
 */

/**
 *              S E L E C T
 *
 * Создать функцию, которая выполняет пересечения полей (принимает созданный в query массив. состоящий изобъектов вида ['select', fieldsArray]
 * Создать функцию, которая игнорирует несуществующие в объекте поля
 *
 *
 *
 */

var selectedArr = [
    ['name', 'email', 'gender'],
    ['name', '', 'gender'],
    ['name', 'email']
]
console.log(selectedArr);

function setCrossSelect(arr){
    var count = 0;
    for (var i=0; i<arr.length; i++){

        if(arr[i].indexOf('name')!==-1){
            console.log('!');
        }
    }


}
//var test = lib.query(friends, lib.select('name', 'gender', 'email'), lib.select('name', '', 'email'), lib.select('name', 'gender'));

setCrossSelect(selectedArr);

