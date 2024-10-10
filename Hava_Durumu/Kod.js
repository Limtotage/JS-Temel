// Hava durumu OpenWeatherMap API'si anahtari Kendi Anahtarinizi Kullanin. 
//Hesap oluşturup kullanıcı ayarları sekmesinden benim api anahtarlarım bölümünden anahtarınızı alabilirsiniz. 
const API_KEY = '85b184ac251f22328849085f7a556bf7'; // Buraya kendi API anahtarınızı girin

document.getElementById('Hava_Durumunu_Al').addEventListener('click', Hava_Durumunu_Al_Fonksiyonu);

function Hava_Durumunu_Al_Fonksiyonu() {
    const SehirAdi = document.getElementById('SehirAdi');
    const Sehir = SehirAdi.value.trim();

    if (Sehir) {
        const Hava_Durumu = document.getElementById('Hava_Durumu');
        Hava_Durumu.innerHTML = 'Yükleniyor...'; // Yükleniyor mesajı

        // API çağrısı
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Sehir}&appid=${API_KEY}&units=metric`)
            .then(Cevap => {
                if (!Cevap.ok) {
                    throw new Error(`Hata: ${Cevap.status} - ${Cevap.statusText}`); // Hata mesajını ayrıntılı göster
                }
                return Cevap.json();
            })
            .then(Veri => {
                Hava_Durumunu_Goruntule(Veri);
            })
            .catch(Hata => {
                console.error(Hata); // Konsola hata mesajını yazdır
                Hatayi_Gor(Hata);
            });

    }
}

function Hava_Durumunu_Goruntule(Veri) {
    const Hava_Durumu = document.getElementById('Hava_Durumu');
    const Sicaklik = Veri.main.temp;
    const Hava_Drumu = Veri.weather[0].description;
    const Sehir = Veri.name;

    Hava_Durumu.innerHTML = `
        <h2>${Sehir}</h2>
        <p>Sıcaklık: ${Sicaklik} °C</p>
        <p>Durum: ${Hava_Drumu}</p>
    `;
}

function Hatayi_Gor(Hata) {
    const Hava_Durumu = document.getElementById('Hava_Durumu');
    Hava_Durumu.innerHTML = `<p class="error">${Hata.message}</p>`;
}
