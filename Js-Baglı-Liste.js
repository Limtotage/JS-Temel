class Dugum {                                                        //Bağlı Liste için Düğüm Nesnesi Oluşturulur.
    constructor(Veri) {
        this.Veri = Veri; 
        this.Sonraki = null;  
    }
}
class Bagli_Liste {                                                  //Düğüm Nesnesini içerisinde barındıran Bağlı Liste Nesnesi Oluşturulur.
    constructor() {
        this.Bas = null; 
    }

    Ekle(Veri) {                                                     //Düğüm Eklemeyi Sağlayan Metot
        let Yeni_Dugum = new Dugum(Veri);
        if (this.Bas === null) {
            this.Bas = Yeni_Dugum;
        } else {
            let Simdiki = this.Bas;
            while (Simdiki.Sonraki !== null) {
                Simdiki = Simdiki.Sonraki;
            }
            Simdiki.Sonraki = Yeni_Dugum;
        }
    }

    Listeyi_Yazdir() {                                                //Bağlı Listeyi Yazdıran Metot
        let Simdiki = this.Bas;
        while (Simdiki !== null) {
            console.log(Simdiki.Veri);
            Simdiki = Simdiki.Sonraki;
        }
    }

    Bul(Veri) {                                                       //Düğüm Aramayı Sağlayan Metot
        let Simdiki = this.Bas;
        let i = 1;
        while (Simdiki !== null) {
            if (Simdiki.Veri === Veri) {
                console.log(`Aranan Veri ${i}.sirada bulundu.`);
                return true; 
            }
            i++;
            Simdiki = Simdiki.Sonraki;
        }
        return false; 
    }
    Eleman_Sil(Veri){                                                 // Listeden Bir Eleman Silen Metot
        let Simdiki = this.Bas;
        let Onceki =this.Bas;
        let i = 1;
        while (Simdiki !== null) {
            if (Simdiki.Veri === Veri) {
                let Sonraki_Dugum=Simdiki.Sonraki;
                Simdiki=null;
                Onceki.Sonraki=Sonraki_Dugum;
                if(i===1) this.Bas=Sonraki_Dugum;
                return true;
            }
            i++;
            if(i!==1) Onceki =Simdiki;
            Simdiki = Simdiki.Sonraki;

        }
        return false;
    }
    Listeyi_Bosalt() {                                                 // Listeyi Boşaltan Metot
        let Simdiki = this.Bas;
        while (Simdiki !== null) {
            let Sonraki_Dugum = Simdiki.Sonraki;
            Simdiki = null; 
            Simdiki = Sonraki_Dugum;
        }
        this.Bas = null;  
        console.log("Liste temizlendi.");
    }
}

let Listem = new Bagli_Liste();                                        // Liste Oluşturulur.
Listem.Ekle(10);
Listem.Ekle(20);
Listem.Ekle(30);
Listem.Ekle(40);
console.log("Bağlı listedeki elemanlar:");
Listem.Listeyi_Yazdir();                                               // Bağlı listeyi yazdır
let arananDeger = 30;
let silenecekdeger= 10;

if (Listem.Bul(arananDeger)) {
    console.log(`${arananDeger} listede bulundu.`);
} else {
    console.log(`${arananDeger} listede bulunamadi.`);
}
if (Listem.Eleman_Sil(silenecekdeger)) {
    console.log(`${silenecekdeger} listeden silindi.`);
} else {
    console.log(`${silenecekdeger} zaten listede yok.`);
}
Listem.Listeyi_Yazdir();
Listem.Listeyi_Bosalt();
