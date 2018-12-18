import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListASpaceComponent } from './list-a-space.component';

describe('ListASpaceComponent', () => {
  let component: ListASpaceComponent;
  let fixture: ComponentFixture<ListASpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListASpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListASpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
