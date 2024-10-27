import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../students/students.component';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent {
  @Input() student: Student | null = null;
  @Output() saveStudent = new EventEmitter<void>();

  newGrade: number = 0;

  save(): void {
    this.saveStudent.emit();
  }

  addGrade(): void {
    if (this.student) {
      this.student.oceny.push(this.newGrade);
      this.newGrade = 0;
    }
  }
}
