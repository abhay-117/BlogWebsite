const jwt = require("jsonwebtoken")
const express = require("express")
const app = express()

app.use(express.json())

let users = []
let blogs = []
let blogId = 1 

app.get('/signin.html', (req, res) => {
    res.sendFile(__dirname + '/signin.html');
});

app.get('/signup.html', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});

app.get('/blogs.html', (req, res) => {
    res.sendFile(__dirname + '/blogs.html');
});

app.post('/signup', (req, res) => {
    const { name, username, password } = req.body
    if (!username || !password || !name) {
        return res.send("Credentials required")
    }
    if (users.find(user => user.username === username)) {
        return res.send("User exists")
    }
    const id = Math.floor(Math.random() * 1000000)
    users.push({ name, username, password, id })
    res.send({ message: "User signed up", id })
})

app.post('/signin', (req, res) => {
    const { name, username, password } = req.body
    if (!username || !password || !name) {
        return res.send("Credentials required")
    }
    const user = users.find(user => user.name === name && user.username === username && user.password === password)
    if (!user) { 
        return res.json({message:"User does not exist"})
    }
    const token = jwt.sign({ id: user.id, username: user.username },user.password)
    res.send({ message: "User signed in successfully.", id: user.id, token: token })})

app.post('/create-blog', (req, res) => {
    const { title, content, userid } = req.body
    if (!title || !content || !userid) {
        return res.status(400).json({ message: "Credentials required" });
    }
    const user = users.find(u => u.id === Number(userid))
    if (!user) {
        return res.status(400).json({ message: "Invalid userid" });
    }
    const blog = { id: blogId++, title, content, userid }
    blogs.push(blog)
    res.json({ message: "Blog created", blog })
});

app.get('/blogs',(req,res)=>{
    res.json(blogs)
})

app.get('/blogs/:id',(req,res)=>{
    const id= parseInt(req.params.id)
    const blog=blogs.find(b=> b.id===id)
    if(!blog){
        return res.send("Blog Not Found or Deleted")
    }
    res.json(blog)
})

app.listen(3001,()=>{
    console.log("Server running at http://localhost:3001/signin.html")
})