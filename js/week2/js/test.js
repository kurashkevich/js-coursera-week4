// Телефонная книга
var phoneBook = {};


function book(command) {
    function parseCommand(command){
        var tst = command.split(' ');
        if(tst[0]==='ADD'){
            add(tst[1], tst[2]);
        }
        else if(tst[0]==='REMOVE_PHONE'){
            remove(tst[1]);
        }
        else{
            show();
        }
    }
    parseCommand(command);

    function add(contactName, phones){
        var phonesArr = phones.split(',');
        if(!phoneBook.hasOwnProperty(contactName)){
            phoneBook[contactName] = phonesArr;
        }
        else{
            var contactsJoin = phoneBook[contactName].toString()+','+phones;
            for(var i=0; i<phonesArr.length; i++){
                phonesArr = contactsJoin.split(',');
            }
            phoneBook[contactName] = phonesArr;
        }

    }

    function remove(phone) {
        // var temp = [];
        for (var name in phoneBook) {
            var numbInArray = phoneBook[name].indexOf(phone); // nado vinosit v peremennuy - povtorenie koda
            console.log(phone, numbInArray);
            if(numbInArray !==-1){
                // console.log(numb);
                // phoneBook[k].splice(numb, 1, ''); zachem 3 parametr?
                phoneBook[name].splice(numbInArray, 1);



                // var temp2 = phoneBook[k];
                // for(var i=0; i<phoneBook[k].length;i++){
                //     if(phoneBook[k][i]!==''){
                //         temp.push(phoneBook[k][i]);
                //     }
                // }
                // phoneBook[k] = temp;
                //console.log(phoneBook)
                return true;
            } else {
                return false;
            }
        }

    }

    function show() {
        var allContacts = [];
        for (var k in phoneBook){
            if(phoneBook[k].length>0)
                allContacts.push((k + ': ' + phoneBook[k]).toString());
        }
        allContacts.sort();
        // console.log(allContacts);
        for(var i =0; i<allContacts.length;i++){
            allContacts[i] =  allContacts[i].split(',').join(', ');
        }
        return allContacts;
    }


}




book('ADD Ivan 555-10-01,555-10-03');

book('ADD Ivan 555-10-02');

// console.info(book('SHOW'));



book('REMOVE_PHONE 555-10-03');

book('ADD Alex 555-20-01');

book('SHOW');

book('REMOVE_PHONE 555-20-01');

book('SHOW');
// console.log(phoneBook);