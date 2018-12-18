import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentASpaceComponent } from './rent-a-space.component';

describe('RentASpaceComponent', () => {
  let component: RentASpaceComponent;
  let fixture: ComponentFixture<RentASpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentASpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentASpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
