const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const app = express();
const server = http.createServer(app);
app.use(bodyParser({ extended: true }));

app.post("/message", (req, res, next) => {
    console.log(req.body);
    let arr = [];
    fs.readFile(path.join(__dirname, "data.json"), (err, data) => {
        if (err) {
            console.log(err);
            return;
        } else {
            try {
                arr = JSON.parse(data);
            } catch (error) {
                console.log(err);
                arr = [];
            }
            arr.push({ username: req.body.username, message: req.body.message });
            fs.writeFile(path.join(__dirname, "data.json"), JSON.stringify(arr), (err) => console.log(err));
        }
    });
    res.redirect("/");
});

app.get("/", (req, res, next) => {
    fs.readFile(path.join(__dirname, "data.json"), (err, data) => {
        let arr = [];
        if (err) {
            console.log(err);
        } else {
            try {
                arr = JSON.parse(data);
                console.log("array is ", arr);
            } catch (error) {
                arr = [];
            }
        }
        let extra = arr.map((obj) => {
            console.log("username is ", obj.username);
            return `
                <li>${obj.username}:<span></span><span></span>${obj.message}</li>
            `;
        }).join('');
        
        let html = `
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Login Page</title>
            </head>
            <body>
                <ul>${extra}</ul>
                <form id="loginForm" method="post" action="/message">
                    <label for="message">Message</label>
                    <input type="hidden" id="username" name="username">
                    <input type="text" id="message" name="message" required>
                    <button type="submit">Submit</button>
                </form>
                <script>
                    document.getElementById('loginForm').addEventListener('submit', function(event) {
                        event.preventDefault(); // Prevent the default form submission behavior
                        document.getElementById('username').value = localStorage.getItem('username');
                        document.getElementById('loginForm').submit();
                    });
                </script>
            </body>
            </html>
        `;
        
        res.send(html);
    });
});

app.get("/login", (req, res, next) => {
    let html = `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login Page</title>
        </head>
        <body>
            <h1>Login</h1>
            <form id="loginForm" method="post" action="/user">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                <button type="submit">Submit</button>
            </form>
            <script>
                document.getElementById('loginForm').addEventListener('submit', function(event) {
                    event.preventDefault(); 
                    const username = document.getElementById('username').value;
                    localStorage.setItem('username', username);
                    document.getElementById('loginForm').submit();
                });
            </script>
        </body>
        </html>
    `;
    
    res.send(html);
});

app.post("/user", (req, res, next) => {
    res.redirect("/");
});

server.listen(3000, () => console.log("Server started on port 3000"));
