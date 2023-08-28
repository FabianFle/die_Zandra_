import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgShowComponent } from './img-show.component';

describe('ImgShowComponent', () => {
  let component: ImgShowComponent;
  let fixture: ComponentFixture<ImgShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
