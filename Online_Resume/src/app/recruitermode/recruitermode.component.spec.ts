import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitermodeComponent } from './recruitermode.component';

describe('RecruitermodeComponent', () => {
  let component: RecruitermodeComponent;
  let fixture: ComponentFixture<RecruitermodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitermodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitermodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
