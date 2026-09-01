import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {

    // Home page
    if (req.url === "/") {

        const stream = createReadStream("./pages/airtag.html", {
            encoding: "utf-8"
        });

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        stream.pipe(res);
    }

    // Product JSON data
    else if (req.url === "/phones") {

        const stream = createReadStream("./product.json", {
            encoding: "utf-8"
        });

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        stream.pipe(res);
    }

    // Page not found
    else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 - Page Not Found");
    }

});

server.listen(3001, () => {
    console.log("Server is running on port 3001...");
});