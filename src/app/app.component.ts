import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
 
   krediTutari:number=10000; // ngModel ile yakalandı
  @ViewChild("taksitTutari") taksitTutari!:ElementRef<HTMLSelectElement>; // VİEW CHİLD İLE YAKALANDI ,herhangi atama yapmayınca değişkene undefined kızıyor 
  
   aylikTaksitTutari:number=0;
   hesapla(){
   
    this.aylikTaksitTutari=this.krediTutari / +this.taksitTutari.nativeElement.value;
    
   }
   
 }














 
// @ViewChild("taksitTutari") taksitTutari:number=12; // view chil 
  //vİEWCHİLD İLE SADECE TS DEĞİŞKENİ İLE HTML TAGİNE ULAŞMIŞ OLURSUIN KLASİL JS DOM GİBİ
  //TAG E HERHANGİ BİR MÜDAHALEYİ HEMEN YAPAMAZSIN TIPKI DOM GİBİ VALUE İÇİN DEĞİŞKEN.VALUE YA DA VALUE NEYİN İÇNDE İSE 
  //VİEW CHİL İLE YAKLANAN TAGİN İÇİNDEKİ VALUE DÖNÜŞ TİPİ DAİMA STRİNG "+" İLE STRİNGİ NUMBERA DÖNÜŞTÜRÜSÜN
  //NGMODEL GİBİÇ DEĞİL NG MODEL TWO BİNDİNG HEMEN ORDA DEĞİŞLEN ÜZERİNDEN DİRELK-K MÜDAHALE EDEBİLRİ 
