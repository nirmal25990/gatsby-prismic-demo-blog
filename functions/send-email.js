const sgMail = require("@sendgrid/mail")
const { GATSBY_SENDGRID_API_KEY } = process.env
console.log("GATSBY_SENDGRID_API_KEY - " , GATSBY_SENDGRID_API_KEY);
sgMail.setApiKey(GATSBY_SENDGRID_API_KEY)
exports.handler = async function (event, context) {
  const body = JSON.parse(event.body)
  // const email = body.email
  try {
    await sgMail.send(body)
    return {
      statusCode: 200,
      body: "success",
    }
  } catch (error) {
    console.log("createLocalTracks err- ", error)
    return {
      statusCode: 403,
      body: "Something went wrong",
    }
  }
}
