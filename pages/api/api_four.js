require("dotenv").config();
import { render } from "@react-email/render";
import { SlackConfirmEmail } from "@/emails/signup_confirm_email";
const nodemailer = require("nodemailer");
//import { sendRandomNumberByEmail } from "../../services/mail_service";
const handler = async (req, res) => {
  function generateRandomNumber() {
    return Math.floor(100000 + Math.random() * 900000);
  }
  const code = generateRandomNumber();
  try {
    const { method, body } = req;
    switch (method) {
      case "POST": {
        //Do some thing

        const { email } = body;
        console.log("test du code:", code);

        // Utilisez email et code comme vous le souhaitez, par exemple, pour appeler votre fonction sendRandomNumberByEmail
        await sendRandomNumberByEmail(email, code);

        res.status(200).json({ code });
        break;
      }
      case "GET": {
        //Do some thing
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

// Fonction pour générer un nombre aléatoire de 6 chiffres
/* function generateRandomNumber() {
  return Math.floor(100000 + Math.random() * 900000);
}
 */
// Fonction pour envoyer un e-mail avec le nombre aléatoire
async function sendRandomNumberByEmail(email, code) {
  console.log(code);
  // Générer le nombre aléatoire
  //const randomNumber = generateRandomNumber();

  // Configurer le service de messagerie
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //email template to string
  const html = render(SlackConfirmEmail({ validationCode: code }));

  // Définir les détails de l'e-mail
  const mailOptions = {
    from: "GRAPHIKAZ <axe.y.2310@gmail.com>",
    to: email,
    subject: "Email de confirmation",
    html: html,
  };

  // Essayer d'envoyer l'e-mail
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("infooo => :", info);
    console.log("E-mail envoyé :", code);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
  }
}

export default handler;
