# Dev_Notes : Secured on the cloud
### Dev_Notes is a Notes App created using MERN Stack, to help users store their notes, and access it anywhere anytime.

----

## Getting Started with the Project

- Fork the Repository.
- Clone the Repository to your local Environment.
```js
run `git init` in your project directory
run `git clone Your_Repository_Link` ex.=> `git clone https://github.com/YOUR_GITHUB_USERNAME/Dev_Notes.git`
```
- Run `npm run init` cpmmand in the root directory of the project (To install all the dependencies).
- Create a .env file in the "Backend" Folder.
```js
JWT_SIGNATURE = YOUR_JWT_SECRET
MONGO_URI = YOUR_MONGO_DB_URL
FRONTEND = YOUR_FRONTEND_WEBSITE_LINK (after deploying your frontend)

```
- Create a .env file in the "Frontend" Folder.
```js
REACT_APP_HOST = http://localhost:YOUP_PORT(5000)
In Development => http://localhost:YOUP_PORT(5000)
In Production  => YOUR_BACKEND_WEBSITE_LINK (afer deploying your backend)
```
- Run `npm run dev`

`Your App is live on port 3000 and server is running on YOUR_PORT(5000)`

----
### Update App according to you.
- run `git branch -M main`
- run `git remote add origin main`
- Update or Add any functionality
- run `git add .`
- run `git commit -m "YOUR_COMMIT_MESSAGE"`
- run `git push -u origin main`

`You have Updated you Github Repository with these changes`

----
## Deploy the App
- Create an Accout on Render.com
- Connect your Github account
- Allow Your Repository access for render

### Create Frontend 
- On Dashboard click NEW => create static site=> connect your github repository and fill the information
```js
Name : YOUR_APP_NAME
Branch : main
Root Directory : Frontend
Build Command : npm run production
publish directory : build
auto deploy : yes

```
- click create static site 
- Copy your WEBSITE_URL it will needed in next step.

### Create Backend
- On Dashboard click NEW => create web server=> connect your github repository and fill the information
```js
Name : YOUR_APP_NAME-api (app name used for frontend with '-api' after it)
Bramch : main
Root Directory : 
Build Command : npm i --prefix Backend 
Start Command : node Backend/index.js
auto deploy : yes
Under Environment => add enviromnment=> create a environment variable
key   : FRONTEND
value : YOUR_FRONTEND_WEBSITE_URL (PASTE YOUR FRONTEND URL HERE),
key   : JWT_SIGNATURE
value : YOUR_JWT_SECRET,
key   : MONGO_URI
value : YOUR_MONGO_DB_URL
```
- click create web server
- Copy your WEBSITE_URL
- Go to dashboard and go to your frontend app
- Under Environment => add enviromnment=> create a environment variable
```js
key   : REACT_APP_HOST
value : YOUR_BACKEND_WEBSITE_URL

```
 
 ----

## Your website is live on your Frontend Website Link.


