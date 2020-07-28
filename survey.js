const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question('What is an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (food) => {
          rl.question('Which sport is your absolute favourite?', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (power) => {
              console.log(`Hi! My name is ${name}! I like to listen to ${music} while I ${activity} or I ${sport}. I like to eat ${food} for my favorite meal ${meal}. I am most amazing at ${power}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
