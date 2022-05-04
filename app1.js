require('dotenv').config()

const  Trello = require('./main');

var trello = new Trello(process.env.KEY, process.env.TOKEN);
var cardTitle = `Card Nueva desde Node.js`;

console.log("Ejecutando!");
console.log(process.env.KEY);

trello.addCard(cardTitle, "LaunchX Card Description", "627038f5421c536a1febcc75",
  function (error, trelloCard) {
    
    console.log(error)
    console.log(trelloCard)


    
    if (error) {
      console.log('Could not add card:', error);
    }
    else {
      console.log('Added card:', trelloCard);
    }
  });