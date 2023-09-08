import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerinComponent } from './managerin.component';

describe('ManagerinComponent', () => {
  let component: ManagerinComponent;
  let fixture: ComponentFixture<ManagerinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
