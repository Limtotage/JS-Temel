class Kisi {
    constructor(Ad, Yas) {
        this.Ad = Ad;
        this.Yas = Yas;
    }
    Tanit() {
        console.log(`Merhaba! Benim adim ${this.Ad} ve ${this.Yas} yasindayim.`);
    }
}
class Ogrenci extends Kisi {
    constructor(Ad, Yas, Ogrenci_No) {
        super(Ad, Yas);
        this.Ogrenci_No = Ogrenci_No;
    }
    Ogrenci_No_Soyle() {
        console.log(`Ogrenici Numaram: ${this.Ogrenci_No}`);
    }
}
let Ogrenci1 = new Ogrenci("Ali", 20, 123456789);
Ogrenci1.Tanit();
Ogrenci1.Ogrenci_No_Soyle(); 
