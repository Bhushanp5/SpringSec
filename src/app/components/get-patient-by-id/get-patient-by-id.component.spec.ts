import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPatientByIdComponent } from './get-patient-by-id.component';

describe('GetPatientByIdComponent', () => {
  let component: GetPatientByIdComponent;
  let fixture: ComponentFixture<GetPatientByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPatientByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPatientByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
