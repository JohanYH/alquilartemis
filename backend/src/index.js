import app from "./app.js";

const main = () => {
    app.listen(app.get("port"));
    console.log(`The Company's ${app.get("port")}`);
}

main();