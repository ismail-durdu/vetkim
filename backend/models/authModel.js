const db = require("../config/db");
const bcrypt = require("bcryptjs");

// Kullanıcıyı email ile bul
const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM user WHERE user_email = ?";
    db.query(query, [email], (err, results) => {
      if (err) {
        reject(err); // Hata durumunda reject
      } else {
        resolve(results[0]); // Kullanıcıyı döndür
      }
    });
  });
};

// Şifre doğrulama
const validatePassword = async (inputPassword, storedPassword) => {
  return await bcrypt.compare(inputPassword, storedPassword);
};

module.exports = {
  findUserByEmail,
  validatePassword,
};
