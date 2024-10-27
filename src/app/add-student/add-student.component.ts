import { Component, EventEmitter, Output, Input } from '@angular/core';
import { StudentsComponent } from '../students/students.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  imie: string = '';
  nazwisko: string = '';
  wiek: number = 0;

  @Output() studentAdded = new EventEmitter<{ imie: string; nazwisko: string; wiek: number }>();

  addStudent() {
      this.studentAdded.emit({ imie: this.imie, nazwisko: this.nazwisko, wiek: this.wiek });
      this.imie = '';
      this.nazwisko = '';
      this.wiek = 0;
  }
}
