
# Hópaverkefni 1 - TÖL107G - Team 38

This is the repository for Hópaverkefni 1 in TÖL107G. The project is structured to use modern web development tools like Sass, Stylelint, and Browser-Sync for streamlined development and styling.

## How to Clone the Repository

To clone this repository to your local machine, follow these steps:

1. Open your terminal.
2. Navigate to the directory where you want to store the project.
3. Run the following command to clone the repository:

   ```bash
   git clone https://github.com/janusbirgisson/hopaverkefni-1
   ```

4. Navigate into the project directory:

   ```bash
   cd hopaverkefni-1
   ```

5. Install the required dependencies by running:

   ```bash
   npm install
   ```

## Project Setup and Structure

The project is organized in the following way:

- **Root Directory**: Contains key configuration files such as `package.json`, `index.html`, and `styles.scss`. These files form the foundation of the project.
- **O: All the css files are kept under the `styles` folder, all images under `images`, all fonts under `fonts` and all the html files other than `index.html` under the `sites` folder.
- **Sass/CSS**: We use Sass for styling. The `styles.scss` file is the main entry point for all styles. It is automatically compiled to `styles.css` when running the dev server.
- **Development Tools**:
  - **Sass**: For compiling `.scss` files to CSS.
  - **Stylelint**: For enforcing consistent coding styles in Sass.
  - **Browser-Sync**: Automatically refreshes the browser when changes are made, providing live feedback during development.
  - **Concurrently**: To run multiple npm scripts in parallel.

## How to Run the Project

### Development Server

To start the development server with live reloading, run the following command:

```bash
npm run dev
```

This will start **Browser-Sync** to serve the `index.html` file and watch for any changes to `styles.css` or `index.html`.

### Linting

To check the code for style issues using Stylelint, run the following command:

```bash
npm run lint
```

This will lint the `styles.scss` file and any other `.scss` files in subdirectories to ensure the code follows the configured Sass style guidelines.


## Development Workflow

1. **Run the dev server**:  
   `npm run dev` — This will watch and compile the Sass file and serve the project with live-reloading.
   
2. **Edit Sass**:  
   Create and modify scss files under the styles folder, then import them using `@import` notation in the `styles.scss` file. npm run dev ensures that `styles.scss` is being watched for any changes and compiles that automatically to `styles.css` which is being watched by browser-sync

3. **Run the linter**:  
   `npm run lint` — This checks the code for any issues, ensuring clean and consistent styles.

## Contributors

- **Aser Kroma**  
  HÍ email: `ask57@hi.is`  
  GitHub Username: [AserKr](https://github.com/AserKr)

- **Janus Bjarki Brigisson**  
  HÍ email: `hiusername2`  
  GitHub Username: [janusbirgisson](https://github.com/janusbirgisson)
