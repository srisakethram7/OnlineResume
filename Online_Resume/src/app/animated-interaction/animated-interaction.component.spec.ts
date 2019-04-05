import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedInteractionComponent } from './animated-interaction.component';

describe('AnimatedInteractionComponent', () => {
  let component: AnimatedInteractionComponent;
  let fixture: ComponentFixture<AnimatedInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
