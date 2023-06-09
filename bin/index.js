#!/usr/bin/env node

import chalk from 'chalk'; // pretty colours
import chalkAnimation from 'chalk-animation'; // animations
import terminalLink from 'terminal-link'; // clickable links

// use backticks to facilitate line breaks (template literals)
const link = terminalLink('My Website', 'https://alekzandriia.com');
// const sleep = (ms=2000) => { new Promise((r) => setTimeout(r,ms))}
async function welcome() {
  chalkAnimation.rainbow("Alexandria O'Reilly");
setTimeout(() => {
    // Stop the animation, then write on a new line.
    console.log("aka alekzandriia");
}, 3000);
}

async function message() {
  console.log(chalk.blue(`
Hey, How's it going?
This is a test!
Text.... text....        <3

${chalk.red("I'm RED")}
        ${link}
`))
}
await message()
await welcome()
await message()