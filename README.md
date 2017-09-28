# woodiwiss.me  
## Development Process  

Check out the links below to see how I approached each area of developing my portfolio website.  

- [CSS](https://github.com/dwoodiwiss/woodiwiss-theme-2015/blob/master/scss/README.md)  
- JavaScript  

---

### Tools
Below are some of the tools I have used on this project, as well as the corresponding config files.  

- [Ghost Blogging Platform](https://github.com/TryGhost/Ghost)
- [Gulp](http://gulpjs.com/) - `gulpfile.js`
- [SCSS-Lint](https://github.com/brigade/scss-lint) - `.scss-lint.yml`
- [EditorConfig](http://editorconfig.org/) - `.editorconfig`
- [ESLint](http://eslint.org/) - `coming soon`


## Getting Started
This theme is to be ran on the [Ghost](https://github.com/TryGhost/Ghost) blogging platform, it's open source and free.  

### Setup

#### Local / Development
It's probably best to follow the local install instructions found on [docs.ghost.org](https://docs.ghost.org/v1/docs/install-local).  

If you want the server to reload on changes:  
- Install [nodemon](https://www.npmjs.com/package/nodemon)  
- Run `nodemon current/index.js --watch content/themes/woodiwiss-theme --ext hbs,js,css`  
- In a new terminal instance, navigate to the theme directory and run: `gulp`  
- View your website at: `http://localhost:2368`  
- You can also view the admin area at: `http://localhost:2368/ghost`

#### Production
- Download the [latest](https://ghost.org/developers/) Ghost release
- Extract the .zip file and navigate to the root of that directory
- Run `npm install --production`
- Run `npm start`
- Clone this repo into the `/content/themes/` directory
- Navigate into the cloned directory
- Run `npm install`
- In a new terminal instance, run `gulp`
- View your website at: `http://localhost:3000`
- You can also view the admin area at: `http://localhost:3000/ghost`

### Development Next Steps / Todo

- ~~Migrate Images from Live~~
- Explore tags and displaying them in `index.hbs`
- Deploy script?
- Add a comment system?
