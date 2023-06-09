#!/usr/bin/env node

import chalk from 'chalk'; // pretty colours
import chalkAnimation from 'chalk-animation'; // animations
import terminalLink from 'terminal-link'; // clickable links

// TIP: use backticks to facilitate line breaks (template literals)

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
  humanLang: ["English (native)", "Spanish (In progress)"],
  compLang: ["HTML", "CSS", "JavaScript", "SQL", "Bash"],
  tech: ["React", "Tailwind", "Bootstrap", "Express", "MongoDB", "Wordpress", "Figma"],
}

// Message
const message = "Oh hey there!"
console.log(message)

// async function message() {
//   console.log(chalk.blue(`
// Hey, How's it going?
// This is a test!
// Text.... text....        <3

// ${chalk.red("I'm RED")}
//         ${website}
// `))
// }



const titleAnimation = (title, name) => {
  const rainbow = chalkAnimation.rainbow(title)
  setTimeout(()=> {
    const glitch = chalkAnimation.glitch(name)
    setTimeout(()=> {
      glitch.stop()
    },3000)
  },3000)
}


//titleAnimation('Business Card', 'alekzandriia')


