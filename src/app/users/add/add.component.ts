import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  addUserForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'username': new FormControl(''),
      'email': new FormControl(''),
    })
  }

}
