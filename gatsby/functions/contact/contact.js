const nodemailer = require('nodemailer');

function generateContactEmail({name, email}) {
  return `<div>
    <h2>Hi ${name},</h2>
    <p>your email is ${email}, and we have received your message, so we will respond to you as soon as possible.</p>
</div>`
}

// create transport for nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

function wait(ms = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

exports.handler = async (event, context) => {
  // validate the data coming in is correct
  // await wait(5000)
  const body = JSON.parse(event.body)
  // Check if they have filled out the honeypot
  if (body.mapleSyrup) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Boop beep bop zzzzstt good bye' }),
    };
  }
  const requiredFields = ['email', 'name', 'message']

  for (let field of requiredFields) {
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Field ${field} is required`
        })
      }
    }
  }

  const info = await transporter.sendMail({
    from: "max`s portfolio <maxliu@example.com>",
    to: `${body.name} <${body.email}>, contact@example.com`,
    subject: "Contact me",
    html: generateContactEmail({name: body.name, email: body.email})
  })
  return {
    statusCode: 200,
    body: JSON.stringify({message: 'Success'}),
  }
}
