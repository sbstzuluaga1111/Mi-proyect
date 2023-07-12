import app from "./src/app.js"

const main = () => {
    app.listen(app.get("port"));
    console.log(`The company's Server is Running on port ${app.get("port")}`);
}

main();