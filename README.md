Initialize a new npm project if not already done
`npm init -y`

Install main dependencies
`npm install express @documenso/pdf-sign multer`

Install webpack and related dependencies
`npm install --save-dev webpack webpack-cli path-browserify`

Install dev server for development (optional but recommended)
`npm install --save-dev webpack-dev-server`

To run the project in development mode, run the following command:

```bash
npm run build
``` 

And finally, run the following command to start the server:

```bash
npm start
```

We can find a test certificate in the `certs` folder. The password for the certificate is `test`.