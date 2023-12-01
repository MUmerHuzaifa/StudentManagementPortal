import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPannelComponent } from './admin-pannel.component';

describe('AdminPannelComponent', () => {
  let component: AdminPannelComponent;
  let fixture: ComponentFixture<AdminPannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPannelComponent]
    });
    fixture = TestBed.createComponent(AdminPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
