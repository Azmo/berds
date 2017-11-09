import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishingItemComponent } from './finishing-item.component';

describe('FinishingItemComponent', () => {
  let component: FinishingItemComponent;
  let fixture: ComponentFixture<FinishingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
