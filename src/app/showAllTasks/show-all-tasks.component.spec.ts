import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllTasksComponent } from './show-all-tasks.component';

describe('ShowAllTasksComponent', () => {
  let component: ShowAllTasksComponent;
  let fixture: ComponentFixture<ShowAllTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAllTasksComponent]
    });
    fixture = TestBed.createComponent(ShowAllTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
