const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname,'db', 'contacts.json');

const listContacts = async () => { 
    try {
      const contacts = await fs.readFile(contactsPath, "utf-8");
      return JSON.parse(contacts);
    } catch (err) {
        console.log(err.message);
    }   
}

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    return contacts.find((contact) => String(contact.id) === String(contactId));
  } catch (err) {
    console.log(err.message)
  }
}

const removeContact = async (contactId)  => {
  try {
    const contacts = await listContacts();
    const newContactsList = contacts.filter((contact) => String(contact.id) !== String(contactId));
    await fs.writeFile(contactsPath, JSON.stringify(newContactsList, null, 4))
  } catch (err) {
    console.log(err.message)
  }
}

const addContact = async (name, email, phone) => {
  try {
    const id = crypto.randomUUID();
    const contacts = await listContacts();
    const newContact = { id, name, email, phone };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 4));
    return newContact;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact
};