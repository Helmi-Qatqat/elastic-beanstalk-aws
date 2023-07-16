const express = require('express')
const app = express()

app.use(express.json())

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

app.listen(3000, () => {
    console.log(`Server is up and listening on port 3000`);
})