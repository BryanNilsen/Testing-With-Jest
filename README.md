# Basic Testing using Jest

## Initial Setup

1. In your workspace directory, create a new project directory: `mkdir Testing-Exercises`
2. Navigate to your new project directory: `cd Testing-Exercises`
3. Initialize project directory to track npm packages: `npm init`

- package name: _( press enter or return )_
- version: _( press enter or return )_
- description: _( press enter or return )_
- entry point: _( press enter or return )_
- test command: `jest --verbose --watchAll`
- git repository: _( press enter or return )_
- keywords: _( press enter or return )_
- author: _( press enter or return )_
- license: (ISC) _( press enter or return )_

4. Install testing framework and dependencies: `npm install --save-dev jest babel-jest puppeteer @babel/core @babel/plugin-transform-modules-commonjs`
5. Launch VS Code from your project's root directory and add the following code to your `package.json` file (after main/before scripts):

```
"directories": {
    "test": "test"
},
```

6.  Create a `.babelrc` file in your project's root directory and paste the following code:

```
{
    "env": {
        "test": {
            "plugins": [
                "@babel/plugin-transform-modules-commonjs"
            ]
        }
    }
}
```

7. Initialize directory for version control: `git init`
8. Create `.gitignore` and add files/directories to ignore:
   `echo -e ".DS_Store\nnode_modules" >> .gitignore`
9. create `test` directory: `mkdir test`
10. create `src` directory: `mkdir src`
11. create a `scripts` directory in `src`: `mkdir src/scripts`

This is a great time to add and commit your work, make a GitHub repository, connect to your local repository, and push your work.

## Writing our First Tests:

1. Let's remember our git flow and make a new branch
2. create add.js file inside scripts directory
3. write function to return sum of two parameters
4. test in console
5. create add.test.js file in test directory
6. paste the following code into add.test.js

```
import { add } from "../src/scripts/add.js";

let result;

describe("Function calculates sum of parameters", () => {
  beforeAll(() => {
    result = add(1, 2);
  });

  test("result has correct sum", () => {
    expect(result).toBe(3);
  });
});

```

7. Back in your terminal, in the project root directory, start your test suite: `npm run test`
8. Notice the results
9. This is a great time to keep those git skills fresh. You know what to do.

## Time for some TDD

Test-Driven Development explanation or link here

1. Create new test (code to test doesn't exist yet... so it will automatically fail)
2. Subtraction
3. Write code to pass test
4. Check your terminal to see how you did.

Things to test:
if items exist in an array
keys/values on an object
string representations
