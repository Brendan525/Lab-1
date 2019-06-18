class AddressBook {
    constructor(contacts){
    this.contacts = [];
    }

add(info) {
    this.contacts.push(info)
}

deleteAt(index) {
  this.contacts.splice(index, 1,)
}

print() { 
  console.log(book)
}

}

class Contact {
    constructor(name, email, phone, relation){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
    }

}

let book = new AddressBook();



while(true) {
    const response = prompt("Would you like to add, delete, print or quit?");
    if (response === 'quit'){
        break;
    }
      
    if(response === 'add') {
        const name = prompt("What is the person's name?");
        const email = prompt("What is the person's email?");
        const phone = prompt("What is the person's what is the person's phone number");
        const relation = prompt("What is the person's relation to you?");
        book.add(new Contact(name, email, phone, relation));
    }

    if(response ==='delete') {
        book.deleteAt(book);
    }
    
    if(response === 'print') {
        book.print();
    }
    
  
    }
    
 