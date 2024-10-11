let min = 1;
let max = 100;
let deneme_say = 0;
let tahmin = 0;
let rastgele_sayi = Math.floor(Math.random() * 100) + 1;
console.log("1 ile 100 arasinda bir sayi sectim! Bil Bakalim Hangis SAyi :D");
function tahmin_yap() {
  let Girdi = prompt(`Lutfen ${min} ile ${max} arasinda bir sayi tahmin ediniz: `);
  tahmin = parseInt(Girdi);
  if (isNaN(tahmin) || tahmin < min || tahmin > max) {
    console.log("Sayi Gecersizdir! Lutfen Gecerli Bir Sayi Giriniz.");
    return tahmin_yap();
  }
  deneme_say++;
  if (tahmin === rastgele_sayi) {
    console.log(`Tebrikler!??! ${tahmin} Dogru Tahmindi. Toplam ${deneme_say} denemede buldunuz.`);
    return;
  }
  if (tahmin < rastgele_sayi) {
    console.log("Daha buyuk bir sayi deneyin ;)");
  } else {
    console.log("Daha kucuk bir sayi deneyin :)");
  }
  tahmin_yap();

}
tahmin_yap();
