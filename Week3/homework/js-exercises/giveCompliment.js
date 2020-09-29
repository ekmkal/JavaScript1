'use strict'

const giveCompliment = name => {
    const compliments = ['great', 'awesome', 'smart', 'clever', 'perfect',
    'wonderful', 'kind', 'thoughtful', 'incredible', 'special'];
    const randomCompliment = compliments[
        Math.floor(Math.random() * compliments.length)
    ];
    return console.log("You are %s, %s!", randomCompliment, name);
}

giveCompliment('ekmel');
giveCompliment('ekmel');
giveCompliment('ekmel');