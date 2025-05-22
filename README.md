# Özdoğan Unlu Mamulleri - Web Sitesi Projesi

Bu proje, Özdoğan Unlu Mamulleri için hazırlanmış bir web sitesidir. Kullanıcı dostu bir arayüzle firmanın tanıtımı yapılır ve ziyaretçilerin iletişim kurabilmesi sağlanır. İletişim formu aracılığıyla gönderilen mesajlar MySQL veritabanına kaydedilir.

## Özellikler

- HTML ve CSS ile tasarlanmış sade kullanıcı arayüzü
- Node.js ve Express.js ile sunucu tarafı oluşturuldu
- Gönderilen veriler MySQL veritabanına kaydedilir
- CORS yapılandırması ile localhost üzerinden iletişim sağlanır

## Kullanılan Teknolojiler

- HTML / CSS
- JavaScript (Fetch API)
- Node.js + Express
- MySQL
- dotenv

## Kurulum

1. Bu repoyu klonlayın:

   ```bash
   git clone https://github.com/kullanici-adi/proje-adi.git
   ```

2. Gerekli paketleri yükleyin:

   ```bash
   npm install
   ```

3. `.env` dosyasını oluşturun ve içine MySQL bilgilerinizi yazın:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=şifreniz
   DB_NAME=iletisim
   ```

4. MySQL veritabanınızda `messages` adlı tabloyu oluşturun:

   ```sql
   CREATE TABLE messages (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255),
       email VARCHAR(255),
       message TEXT,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

5. Sunucuyu başlatın:

   ```bash
   node server.js
   ```

6. Tarayıcınızdan `iletisim.html` dosyasını açarak formu test edebilirsiniz.

## Lisans

Bu proje eğitim amaçlıdır. Telif hakkı sahibine aittir.
