This project is a quick demonstration of page objects using the MyGov website.  

Using page objects is very much an object-oriented approach to simplify test scripting.  All the low level detail used to find elements, widgets, menus and links on the page are stored inside page object classes. 
So none of the tests need to have details of CSS classes, xpath or HTML, the tests just use the simpler page object method calls to interact with the web page.

If the CSS or other aspect of the page changes then likely only one page object will need to be modified rather than changes being needed in lots of tests.

To run the one test named 'test1', do the following:
* Install Node.js from here: https://nodejs.org/en/download/
* Install TypeScript
   - npm install typescript --save-dev
* Install Cypress from here https://docs.cypress.io/guides/getting-started/installing-cypress:
   - cd /your/project/path
   - npm install cypress --save-dev
* Run Cypress from command line as described here https://docs.cypress.io/guides/getting-started/opening-the-app#cypress-open:
   - npx cypress open
   - Choose the Testing Type 'E2E' by clicking 'Not Configured' and then accept the default config
   - Choose a browser
* Run the test 'test1' at the bottom of the list of tests
* npx cypress --version

The test does not do much, it goes to every linked page in the header navigation, in the footer navigation and the top navigator navigation.
It then starts at the home page and searches for the word 'access' in the search page and confirms it finds the 'Accessibility' page in the results 