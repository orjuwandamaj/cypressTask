# cypressTask
This task is considered to run 2 test cases 
1. Negative- Verify that requiered field validation error is shown if the user didn't enter a pin code
2. Positive- Verify that the error is disappered once entering a valid pin

The script will hit samsung website, add a device to the cart then checkout as a guest to shipping address form

To run this task on your local computer you need to do the following:
1.  Download Nodejs and NPM
2. Set NODE_HOME Environment Variable
3. Create Cypress Working Folder
4. Generate package.json (npm init)
5. Install Cypress (npm install cypress --save-dev)
6. Download Visual Studio Code Editor

Notes:
1. Hit the site, add the device and checkout as a guest scenario is in (CypressAutomation\cypress\support\commands.js) file
2. The test cases are in (CypressAutomation\cypress\integration\2-advanced-examples\stuffTask.js) file
3. The used selectors are all css selector (since it's just a simple task- for sure IDs are better in some cases)
4. We preferred to put the selectors in separate file in case they will be used in different test cases (since it's just a simple task and I don't know cypress, I ignored it)
