const mysql = require('mysql2');
var Promise = require('bluebird')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'takenote'
});

const db = Promise.promisifyAll(connection);

// db.connectAsync()
// .then(() =>
//   db.queryAsync(
//     `CREATE TABLE IF NOT EXISTS notes (
//       id int NOT NULL AUTO_INCREMENT,
//       title varchar(255) NOT NULL,
//       category varchar(255) NOT NULL,
//       tagline varchar(255) NOT NULL,
//       note varchar(1024) NOT NULL,
//       status ENUM('None', 'Hidden', 'Starred') NOT NULL,
//       PRIMARY KEY (id)
//     )`
//   )
// )
// .catch((err) => {console.log('err in db.connect')})
// .then(() =>
//     db.queryAsync(
//       `INSERT into notes (title, category, tagline, note) VALUES ("Resonance structures", "Science", "A set of two or more Lewis Structures that collectively describe the electronic bonding a single polyatomic species including fractional bonds and fractional charges.", "In chemistry, resonance, also called mesomerism, is a way of describing bonding in certain molecules or ions by the combination of several contributing structures into a resonance hybrid in valence bond theory.")`
//     )
// )
// .catch((err) => {console.log('err within first table')})
// .then(() =>
//     db.queryAsync(
//       `INSERT into notes (title, category, tagline, note) VALUES ("Pet Moose of Tycho Brahe", "History", "A moose that was the pet of Tycho Brahe.", "Danish astronomer, alchemist, and nobleman Tycho Brahe had a pet moose that died when it drank too much beer and fell down a flight of stairs.")`
//     )
// )
// .catch((err) => {console.log('err within 2nd table')})
// .then(() =>
//     db.queryAsync(
//       `INSERT into notes (title, category, tagline, note) VALUES ("London Beer Flood of 1814", "History", "A catastrophic event in which 610,00 liters of beer killed 8 people and destroyed 2 homes.", "In London, in 1814, a vat containing over 610,00 liters of beer ruptured, causing other vats to burst. As a result, more than 1,470,000L of beer burst out into the streets. The London Beer Flood wave destroyed two homes and crumbled the wall of a nearby pub. 8 people died.")`
//     )
// )
// .catch((err) => {console.log('err within 3rd table')})

module.exports = db;