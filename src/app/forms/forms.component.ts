import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  cadastro!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.cadastro = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(156)]],
      phone: ['', [Validators.required,Validators.minLength(11), Validators.maxLength(11)]],
      address: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(256)]],
      model:['',[Validators.required]],
      width:[15,[Validators.required,Validators.min(15),Validators.max(100)]],
      height:[15,[Validators.required,Validators.min(15),Validators.max(100)]],
    });
  }

}
