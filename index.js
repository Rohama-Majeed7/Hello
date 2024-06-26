require('dotenv').config()
const express = require('express')
const app = express()
// const port = 5000

const gitHubData = {
    
        "login": "Rohama-Majeed",
        "id": 136726386,
        "node_id": "U_kgDOCCZHcg",
        "avatar_url": "https://avatars.githubusercontent.com/u/136726386?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Rohama-Majeed",
        "html_url": "https://github.com/Rohama-Majeed",
        "followers_url": "https://api.github.com/users/Rohama-Majeed/followers",
        "following_url": "https://api.github.com/users/Rohama-Majeed/following{/other_user}",
        "gists_url": "https://api.github.com/users/Rohama-Majeed/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Rohama-Majeed/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Rohama-Majeed/subscriptions",
        "organizations_url": "https://api.github.com/users/Rohama-Majeed/orgs",
        "repos_url": "https://api.github.com/users/Rohama-Majeed/repos",
        "events_url": "https://api.github.com/users/Rohama-Majeed/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Rohama-Majeed/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Rohama Majeed",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 1,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2023-06-15T14:45:39Z",
        "updated_at": "2024-06-21T10:52:35Z"
      }


app.get('/', (req, res) => {
  res.send('Hello rohama this is home page')
})

app.get("/login",(req,res) =>{
res.send("hello rohama login!")
})

app.get("/signup",(req,res) =>{
    res.send("hello rohama signup!")
})

app.get("/youtube",(req,res) =>{
res.send("<h1>rohama majeed</h1>")
})

app.get("/github",(req,res) =>{
    res.json(gitHubData)
    })
    
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})