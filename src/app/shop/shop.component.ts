import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  @ViewChild('mySidenav') mySidenav: ElementRef;
  @ViewChild('mySidenavBackground') mySidenavBackground: ElementRef;

  constructor(public dialog: MatDialog) {
    for (let i = 0; i < this.shops.length; i++) {
      this.currentImage.push(0);
    }
  }

  ngOnInit() { window.scrollTo(0, 0); }

  shops: any = [
    {
      name: 'Herren T-Shirt',
      description: '100% Baumwolle',
      price: '20,99',
      id: 1,
      img: {
        img1: 'tshirt1',
        img2: 'tshirt2',
        img3: 'tshirt3',
        img4: 'tshirt4',
      },
    },
    {
      name: 'Damen T-Shirt',
      description: '100% Baumwolle',
      price: '25,99',
      id: 2,
      img: {
        img: 'shirt1',
        img2: 'shirt2',
      }
    },
    {
      name: 'produkt3',
      description: 'beschreibung',
      price: '20,29',
      id: 3,
      img: {
        img: 'produkt3',
      }
    },
    {
      name: 'produkt4',
      description: 'beschreibung',
      price: '30,99',
      id: 4,
      img: {
        img: 'produkt4',
      }
    }
  ];

  currentImage: number[] = [];

  prevImage(index: number) {
    const shop = this.shops[index];
    const imgKeys = Object.keys(shop.img);
    this.currentImage[index] = (this.currentImage[index] - 1 + imgKeys.length) % imgKeys.length;
  }

  nextImage(index: number) {
    const shop = this.shops[index];
    const imgKeys = Object.keys(shop.img);
    this.currentImage[index] = (this.currentImage[index] + 1) % imgKeys.length;
  }

  getImage(shop: any, index: number) {
    const imgKeys = Object.keys(shop.img);
    const imgKey = imgKeys[index];
    return `/assets/img/shop/${shop.img[imgKey]}.png`;
  }

  openDialog() {
    alert('Funktion ist noch in Arbeit');
    // this.dialog.open(ShoppingCardComponent);
  }


  openNav() {
    this.mySidenav.nativeElement.style.width = '250px';
  }

  closeNav() {
    this.mySidenav.nativeElement.style.width = '0';
  }
}

