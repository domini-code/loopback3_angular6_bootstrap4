import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBookComponent } from './details-book.component';

describe('DetailsBookComponent', () => {
  let component: DetailsBookComponent;
  let fixture: ComponentFixture<DetailsBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
