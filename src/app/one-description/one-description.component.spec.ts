import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDescriptionComponent } from './one-description.component';

describe('OneDescriptionComponent', () => {
  let component: OneDescriptionComponent;
  let fixture: ComponentFixture<OneDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
