import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorporationComponent } from './korporation.component';

describe('KorporationComponent', () => {
  let component: KorporationComponent;
  let fixture: ComponentFixture<KorporationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorporationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KorporationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
