import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-img-show',
  templateUrl: './dialog-img-show.component.html',
  styleUrls: ['./dialog-img-show.component.scss'],
})
export class DialogImgShowComponent {
  selectedImage: string;
  imageIndex: number;
  imgs: string[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogImgShowComponent>
  ) {
    this.selectedImage = data.selectedImage;
    this.imageIndex = data.imageIndex;
    this.imgs = data.imgs; // Fügt die Bilderliste hinzu
  }

  previousImage() {
    this.imageIndex =
      (this.imageIndex - 1 + this.data.imgs.length) % this.data.imgs.length;
    this.selectedImage = this.data.imgs[this.imageIndex];
  }

  nextImage() {
    this.imageIndex = (this.imageIndex + 1) % this.data.imgs.length;
    this.selectedImage = this.data.imgs[this.imageIndex];
  }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit() { window.scrollTo(0, 0); }
}
