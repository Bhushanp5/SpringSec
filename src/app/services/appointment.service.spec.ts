import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Patient } from '../model/patient.model';
import { PatientService } from './patient.service';

describe('PatientService', () => {
  let service: PatientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatientService]
    });

    service = TestBed.inject(PatientService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all patients', () => {
    const mockPatients: Patient[] = [
      { pId: 1, pName: 'Patient 1', pAddress: 'Address 1', pAge: 30, pPhone: '1234567890', pEmail: 'patient1@example.com', pDiseases: ['Disease 1'], pHealthHistory: 'History 1'  },
      { pId: 2, pName: 'Patient 2', pAddress: 'Address 2', pAge: 25, pPhone: '9876543210', pEmail: 'patient2@example.com', pDiseases: ['Disease 2'], pHealthHistory: 'History 2'  }
    ];

    service.getAllPatients().subscribe(patients => {
      expect(patients.length).toBe(2);
      expect(patients).toEqual(mockPatients);
    });

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPatients);
  });

  it('should get a patient by ID', () => {
    const mockPatient: Patient = { pId: 1, pName: 'Patient 1', pAddress: 'Address 1', pAge: 30, pPhone: '1234567890', pEmail: 'patient1@example.com', pDiseases: ['Disease 1'], pHealthHistory: 'History 1'  };
    const patientId = 1;

    service.getPatientById(patientId).subscribe(patient => {
      expect(patient).toEqual(mockPatient);
    });

    const req = httpMock.expectOne(`${service.apiUrl}/${patientId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPatient);
  });

  it('should create a new patient', () => {
    const newPatient: Patient = { pId: 3, pName: 'New Patient', pAddress: 'New Address', pAge: 40, pPhone: '1111111111', pEmail: 'newpatient@example.com', pDiseases: ['Disease 3'], pHealthHistory: 'History 3'  };

    service.createPatient(newPatient).subscribe(patient => {
      expect(patient).toEqual(newPatient);
    });

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newPatient);
    req.flush(newPatient);
  });

  it('should update an existing patient', () => {
    const updatedPatient: Patient = { pId: 1, pName: 'Updated Patient', pAddress: 'Updated Address', pAge: 35, pPhone: '2222222222', pEmail: 'updatedpatient@example.com', pDiseases: ['Updated Disease'], pHealthHistory: 'Updated History'  };
    const patientId = 1;

    service.updatePatient(patientId, updatedPatient).subscribe(patient => {
      expect(patient).toEqual(updatedPatient);
    });

    const req = httpMock.expectOne(`${service.apiUrl}/${patientId}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedPatient);
    req.flush(updatedPatient);
  });

  it('should delete a patient', () => {
    const patientId = 1;

    service.deletePatient(patientId).subscribe(() => {
      // Expect a successful deletion (no specific response expected)
    });

    const req = httpMock.expectOne(`${service.apiUrl}/${patientId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null); // Simulate a successful deletion with no response body
  });
});
