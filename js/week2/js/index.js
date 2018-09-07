// Телефонная книга
var phoneBook = {};


function book(command) {

    var result;
    function parseCommand(command){
         var tst = command.split(' ');
         if(tst[0]==='ADD'){
             result = add(tst[1], tst[2]);
         }
         else if(tst[0]==='REMOVE_PHONE'){
             result = remove(tst[1]);
         }
         else{
             result = show();
         }
    }
    parseCommand(command);

    function add(contactName, phones){
        var phonesArr = phones.split(',');
        if(!phoneBook.hasOwnProperty(contactName)){
            phoneBook[contactName] = phonesArr;
        }
        else{
            phoneBook[contactName] = phoneBook[contactName].concat(phonesArr);
        }

    }
    function remove(phone){
        var myBoolean = false;

        for (var k in phoneBook) {
            var index = phoneBook[k].indexOf(phone);
            if(index !==-1){
                phoneBook[k].splice(index, 1);
                myBoolean = true;
                return myBoolean;
            }
        }
        return myBoolean;
    }
    
    function show() {
        var allContacts = [];
        for (var k in phoneBook){
            if(phoneBook[k].length>0)
            allContacts.push((k + ': ' + phoneBook[k]).toString());
        }
        allContacts.sort();
        for(var i =0; i<allContacts.length;i++){
            allContacts[i] =  allContacts[i].split(',').join(', ');
        }
        return allContacts;

    }

    return result;
}




book('ADD Ivan 555,666');

book('ADD Alex 777');


book('ADD Alex 333');

book('REMOVE_PHONE 555');

book('REMOVE_PHONE 666');

book('ADD Ivan 888');
book('SHOW');

console.log(book('SHOW'));

//console.log(phoneBook);

