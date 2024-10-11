class Kisi{
    constructor(isim,soyisim,yas){
        this.isim=isim;
        this.yas=yas;
        this.soyisim=soyisim;
    }
    tanit(){
        console.log(`Merhaba! Ben ${this.isim} ${this.soyisim} ve ${this.yas} Yasindayim.`);
    }
    yas_Guncelle(yeni_yas){
        this.yas=yeni_yas;
        console.log(`${this.isim} ${this.soyisim} adli sahisin yasi ${this.yas} olarak guncellenmistir.`);
    }
}
let kisi_sayisi = prompt("Lutfen kac kisi olusturulacagini giriniz: ");
let gisim="";
let gsoyisim="";
let gyas="";
let Kisiler = [];
if(!isNaN(parseInt(kisi_sayisi))){
    for (let i = 0; i < parseInt(kisi_sayisi); i++) {
        gisim=prompt("Lutfen Kullanicinin Ismini Giriniz: ");
        gsoyisim=prompt("Lutfen Kullanicinin SoyIsmini Giriniz: ");
        gyas=prompt("Lutfen Kullanicinin Yasini Giriniz: ");
        Kisiler.push(new Kisi(gisim,gsoyisim,gyas));
      }
    Kisiler.forEach(kisi => {
        kisi.tanit();
    });
}
let Kisiadi=prompt("Yasi Guncellenecek Kisinin adini giriniz: ");
let Yeni_Yasi=prompt("Yeni_Yasi giriniz: ");
Kisiler.forEach(kisi => {
    if(kisi.isim===Kisiadi){
        kisi.yas_Guncelle(Yeni_Yasi);
    }
});
