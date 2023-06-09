# README

This node application displays a business card in the terminal, with contact information and clickable links to various online platforms.

To view the business card in your terminal application you can simply run the command:

`npx alekzandriia`

To run the application locally, use the following instructions.

## Prerequisites

- Node.js installed on your machine

## Installation

- Clone the repository or download the source code.
- Open the terminal and navigate to the project directory.
- Run the following command to install the dependencies:

  `npm install`

## Usage

- In the terminal, navigate to the project directory.
- Run the following command to start the application:

  `./bin/index.js `

- The business card will be displayed in the terminal with contact information and clickable links.
- Use cmd/ctrl + click to open the links in a browser.
- Additionally, you can interact with the application by selecting options from the interactive menu.

## Customization

This business card includes information about myself, but it can easily be customized for you to use yourself!

All you need to do is replace the data in the `links` object and the `info` object.

NOTE: I have the same username for all of my online accounts, so changing the `username` variable updates all of the links accordingly. If you use different usernames for different platforms then you'll have to update each link manually.

You will also want to update the package.json with your own `name`, `description` and `bin`.

Publish your customized app to npm if you want to share it with others. 🤗

## Dependencies

    chalk: Used for adding colors to the terminal output.
    chalk-animation: Used for creating animated effects in the terminal.
    terminal-link: Used to create clickable links in the terminal.
    inquirer: Used for creating an interactive menu in the terminal.

## Code Structure

The code is structured as follows:

- The links object contains URLs for various online platforms.
- The info object contains personal information such as name, location, and contact details.
- The message variable stores a greeting message.
- The displayMessage function displays the greeting message in the terminal.
- The contactMethods function presents an interactive menu to select a contact method (Twitter DM or Email).
- The displayLinks function displays the clickable links in the terminal.
- The titleAnimation function creates an animated effect for the username and name.
- Finally, the titleAnimation function is invoked to start the application.

## Contact

For any questions or inquiries, please feel free to reach out to Alex O'Reilly at hello@alekzandriia.com.

## License

This project is licensed under the [ISC](https://choosealicense.com/licenses/isc/) License.
