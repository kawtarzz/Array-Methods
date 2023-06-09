const contacts = require('./data.json');

// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with. 

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result, 
// 2. store the result with a variable
// 3. appropriately log the results to the console

//You can put your solutions after each comment below:

//1. an array that contains all of the contacts that work at INSECTUS
//2. an array all of the contacts, with only the name property
const contactNames = contacts.map(contact => contact.name);
//3. an array of all of the contacts over the age of 50
const contactsOver50 = contacts.filter(contact => contact.age > 50);
//4. the first ten contacts when alphabetically ordered by name
const sortedContacts = contacts.sort((a, b)=> a.name.localeCompare(b.name));
//5. the oldest person's name
const oldestPerson = contacts.reduce((oldest, current)=> (current.age >oldest.age ? current : oldest))
const oldestPersonName = oldestPerson.name
//6. the contact id with the name Isabella Burke
const isabellaBurkeId = contacts.find(contact => contact.name === 'Isabella Burke').id 
//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties
const contactsSplitNames = contacts.map(contact => {
  const [firstName, lastName] = contact.name.split(' ')
  const {name, ...rest} = contact;
  return {...rest, firstName, lastName}
})

//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend
const correctFriends = {friends:[{}]}

// const friendsArray = contacts.map( contact => {
//   const foundFriend = friend.find(f => f === )
// })


//9. the average age of the contacts

//10. the median age of the contacts