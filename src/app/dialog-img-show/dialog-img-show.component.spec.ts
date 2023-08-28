import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogImgShowComponent } from './dialog-img-show.component';

describe('DialogImgShowComponent', () => {
  let component: DialogImgShowComponent;
  let fixture: ComponentFixture<DialogImgShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogImgShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogImgShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
