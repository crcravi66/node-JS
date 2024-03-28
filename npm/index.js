const jokes = require("give-me-a-joke");

const colors = require('@colors/colors');

jokes.getRandomDadJoke(function (joke){
    console.log(joke.inverse);
    console.log(joke.rainbow);
    console.log('hello'.green);
})


