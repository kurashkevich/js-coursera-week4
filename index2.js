
var contacts = [];

function Contact(name, phone){
	this.name = name;
	this.phone = phone;
}


/*
	метод add должен:
		1. принимать в качестве параметров Имя и Строку, содержающую номер телефона
		2. Если в массиве контактов, нет такого имени, записать в массив контактов объект
		3. Если в массиве такое имя есть, конкат номеров телефона
		4. Вернуть массив контактов
*/
function add(name, phone){
	if(contacts.length===0){
		var contact = new Contact(name, phone);
		contacts.push(contact);
		return contacts;
	}
	for (var i=0; i<contacts.length; i++){
		if(contacts[i].name === name){
			console.log(contacts[i].phone + '!!');
			contacts[i].phone = contacts[i].phone + ', ' + phone; 
			break;
		}
		else{
			if(i===contacts.length-1){
				var contact = new Contact(name, phone);
				contacts.push(contact);	
				return contacts;
			}
		}
	}
	return contacts;
}

function phoneBook(commandName, name, phone){
	if(commandName==='ADD'){
			if(contacts.length===0){
			var contact = new Contact(name, phone);
			contacts.push(contact);
			return contacts;
		}
		for (var i=0; i<contacts.length; i++){
			if(contacts[i].name === name){
				contacts[i].phone = contacts[i].phone + ',' + phone; 
				break;
			}
			else{
				if(i===contacts.length-1){
					var contact = new Contact(name, phone);
					contacts.push(contact);	
					return contacts;
				}
			}
		}
		return contacts;
	}
	if(commandName==='REMOVE_PHONE'){
		for(var i=0; i<contacts.length; i++){
			if(contacts[i].phone.indexOf(phone)!=-1){
				var temp = contacts[i].phone.slice(contacts[i].phone.indexOf(phone), contacts[i].phone.indexOf(',' , contacts[i].phone.indexOf(phone))+1);
				console.log(temp);
				contacts[i].phone = contacts[i].phone.replace(temp, '');
				return true;
			}
			else{
				if(i===contacts.length-1){
					return false;
				}
			}
		}
	}
	if(commandName==='SHOW'){
		return contacts;
	}

}

function parseCommand(s){
	console.log(s);
	var commandName = s.slice(0, s.indexOf(' ')).trim();
	if(commandName==='ADD'){
		var secIndex = s.indexOf(' ', s.indexOf(' ')+1);
		var name = s.slice(s.indexOf(' '), secIndex).trim();
		var phone = s.slice(secIndex, s.length).trim();
		phoneBook(commandName, name, phone)
	}
	if(commandName==='REMOVE_PHONE'){
		var phone = s.slice(s.indexOf(' '), s.length).trim();
		console.log(phone);
		phoneBook(commandName, ' ', phone);
	}
	if(commandName==='SHOW'){
		phoneBook(commandName, ' ', ' ');
	} 
	
}




parseCommand('ADD Ivan 555-10-03,555-10-03');
parseCommand('ADD Ivan 555-10-01,555-10-33,111-22-33');
parseCommand('ADD Igor 555-10-01,555-10-03');
parseCommand('ADD Vlad 555-10-01,555-10-03,111-22-33');

//parseCommand('REMOVE_PHONE 555-10-33');




console.log(contacts);
