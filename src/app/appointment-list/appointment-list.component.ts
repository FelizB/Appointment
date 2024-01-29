import { Component } from '@angular/core';
import { Appointments } from '../models/appointments';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent {
  newAppointmentTitle = '';
  newAppointmentDate = new Date();

  appointment: Appointments[] = [];

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppoint: Appointments = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      };
      this.appointment.push(newAppoint);

      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();
    }
  }
}
