# 📝 Simple Blog Website (Node.js + HTML + LocalStorage)
This is a beginner-friendly Blog Application where users can sign up, sign in, and create/read blogs. Built with Node.js (Express) on the backend and Vanilla HTML/CSS/JS on the frontend.

📁 Project Structure

blog-app/
│
├── server.js             # Express server for signup, signin, blogs
├── signin.html           # Sign in UI
├── signup.html           # Sign up UI
├── blogs.html            # Blog creation and display UI
├── README.md             # Project documentation

🚀 How to Run
1. Prerequisites
Node.js installe
Basic terminal usage

2. Install Dependencies
No external dependencies other than express and jsonwebtoken:

npm init -y
npm install express jsonwebtoken

3. Start the Server
node server.js

Server will run at:
📡 http://localhost:3001/signin.html

4. Access Pages
| Page    | URL                                 |
| ------- | ----------------------------------- |
| Sign In | `http://localhost:3001/signin.html` |
| Sign Up | `http://localhost:3001/signup.html` |
| Blogs   | `http://localhost:3001/blogs.html`  |

🛠 Features
🧾 User Registration with name, username, and password

🔐 User Login (matched against stored users in memory)

✍️ Create a Blog (title + content)

📚 View All Blogs

💾 Uses LocalStorage on the frontend to track current user

🧠 In-memory storage for users/blogs (no database)

🧠 How It Works
📦 Backend (Node.js + Express)
Stores users in a global users[] array

Stores blogs in a global blogs[] array

Issues a JWT token (not verified/decoded in this app, only issued)

📄 Frontend (HTML/CSS + Fetch API)
Handles form submission using fetch() POST requests

Saves logged-in user ID in localStorage as userid

Displays blog list dynamically with blog author info

📂 API Endpoints

| Endpoint       | Method | Description                           |
| -------------- | ------ | ------------------------------------- |
| `/signup`      | POST   | Register a new user                   |
| `/signin`      | POST   | Authenticate user and return token/id |
| `/create-blog` | POST   | Create a blog (requires `userid`)     |
| `/blogs`       | GET    | Fetch all blogs                       |
| `/blogs/:id`   | GET    | Fetch a specific blog by ID           |


🗂 Data Formats
🔐 Signup / Signin Payload

{
  "name": "John Doe",
  "username": "johnd",
  "password": "1234"
}

📝 Blog Payload

{
  "title": "My First Blog",
  "content": "This is my first blog post!",
  "userid": 123456
}


🔍 Example Usage
Sign up with a name, username, and password.

Sign in to receive a welcome message and be redirected to the blog page.

Create a blog post (title and content).

See your blog listed along with others.

⚠️ Notes
All data is stored in RAM — data is lost on server restart

Passwords are not hashed — not for production use

JWT is issued but not validated — for learning purposes only

No user-specific blog filtering — all blogs are public


💡 Ideas for Improvement
🔒 Hash passwords before storing

📦 Store data in a database (MongoDB, SQLite, etc.)

🔐 Secure APIs using proper JWT auth middleware

🧑‍🎨 Improve frontend with React or another framework

🌐 Deploy using Render, Railway, or Vercel


