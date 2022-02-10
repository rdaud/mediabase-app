const sgMail = require('@sendgrid/mail')
const sendGridApiKey = "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"
sgMail.setApiKey(sendGridApiKey)

const sendWelcomeEmail = () => {

    sgMail
    .send({
        to: 'rodrigo.daud@rga.com', // Change to your recipient
        from: 'rodrigo.daud@rga.com', // Change to your verified sender
        subject: 'Bem-vindo(a) ao Mediabase',
        templateId: 'd-ba08d77cc2bb4bc8aca10b3e133be2a0'
    })
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })

}

module.exports = { sendWelcomeEmail }