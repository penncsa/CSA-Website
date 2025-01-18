This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Contributors (POC):

- Samuel Xu (CSA 2017-2020), samuelgxu@gmail.com
- Christina Lu (CSA 2019-2021), christina.lu.12@gmail.com
- Jimmy Ren (CSA 2019-2021)
- Evan Ping (CSA 2023-2026)

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

The of the content is fetched from [this Google Spreadshet](https://docs.google.com/spreadsheets/d/1ynEzX8p1P1wVxqVFl6Ksyf5g2jtqx_AMc-gnZAbv4E8/edit) which was publically exposed as a `GET` API. When you know the Google Sheet ID, you can insert it into the following and use it as the API Endpoint (and use page num 1-3 for the tabs):

```
https://sheets.googleapis.com/v4/spreadsheets/{spreadsheet_id}/values/{page_title}?alt=json&key=${GOOGLE_SHEETS_API_KEY}
```

[source](https://www.freecodecamp.org/news/cjn-google-sheets-as-json-endpoint/)
