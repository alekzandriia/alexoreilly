#!/usr/bin/env node

import chalk from 'chalk' // pretty colours
import chalkAnimation from 'chalk-animation' // animations
import terminalLink from 'terminal-link' // clickable links
import {select, confirm} from '@inquirer/prompts'; // interactive menu
import open from 'open' // open links 

// LINKS
const username = 'alekzandriia'
const links = {
  website: `https://www.${username}.com`,
  twitter: `https://www.twitter.com/${username}`,
  github: `https://www.github.com/${username}`,
  codepen: `https://www.codepen.com/${username}`,
  dribbble: `https://www.dribbble.com/${username}`
}

// INFO
const info = {
  name: "Alex O'Reilly",
  location: "Canada",
  email: "hello@alekzandriia.com",
  twitterID: "1416902515275321352",
  humanLang: ["English (native)", "Spanish (In progress)"],
  compLang: ["HTML", "CSS", "JavaScript", "SQL", "Bash"],
  tech: ["React", "Tailwind", "Bootstrap", "Express", "MongoDB", "Wordpress", "Figma"],
}

// TIP: use backticks to facilitate line breaks (template literals)
const message = "Oh hey there! You've found my business card."
const displayMessage = () => {
  console.log(`${chalk.magenta(message)}`)
}

const contactMethods = async () => {
  const answer = await select({
    message: "Let's get in touch!",
    choices: [
      {
        name: 'twitter',
        value: 'twitter',
        description: `Send a twitter DM to ${username}`,
      },
      {
        name: 'email',
        value: 'email',
        description: `Send an email to ${info.email}`,
      },
      {
        name: 'cancel',
        value: 'cancel',
        description: 'Actually, Maybe later',
      }
    ],
  });
  if (answer === 'twitter') {
    open(`https://twitter.com/messages/compose?recipient_id=${info.twitterId}`)
  }
  if (answer === 'email') {
    open(`mailto:${info.email}`)
  }
}

async function displayLinks () {
  console.log(`
  Find me on the internet.

  ${chalk.bgMagenta(`Website `)} -> ${chalk.magenta(`${links.website}`)}
  ${chalk.bgBlue(`Twitter `)} -> ${chalk.blue(`${links.twitter}`)}
  ${chalk.bgMagenta(`Github  `)} -> ${chalk.magenta(`${links.github}`)}
  ${chalk.bgBlue(`CodePen `)} -> ${chalk.blue(`${links.codepen}`)}
  ${chalk.bgMagenta(`Dribbble`)} -> ${chalk.magenta(`${links.dribbble}`)}

  Tip: Try ${chalk.blue('cmd/ctrl + click')} on the links above
  `)

}

// Display Card
const titleAnimation = () => {
  const rainbow = chalkAnimation.rainbow(`${username}`)
  setTimeout(()=> {
    const glitch = chalkAnimation.karaoke(`${info.name}\n`)
    setTimeout(()=> {
      glitch.stop()
      displayMessage()
      displayLinks()
      setTimeout(async ()=> {
        const answer = await confirm({ message: `${chalk.yellow('Want to say hi?')}` });
          if (answer) {
            contactMethods()
          }
      },3000)
    },2000)
  },1000)
}

titleAnimation()