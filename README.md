# FOXI App external pages

## Welcome to FOXI App

### How to Start

Follow these steps to get the project up and running:

1. **Node Version Manager (nvm) and .nvmrc**:
   Before starting, ensure you have `nvm` installed. If not, you can get it from [nvm's GitHub repository](https://github.com/nvm-sh/nvm).
   After installing `nvm`, navigate to the project root and run the following command to ensure you're using the right version of Node.js as specified in the `.nvmrc` file:

   ```bash
   nvm use
   ```

2. **Environment Variables**:
   To work with application we need file named `.env` filled in the required environment variables:
   ```bash
   VITE_API_URL=xxx
   ```
3. **Start dev server**:
  variables:
   ```bash
   npm run start
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Workspace

- **Figma**:
  Design mockups and prototypes are available on [Figma](https://www.figma.com/file/YuuplmVRGTsVjagWHKf6Id/kvdoc-design?node-id=6938%3A99865&mode=dev).

- **Jira**:
  Task management and project tracking can be monitored on [Jira](https://kv-doc.atlassian.net/jira/software/projects/FOXI/boards/2).

- **Stage Environment**:
  Our staging environment where testing and pre-production reviews are done can be found [here](https://master.d30gm1ri83varx.amplifyapp.com/).

- **Production Environment**:
  Our production environment [here](https://stage.d30gm1ri83varx.amplifyapp.com/).

### Technologies Used

- **AWS Amplify**: Used for backend services and cloud integration, enabling authentication, API, storage, and more.

## How to Contribute

To ensure consistency and maintain the quality of the project, we have set a few guidelines and best practices. Before diving in, please familiarize yourself with the following:

### 1. **Set Up Your Development Environment**:

Follow the steps mentioned in the "How to Start" section to set up the project on your local machine.

### 2. **Commenting and Documentation**:

- **JSDoc**: Use [JSDoc](https://jsdoc.app/) to document functions, classes, and other relevant pieces of code. This helps in understanding the purpose and usage of the code quickly.

  ```javascript
  /**
   * Calculates the area of a rectangle.
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   * @returns {number} - The area of the rectangle.
   */
  function calculateArea(width, height) {
    return width * height;
  }
  ```

- **Comments**: Always leave comments for complex logic or hacks. This ensures that anyone revisiting the code can understand your reasoning.
  ```javascript
  // Reverse the array if the flag is set to true
  if (shouldReverse) {
    arr.reverse();
  }
  ```

### 3. **Commit Convention**:

We use a commit message convention to maintain a consistent and readable Git history. Before making a commit, make sure your commit message follows the structure:

Examples:

- `feat(auth): implement login functionality`
- `fix(button): resolve hover state issue`
- `docs(readme): update contribution guidelines`

Common types include:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Formatting, missing semicolons, etc (does not affect code functionality)
- `refactor`: Refactoring production code
- `test`: Adding tests or making test corrections
- `chore`: Maintenance tasks

More details [here](https://www.conventionalcommits.org/en/v1.0.0/).

### 4. **Pull Request (PR)**:

- Create a new branch for the feature or fix you're working on. Branch naming can follow the convention: `feature/<feature-name>` or `fix/<issue-name>`.
- Make sure your code changes are in line with the project's standards and guidelines.
- Once you're ready, submit a PR to the `main` branch (or the appropriate development branch, if specified).
- Describe your changes thoroughly in the PR description.
- Link any related issues or documentation.

### 5. **Code Reviews**:

- After submitting your PR, request a code review.
- Address any comments or suggestions given during the code review process.
- Once approved, the code will be merged into the main codebase.

By following these best practices, you ensure a seamless collaboration experience and help maintain the project's quality and consistency. Happy coding and thank you for contributing! 🌟

Happy coding! 🚀
