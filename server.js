require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(express.static('./index.html'))

app.get('/', (req, res) => {
    res.json({
        "Repo Owner": "Helmi",
        "Team Members": {
            "Member_1": 'Helmi',
            "Member_2": "Malek",
            "Member_3": "AbuEssa",
            "Member_4": "Zaytona"
        }
    })
})

app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
})