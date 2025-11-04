const fs = require('fs');
const { rimraf } = require('rimraf'); 


const folder = './exemplu';
fs.mkdirSync(folder);
console.log('Director creat:', folder);


const filePath = `${folder}/fisier.txt`;
fs.writeFileSync(filePath, 'Salut! Acesta este un fișier de test.');
console.log('Fișier creat:', filePath);


rimraf(folder)
  .then(() => {
    console.log('Director șters cu succes!');
  })
  .catch((err) => {
    console.error('Eroare la ștergere:', err);
  });
