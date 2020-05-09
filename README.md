This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Deploy React App to GitHub Pages

1. Created a repository named aboutme using create-react-app using terminal.

`npm init react-app aboutme`

2. Installed GitHub Pages package as a dev-dependency using terminal.

`cd aboutme`
`npm install gh-pages --save-dev`

3. Open and Add properties to package.json file 

`"homepage": "http://lawrence-cs.github.io/aboutme",
 //...,
 "scripts": {
	//...
	"predeploy": "npm run build",
	"deploy": "gh-pages -d build"
 }
`

4. Create a Github repository and initialize it and add it as a remote in your local git repository using terminal

`git init`

5. Add Github repository as remote  using terminal

`git remote add origin git@github.com:lawrence-cs/aboutme.git`

6. Deploy repository to GitHub Pages

`npm run deploy`

7. Edit page then commit and push your commit to GitHub using these commands:

`git add .`
`git commit -m "your commit description"`
`git push origin master`