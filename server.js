const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors'); // CORS modülünü ekliyoruz
require('dotenv').config();

const app = express();
const PORT = 3001;

// CORS middleware'ini kullanıyoruz
app.use(cors());

// Body parser kullanıyoruz
app.use(bodyParser.json());
app.use(express.static('public'));

// MySQL Bağlantısı
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '789632145Gs!',
    database: 'iletisim'
});

// Veritabanı bağlantısı
db.connect((err) => {
    if (err) {
        console.error('Veritabanı bağlantısı hatası:', err);
        return;
    }
    console.log('Veritabanına başarıyla bağlanıldı');
});

// POST /api/contact route
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    const query = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
    db.query(query, [name, email, message], (err, result) => {
        if (err) {
            console.error('Veritabanına veri eklerken hata oluştu:', err);
            return res.status(500).send('Veri kaydedilemedi');
        }
        res.status(200).send('Mesaj başarıyla kaydedildi');
    });
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
