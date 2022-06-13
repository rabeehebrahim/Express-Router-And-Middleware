const express = require('express')
const app = express()
const shelterRoutes = require('./routes/shelters')
const dogRoutes = require('./routes/dogs')
const adminRoutes = require('./routes/admin')

router.use((req, res, next) => {
    if(req.query.isAdmin){
        next()
    }
    res.send("Sorry Not an Admin")
})

app.use('/shelters', shelterRoutes)
app.use('/dogs', dogRoutes)
app.use('/admin', adminRoutes)

app.listen(3000, () => {
    console.log('listening.....')
})