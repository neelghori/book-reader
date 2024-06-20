### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/neelghori/book-reader.git
   ```
2. Navigate to the project directory:
   ```sh
   cd book-reader
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   or if you are using Yarn:
   ```sh
   yarn install
   ```

## Usage

### Development

To run the application in development mode with hot module replacement:

```sh
npm run dev
```

### Build

To run the application in Production mode:

```sh
npm run build
```

Then dist folder is created just serve that dist folder with libary like serve

```sh
npm install serve
```

```sh
serve -s dist
```

# Project Structure

- `book-reader/`  
  Root directory of the Vite.js project.

  - `node_modules/`  
    Directory where npm packages are installed.

  - `public/`  
    Static assets and entry HTML files.s

  - `src/`  
    Source code directory.

    - `assets/`  
      Directory for static assets like images, fonts, etc.

    - `components/`  
      Directory for all the custom component and UI components and Layout components.
    - `Context/`  
      This Folder Includes the context api and global state management system.
    - `Data/`  
       Folder Contain Dummy Data and some amount of data Table heading.
    - `hooks/`  
      Folder Contain custom hook like useRegister for login and register and usePagination for pagination of table and useBook for Book add and edit.
    - `Schema/`  
      This folder contain the validation schema used for form in formik.
    - `Types/`  
      This Folder Contain Type for Whole project.
    - `utils/`  
      This Folder Contain common function for get and set localstorage data.

  - `.gitignore`  
    Git ignore file to exclude certain files from version control.
  - `index.html`  
    Another index.html file (possibly a duplicate or template).
  - `package.json`  
    Metadata file for npm, including project dependencies and scripts.
  - `postcss.config.js`  
    This file is used for tailwind css.
  - `README.md`  
    Markdown file containing information about the project.
  - `tailwind.config.js`  
    This file is used for configure then tailwind css.
  - `tsconfig.json`  
    Folder Contain configuration of type and rule.
  - `tsconfig.json`  
    Folder Contain configuration of node type and rule.
  - `vite.config.js`  
    Configuration file for Vite.js, if customized.
