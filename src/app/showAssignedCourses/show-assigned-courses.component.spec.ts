import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAssignedCoursesComponent } from './show-assigned-courses.component';

describe('ShowAssignedCoursesComponent', () => {
  let component: ShowAssignedCoursesComponent;
  let fixture: ComponentFixture<ShowAssignedCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAssignedCoursesComponent]
    });
    fixture = TestBed.createComponent(ShowAssignedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
