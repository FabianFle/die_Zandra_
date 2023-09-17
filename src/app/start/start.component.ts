import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  @ViewChild('bgVideoDiv') bgVideoDiv: ElementRef;
  @ViewChild('bgVideo') bgVideo: ElementRef;

  @ViewChild('headline') headline: ElementRef;
  @ViewChild('bgImg') bgImg: ElementRef;
  @ViewChild('divImgHeadline') divImgHeadline: ElementRef;

  playVideo() {
    this.bgVideoDiv.nativeElement.classList.remove('d-none');
    this.divImgHeadline.nativeElement.classList.add('d-none');
    this.bgVideo.nativeElement.play();
    setTimeout(() => {
      this.bgVideoDiv.nativeElement.classList.add('d-none');
      this.divImgHeadline.nativeElement.classList.remove('d-none');
    }, 7000);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
