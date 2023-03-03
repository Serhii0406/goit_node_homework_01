const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join('db', 'contacts.json');

const listContacts = async () => { 
    try {
        const list = await fs.readFile(contactsPath);

        const contacts = list.toString();

        console.log(contacts)
    } catch (err) {
        console.log(err.message);
    }   
}
/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */

// TODO: задокументировать каждую функцию

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}