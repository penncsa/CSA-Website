This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Contributors (POC): 
* Samuel Xu (CSA 2017-2020), samuelgxu@gmail.com
* Christina Lu (CSA 2019-)
* Jimmy Ren (CSA 2019-)

## Available Scripts

### `npm install`
Installs all the node-modules 

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run deploy`
This builds and pushes the environment to our production host via gh-pages (which is on the `gh-pages` branch of this repository)


## Overal Development Flow

1. Clone the Repo
2. Develop Feature Branch
3. Merge into Master 
4. Deploy Master with `npm run deploy` while on the latest master branch


## Google Spreadsheet Integration
The of the content is fetched from [this Google Spreadshet](https://docs.google.com/spreadsheets/d/18w6c_IrhriRMUK4VRcFkQQ4bBEDSeQFT03O7_OSZ_Pw/edit?usp=sharing) which was publically exposed as a `GET` API. When you know the Google Sheet ID, you can insert it into the following and use it as the API Endpoint (and use page num 1-3 for the tabs):

```
https://spreadsheets.google.com/feeds/cells/{sheet-code}/{page-num}/public/full?alt=json
```
[source](https://www.freecodecamp.org/news/cjn-google-sheets-as-json-endpoint/)
