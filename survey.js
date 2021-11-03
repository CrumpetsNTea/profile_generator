const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const spinner = () => {
  let time = 100; //establish a time variable
  let el = ['\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    ', '\r-    ', '\r\\   ', '\r|  ']; //array of slash strings
  for (let i of el) { //loop through array of slash strings
    setTimeout(() => {
      process.stdout.write(i);//print out slash string
    },time); time += 100; //increase time with each slash string printed
  }
};


rl.question(`What's your name? Nicknames are also acceptable:`, (answer1) => {
  console.log(`Hi ${answer1.trim()}!`); //trim any excess whitespace in case user hits space to space away from colon when inputting name
  
  rl.question(`What's an activity you like doing?`, (answer2) => {
    console.log(`${answer2.trim()} is a pretty great activity!`);

    rl.question(`What do you listen to while doing that?`, (answer3) => {
      console.log(`${answer3.trim()} is a great choice!`);

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer4) => {
        console.log(`MMM ${answer4.trim()}`);

        rl.question(`What's your favourite thing to eat for that meal?`, (answer5) => {
          console.log(`Oh yeah, ${answer5.trim()} is definitely the best`);

          rl.question(`Which sport is your absolute favourite?`, (answer6) => {
            console.log(`${answer6.trim()} is a pretty fun time`);

            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer7) => {
              console.log(`woah, ${answer7.trim()} is amazing!`);
                
              console.log(`Thank you for your answers. Now generating profile blurb...`);
              spinner(); //puts a little spinner so it looks like it's really generating a profile blurb
              setTimeout(() => {
                process.stderr.write('\x07'); //plays a little ding when profile is generated
                console.log(`\n\n${answer1.trim()} loves listening to ${answer3.trim()} while doing ${answer2.trim()}. ${answer1.trim()} also thinks ${answer4.trim()} is the best meal of the day
and there isn't anything else in the world better than eating ${answer5.trim()}. ${answer1.trim()}'s favourite sport is ${answer6.trim()}. 
But most importantly ${answer1.trim()}'s superpower is...
${answer7.trim()}!`);
              },1500); //prints this out 1000ms after the profile blurb console.log
                
              
              setTimeout(() => {
                console.log(`\nProfile generated! Thank you for using our program 😄\n`);//new lines to make it look nice in terminal
              }, 3000); //prints this out 3000 after the profile blurb log


              //Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch,
              //prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.


              rl.close(); //closes readline instance
            });
          });
        });
      });
    });
  });
});