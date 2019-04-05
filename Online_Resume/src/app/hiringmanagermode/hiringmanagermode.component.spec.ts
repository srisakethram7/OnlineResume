import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringmanagermodeComponent } from './hiringmanagermode.component';

describe('HiringmanagermodeComponent', () => {
  let component: HiringmanagermodeComponent;
  let fixture: ComponentFixture<HiringmanagermodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiringmanagermodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiringmanagermodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
