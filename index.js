const nodemailer = require('nodemailer');
let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'primewho111@gmail.com',
        pass: 'prime123456@'
    }
})

const express = require('express');
const { json } = require('express/lib/response');
const app = express()
const port = 3000

app.get('/send', (req, res) => {
    const { email_to, subject, bodyData  } = req.query;
   // console.log(user)

    let details = {
    from: "primewho111@gmail.com",
    to: `${email_to}`,
    subject: `${subject }`,
    text: `${bodyData }`
    }

    mailTransporter.sendMail(details, (error) => {
        if (error) {
            console.log('it has an error ')
        }
        else {
            console.log('email has sent')
             
        }
    })

    res.send('Sent Data');

    
})
app.get('/mail/:subj/:data', (req, res) => {

    let details = {
        from: "primewho111@gmail.com",
        to: "whofluni@gmail.com",
        subject: `${req.params.subj}`,
        text: `${req.params.data}`
    }

    mailTransporter.sendMail(details, (error) => {
        if (error) {
            console.log('it has an error ')
        }
        else {
            console.log('email has sent')
            res.send('Hello World!')
        }
    })

    res.send('Sent Data');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

 