const sgMail = require("@sendgrid/mail");

if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_API_KEY !== "SG.dummy") {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

const sendWelcomeEmail = (email, name) => {
  if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_API_KEY !== "SG.dummy") {
    sgMail.send({
      to: email,
      from: "Mostapha.a.aly@gmail.com",
      subject: "Thanks for joining in",
      text: `Welcome to my Task manager app, ${name}.
    I hope you like it.
    
    regards 
    Mostafa Ali
    linkedin.com/in/mostafa3li/ 
    `
    });
  } else {
    console.log("SendGrid désactivé : aucun email envoyé (clé absente ou factice)");
  }
};

const sendCancelationEmail = (email, name) => {
  if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_API_KEY !== "SG.dummy") {
    sgMail.send({
      to: email,
      from: "Mostapha.a.aly@gmail.com",
      subject: "Sorry to see you go",
      text: `Goodbye, ${name}.`
    });
  } else {
    console.log("SendGrid désactivé : aucun email envoyé (clé absente ou factice)");
  }
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};