import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss']
})
export class ShoppingCardComponent {

  constructor(public dialogRef: MatDialogRef<ShoppingCardComponent>) { }

  shoppingCart: any[] = []; // initialize an empty shopping cart array
  shippingCost: number = 5; // set a default shipping cost
  shipping: number = 5; // set a default shipping cost
  subtotal: number = 0; // initialize subtotal to 0


  items: any[] = [
    {
      name: 'Product A',
      description: 'Description of Product A',
      price: 9.99,
      id: 1,
      img: {
        img1: 'path/to/image1.jpg',
        img2: 'path/to/image2.jpg',
        img3: 'path/to/image3.jpg',
        img4: 'path/to/image4.jpg',
      },
      quantity: 1,
    },
    {
      name: 'Product B',
      description: 'Description of Product B',
      price: 14.99,
      id: 2,
      img: {
        img1: 'path/to/image1.jpg',
        img2: 'path/to/image2.jpg',
        img3: 'path/to/image3.jpg',
        img4: 'path/to/image4.jpg',
      },
      quantity: 1,
    },
    // add more items here
  ];

  ngOnInit(): void {
    // calculate subtotal when component is initialized
    this.calculateSubtotal();
  }

  calculateSubtotal() {
    this.subtotal = 0;
    for (let item of this.items) {
      this.subtotal += item.price * item.quantity;
    }
  }

  calculateTotal() {
    return this.subtotal + this.shipping;
  }

  addItem(item: any) {
    item.quantity++;
    this.calculateSubtotal();
    this.calculateTotal();
  }

  removeItem(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      let index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
    this.calculateSubtotal();
    this.calculateTotal();
  }

  addToCart(item: any) {
    let index = this.shoppingCart.indexOf(item);
    if (index == -1) {
      this.shoppingCart.push(item);
    }
  }

  removeFromCart(item: any) {
    let index = this.shoppingCart.indexOf(item);
    if (index !== -1) {
      this.shoppingCart.splice(index, 1);
    }
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    for (let item of this.shoppingCart) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice + this.shippingCost;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
