import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframePracticeComponent } from './iframe-practice.component';

describe('IframePracticeComponent', () => {
  let component: IframePracticeComponent;
  let fixture: ComponentFixture<IframePracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IframePracticeComponent]
    });
    fixture = TestBed.createComponent(IframePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
