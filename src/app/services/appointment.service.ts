import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment.model';

/**
 * Service class to manage appointments through HTTP requests to a JSON server.
 */
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  /**
   * Base URL for the appointments endpoint on the JSON server.
   */
  private apiUrl = 'http://localhost:3000/appointments';

  /**
   * Constructor for the AppointmentService.
   * @param http Injected HttpClient for making HTTP requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * Retrieves all appointments from the server.
   * @returns An Observable that emits an array of Appointment objects.
   */
  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiUrl);
  }

  /**
   * Retrieves a specific appointment by its ID.
   * @param id The ID of the appointment to retrieve.
   * @returns An Observable that emits the retrieved Appointment object.
   */
  getAppointmentById(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.apiUrl}/${id}`);
  }

  /**
   * Creates a new appointment on the server.
   * @param appointment The Appointment object to create.
   * @returns An Observable that emits the created Appointment object.
   */
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.apiUrl, appointment);
  }

  /**
   * Updates an existing appointment on the server.
   * @param id The ID of the appointment to update.
   * @param appointment The updated Appointment object.
   * @returns An Observable that emits the updated Appointment object.
   */
  updateAppointment(id: number, appointment: Appointment): Observable<Appointment> {
    return this.http.put<Appointment>(`${this.apiUrl}/${id}`, appointment);
  }

  /**
   * Deletes an appointment from the server.
   * @param id The ID of the appointment to delete.
   * @returns An Observable that emits nothing upon successful deletion.
   */
  deleteAppointment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
