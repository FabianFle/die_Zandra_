import { Component } from '@angular/core';
import { DialogImgShowComponent } from '../dialog-img-show/dialog-img-show.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-img-show',
  templateUrl: './img-show.component.html',
  styleUrls: ['./img-show.component.scss'],
})
export class ImgShowComponent {
  selectedImage: string;

  dialogRef: MatDialogRef<DialogImgShowComponent>;

  constructor(private dialog: MatDialog) {}

  imgs: string[] = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
  ];

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  openImgShow(img: string) {
    this.selectedImage = img;
    const imageIndex = this.imgs.indexOf(img); // Hier wird der Index des ausgewählten Bildes ermittelt
    const dialogRef = this.dialog.open(DialogImgShowComponent, {
      data: { selectedImage: this.selectedImage, imageIndex: imageIndex, imgs: this.imgs }
    });
    this.dialogRef = dialogRef;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
