import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesTabComponent } from './employees-tab.component';

describe('EmployeesTabComponent', () => {
  let component: EmployeesTabComponent;
  let fixture: ComponentFixture<EmployeesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
