var phoneBookObj = {};
var contacts = [];

function phoneBook(command) {
    var commandName;
    commandName = parseCommandName(command);

    var commandContactName = parseCommandContactName(command);
    //console.log(commandContactName);

    var commandContactPhone = parseCommandContactPhone(command);
    //console.log((commandPhones));

    //console.log(contacts);

    switch (parseCommandName(command)) {
        case 'ADD':
            add(commandContactName, commandContactPhone);
            break;
        case 'REMOVE_PHONE':
            remove(commandContactPhone);
            break;
        case 'SHOW':
            console.log(show());
            show();
            break;
    }


    function parseCommandName(command) {
        var commandName;
        if (command.indexOf(' ') !== -1) {
            commandName = command.slice(0, command.indexOf(' '));
        }
        else {
            commandName = command;
        }
        return commandName;
    }


    function parseCommandContactName(command) {
        var commandContactName;
        if (parseCommandName(command) === 'ADD') {
            commandContactName = command.slice(command.indexOf(' '), command.indexOf(' ', command.indexOf(' ') + 1)).trim();
        }
        return commandContactName;
    }

    function parseCommandContactPhone(command) {
        var commandPhones;
        if (parseCommandName(command) !== 'SHOW') {
            commandPhones = command.slice(command.lastIndexOf(' '), command.length).trim();
        }
        return commandPhones;
    }


    function Contact(name, phones) {
        this.name = name;
        this.phones = phones;
    }


    function add(contactName, phones) {
        var phonesArr = [];
        phonesArr = phones.split(',');
        if (contacts.length === 0) {
            var contact = new Contact(contactName, phonesArr);
            contacts.push(contact);
        }
        else {
            for (i = 0; i < contacts.length; i++) {
                if (contacts[i].name === contactName) {
                    for (var j = 0; j < phonesArr.length; j++) {
                        contacts[i].phones.push(phonesArr[j]);
                    }
                    return contacts;
                }
                else if (i === contacts.length - 1) {
                    var contact = new Contact(contactName, phonesArr);
                    contacts.push(contact);
                    return contacts;
                }
            }
        }
    }

    function remove(phone) {
        var newPhoneArr = [];
        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].phones.indexOf(phone) !== -1) {
                contacts[i].phones.splice(contacts[i].phones.indexOf(phone), 1, '');
                for (var j = 0; j < contacts[i].phones.length; j++) {
                    if (contacts[i].phones[j] !== '') {
                        newPhoneArr.push(contacts[i].phones[j]);
                    }
                }
                contacts[i].phones = newPhoneArr;
                return true;
            }
            else {
                return false;
            }
        }
    }

    function show() {
        contacts.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });


        var arrToShow = [];
        for (var i = 0; i < contacts.length; i++) {
            var s = contacts[i].phones;
            if (contacts[i].phones.length > 0)
                arrToShow.push(contacts[i].name + ': ' + contacts[i].phones.toString().split(',').join(', '));
        }
        return arrToShow;
    }


}



phoneBook('ADD Ivan 555-10-01,555-10-03');

phoneBook('ADD Ivan 555-10-02');

console.info(phoneBook('SHOW'));



phoneBook('REMOVE_PHONE 555-10-03');

phoneBook('ADD Alex 555-20-01');

phoneBook('SHOW');

phoneBook('REMOVE_PHONE 555-20-01');

phoneBook('SHOW');


