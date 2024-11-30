import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { DeletePatientComponent } from './components/delete-patient/delete-patient.component';
import { GetAllPatientsComponent } from './components/get-all-patients/get-all-patients.component';
import { GetPatientByIdComponent } from './components/get-patient-by-id/get-patient-by-id.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    DeletePatientComponent,
    UpdatePatientComponent,
    GetAllPatientsComponent,
    GetPatientByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
