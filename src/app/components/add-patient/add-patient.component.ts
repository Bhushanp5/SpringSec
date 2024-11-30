import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Patient } from '../../model/patient.model';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  constructor(private patientService: PatientService) { }

  addPatient(patientForm: NgForm) {
    if (patientForm.valid) {
      const newPatient: Patient = {
        pId: patientForm.value.pId,
        pName: patientForm.value.pName,
        pAddress: patientForm.value.pAddress,
        pAge: patientForm.value.pAge,
        pPhone: patientForm.value.pPhone,
        pEmail: patientForm.value.pEmail,
        pDiseases: patientForm.value.pDiseases.split(','), // Assuming diseases are comma-separated
        pHealthHistory: patientForm.value.pHealthHistory
      };

      this.patientService.createPatient(newPatient).subscribe(
        (response) => {
          console.log('Patient added successfully:', response);
          // Optionally reset the form or display a success message
          patientForm.resetForm();
        },
        (error) => {
          console.error('Error adding patient:', error);
          // Handle error, e.g., display an error message to the user
        }
      );
    }
  }
}
