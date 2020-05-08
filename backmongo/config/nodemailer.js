const nodemailer = require( 'nodemailer' )
const config = require( './keys' )
let transporter = nodemailer.createTransport( {
    service: 'Gmail',
    secure: true,
    auth: {
        user: config.GMAIL.email,
        pass: config.GMAIL.password
    }
} )
module.exports = transporter;