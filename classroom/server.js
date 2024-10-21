const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOption = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
};

app.use(session(sessionOption));
app.use(flash());

app.use( (req, res, next) =>{
    res.locals.successMsg = req.flash("success") ;
    res.locals.errorMsg = req.flash("error") ;
    next();
});

app.get ("/register", (req, res)=> {
    let { name = "anonymous" }= req.query;
    req.session.name = name;

    if(name === "anonymous"){
        req.flash("error", "Some Error");
    }else{
        req.flash("success", "User registred Successful");
    
    }   
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    res.render("page.ejs", { name: req.session.name });
});

// app.get("/count", (req, res)=> {
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     }
    
//     res.send(`you sent a req ${req.session.count} times`);
//   });

//   app.get("/test", (req, res)=> {
//     res.send("Test succesfull");
//   });

// app.use(cookieParser("secretcode"));

// app.get("/getsignedcookies", (req, res) => {
//     res.cookie("made-in", "India", {signed: true});
//     res.send("signed cookie send");
// });

// app.get("/verify", (req, res) => {
//     console.log(req.signedCookies);
//     res.send("verifyed")
// })

// app.get("/getcookies", (req, res) => {
//     res.cookie(" greet ", "hello");
//     res.cookie(" madeIN ", "India");
//     res.send("sent you some cookies");
// });

// app.get("/greet", (req, res) => {
//     let { name = "anonymous" } = req.cookies;
//     res.send(`hi, ${ name }`);
// });

// app.get("/", (req, res) => {
//     console.dir(req.cookies);
//     res.send("hi i am Root");
// });

// app.use("/users", users);
// app.use("/posts", posts);

app.listen(3000, ()=> {
    console.log("server is listing to 3000");
});