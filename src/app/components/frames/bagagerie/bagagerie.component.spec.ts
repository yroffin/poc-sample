import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagagerieComponent } from './bagagerie.component';

describe('BagagerieComponent', () => {
  let component: BagagerieComponent;
  let fixture: ComponentFixture<BagagerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagagerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
