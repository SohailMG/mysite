const mail = require("@sendgrid/mail");

// set up sendgrid api key
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function helloAPI(req, res) {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.firstname + " "}\n
    Email: ${body.email}\n
    Message:${body.message}
  `;
  const data = {
    to: "gsais.sohail9@gmail.com",
    from: "sohailgsais@sohailgsais.live",
    subject: "New message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };
  return new Promise((resolve, reject) => {
    mail
      .send(data)
      .then(() => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Cache-Control", "max-age=180000");
        res.end("Email sent successfully!");
        resolve();
      })
      .catch((error) => {
        res.json(error);
        res.status(405).end("Failed to send email");
        return resolve();
      });
  });
}
