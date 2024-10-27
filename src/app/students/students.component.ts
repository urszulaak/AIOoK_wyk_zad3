import { Component, Input } from '@angular/core';
import { AddStudentComponent } from '../add-student/add-student.component';
import { EditStudentComponent } from "../edit-student/edit-student.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-students',
  standalone: true,
  imports: [AddStudentComponent, EditStudentComponent, CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  tytul_listy: string;
  selected:number=-1;
  students: Student[] = [
    new Student("Ania", "Włodarczyk", 21, [2,4,3.5]),
    new Student("Kamila", "Kłos", 21, [5, 2, 4]),
    new Student("Olga", "Sienkiewicz", 21, [3,2,4,2]),
    new Student("Marta", "Kowalska", 21, [5,4,3.5]),
    new Student("Alicja", "Włóczykij", 21, [3.5,4,3.5,2])
  ];

  addStudent(studentData: { imie: string; nazwisko: string; wiek: number }) {
    const newStudent = new Student(studentData.imie, studentData.nazwisko, studentData.wiek);
    this.students.push(newStudent);
  }

  selectStudent(which:number):void{
    this.selected=which;
  }

  saveStudent(): void {
    this.selected = -1;
  }

  visibleWiekIndexes: Set<number> = new Set;

  allStudents:
    {[k: string]: string} = { 
      '=0': 'Lista nie zawiera studentów.',
      '=1': 'Lista składa się z 1 studenta.',
      'other': 'Lista składa się z # studentów.'
    };

  constructor() { 
    this.tytul_listy = 'Lista wszystkich studentów';
  }

  toggleWiek(student: Student) {
    student._activeWiek = true;
  }

  toggleOcena(student: Student) {
    student._activeOceny = true;
  }

}

export class Student{
    _imie: string;
    _nazwisko: string;
    _wiek: number;
    _oceny: number[];
    _activeWiek: boolean=false
    _activeOceny: boolean=false

    constructor(imie: string, nazwisko: string, wiek: number, oceny: number[]=[]){
      this._imie=imie;
      this._nazwisko=nazwisko;
      this._wiek=wiek;
      this._oceny=oceny;
    }

    get imie(){
      return this._imie;
    }

    set imie(value) {
      this._imie = value;
    }

    get nazwisko(){
      return this._nazwisko;
    }

    set nazwisko(value) {
      this._nazwisko = value;
    }

    get wiek(){
      return this._wiek;
    }

    set wiek(value) {
      this._wiek = value;
    }

    get oceny(){
        return this._oceny;
    }

    set oceny(value) {
      this._oceny = value;
    }

    get activeWIek(){
      return this._activeWiek;
    }

    get activeOceny(){
      return this._activeOceny;
    }

}