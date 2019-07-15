import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {
  name = new FormControl('');

  constructor() { }


  ngOnInit() {
  }

}
