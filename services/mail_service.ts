const nodemailer = require("nodemailer");

// Fonction pour générer un nombre aléatoire de 6 chiffres
function generateRandomNumber() {
  return Math.floor(100000 + Math.random() * 900000);
}

// Fonction pour envoyer un e-mail avec le nombre aléatoire
async function sendRandomNumberByEmail(email: string) {
  // Générer le nombre aléatoire
  const randomNumber = generateRandomNumber();

  // Configurer le service de messagerie
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "klagueu@gmail.com",
      pass: "@@KLAGueuAlexandre**2022@@",
    },
  });

  // Définir les détails de l'e-mail
  const mailOptions = {
    from: "klagueu@gmail.coms",
    to: email,
    subject: "Nombre aléatoire",
    text: `Votre nombre aléatoire est : ${randomNumber}`,
  };

  // Essayer d'envoyer l'e-mail
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("E-mail envoyé :", info.response);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
  }
}

// Utiliser la fonction avec une adresse e-mail spécifiée
export default sendRandomNumberByEmail;
