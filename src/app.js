
const express = require('express');
const app = express();

require('./db/conn.js');
const schema = require('./model/schema') 

const port = process.env.PORT || 3001

app.use(express.json())


// ===================  simple ========================
// =====================================================

// app.post('/postapi', (req, res) => {
//     console.log(req.body)
//     const user = new schems(req.body)

//     const usernew = user.save();

//     res.send(usernew)
// })

// ===================  async ========================
// =====================================================

app.post('/postapi', async(req,res)=>{
    
    try {
        const user = new schema(req.body);
        const newuser = await user.save();
        res.send(newuser);
    } catch (error) {
        res.send(error)
    }
    
})

app.get('/postapi', async(req, res)=>{
    try {
        const user = await schema.find();
        res.send(user);
    } catch (error) {
        res.send(error)
    }
})

app.listen(port, () => {
    console.log(`connect ${port}`)
})

