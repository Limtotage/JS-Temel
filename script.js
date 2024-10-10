const Gorev = document.getElementById('Gorev');
const EkleButon = document.getElementById('EkleButon');
const Liste = document.getElementById('Liste');

// Görev ekleme işlemi
EkleButon.addEventListener('click', () => {
  const Grv = Gorev.value;

  // Boş görev engelleme
  if (Grv.trim() === '') {
    alert('Lütfen bir görev girin.');
    return;
  }

  // Yeni bir 'Grv' öğesi oluşturma
  const GrvElemani = document.createElement('Grv');
  GrvElemani.textContent = Grv;

  // Görev tamamlandığında üstünü çizmek için tıklama olayı
  GrvElemani.addEventListener('click', () => {
    GrvElemani.classList.toggle('completed');
  });

  // Silme butonu
  const Siltusu = document.createElement('button');
  Siltusu.textContent = 'Sil';
  Siltusu.classList.add('delete');
  
  Siltusu.addEventListener('click', () => {
    Liste.removeChild(GrvElemani);
  });

  GrvElemani.appendChild(Siltusu);
  Liste.appendChild(GrvElemani);

  // Girdi alanını temizleme
  Gorev.value = '';
});
