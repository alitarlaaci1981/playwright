to run a test, command is : npx playwright test HomePage.spec.js --project=chromium
npx playwright test : runs all tests in all browsers in headless mode
npx playwright test testName.spec.js : runs a specific test file;
npx playwright test testName.spec.js --project=chromium : runs a specific test file on specific browser
npx playwright show-report : comman to run report of the recently run test
npx playwright test testFileName.spec.js --headed :command to run specific test file in headed mode.
npx playwright test newtest.spec.js --project=webkit --headed : command to run specific test in a specific browser
-- note: whenever you add "--headed" in the command, this means this test will run on browser means browser windows can be seen
npx playwright codegen : command to open playwright codegen automation tool
