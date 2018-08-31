// Все таки надо убрать говнокод и сделать нормально, 12 тестов из 18 пройдены
//test
//12
var time = {
    value: '',
    getValue: function () {
        return this.value;
    },
    setValue: function (value) {
        this.value = value;
        return this;
    },
    add: function (units, type) {
        checkData(units, type);
        addUnits(units, type);
        return this;
    },
    subtract: function (units, type) {
        checkData(units, type);
        subtractUnits(units, type);
        return this;
    },
    test: function () {
        return this;
    }
}

function addUnits(units, type) {
    var str = new Date(time.value);
    var newDate;
    switch (type) {
        case 'days': {
            newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate() + units, str.getHours(), str.getMinutes());
            break;
        }
        case 'months': {
            newDate = new Date(str.getFullYear(), str.getMonth() + units, str.getDate(), str.getHours(), str.getMinutes());
            break;
        }
        case 'hours': {
            newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate(), str.getHours() + units, str.getMinutes());
            break;
        }
        case 'minutes': {
            newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate(), str.getHours(), str.getMinutes() + units);
            break;
        }
        case 'years': {
            newDate = new Date(str.getFullYear()+units, str.getMonth(), str.getDate(), str.getHours(), str.getMinutes());
            break;
        }
    }
    time.value = newDate;
    parseDate();
}

function subtractUnits(units, type){
    var str = new Date(time.value);
    var newDate;
    switch (type) {
        case 'days': {
            newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate() - units, str.getHours(), str.getMinutes());
            break;
        }
        case 'months': {
            newDate = new Date(str.getFullYear(), str.getMonth() - units, str.getDate(), str.getHours(), str.getMinutes());
            break;
        }
        case 'hours': {
            newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate(), str.getHours() - units, str.getMinutes());
            break;
        }
        case 'minutes': {
            newDate = new Date(str.getFullYear(), str.getMonth(), str.getDate(), str.getHours(), str.getMinutes() - units);
            break;
        }
        case 'years': {
            newDate = new Date(str.getFullYear()-units, str.getMonth(), str.getDate(), str.getHours(), str.getMinutes());
            break;
        }
    }
    time.value = newDate;
    parseDate();
}

function checkData(units, type){
    try{
        if((parseInt(units)<0) || (type !== 'days' && type !== 'years' && type !== 'months' && type !== 'minutes' && type !== 'hours')){
            throw new TypeError('check data');
        }
    }catch (e) {
        throw e;
    }
}

function parseDate(){
    var month =  time.value.getMonth();
    if(month<9){
        month = '0'+(month+1);
    }
    else {
        month = month + 1;
    }

    var day =  time.value.getDate();
    if(day<10){
        day = '0'+day;
    }
    else {
        day = day;
    }

    var hours =  time.value.getHours();
    if(hours<10){
        hours = '0'+hours;
        console.log(hours);
    }
    else {
        hours = hours;
    }

    var min =  time.value.getMinutes();
    if(min<10){
        min = '0'+min;
    }
    else {
        min = min;
    }

    var str = time.value.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + min;
    time.value = str;
}


function date(str){
    time.value = str;
    return time;
}
 var time = date('2017-05-16 13:45')
    .add(24, 'hours')
    .subtract(1, 'months')
    .add(3, 'days')
    .add(-5, 'minutes')
     .subtract(15, 'years');

console.log(time.value);

checkData(-5, 'days');

