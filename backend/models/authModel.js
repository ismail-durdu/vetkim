const db = require("../config/db");

// Kullanıcıyı email ile bul
const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users WHERE user_email = ?";
    db.query(query, [email], (err, results) => {
      if (err) {
        reject(err); // Hata durumunda reject
      } else {
        resolve(results[0]); // Kullanıcıyı döndür
      }
    });
  });
};

// Şifre doğrulama (hash kullanmadan düz karşılaştırma)
const validatePassword = (inputPassword, storedPassword) => {
  return inputPassword === storedPassword;
};

module.exports = {
  findUserByEmail,
  validatePassword,
};
