export function generateRefString() {
  // Génère deux lettres majuscules aléatoires
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const getRandomLetter = () =>
    letters.charAt(Math.floor(Math.random() * letters.length));
  const part1 = getRandomLetter() + getRandomLetter();

  // Récupère la date du jour et du mois
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const part2 = day + month;

  // Génère six chiffres aléatoires
  const getRandomNumber = () => Math.floor(Math.random() * 10);
  const part3 = Array.from({ length: 6 }, getRandomNumber).join("");

  // Génère six caractères aléatoires (3 chiffres et 3 lettres majuscules)
  const part4Array = [];
  for (let i = 0; i < 3; i++) {
    part4Array.push(getRandomNumber());
    part4Array.push(getRandomLetter());
  }
  const part4 = part4Array.join("");

  // Génère quatre chiffres aléatoires
  const part5 = Array.from({ length: 4 }, getRandomNumber).join("");

  // Assembles les parties en les séparant par des points
  return `${part1}${part2}.${part3}.${part4}.${part5}`;
}
