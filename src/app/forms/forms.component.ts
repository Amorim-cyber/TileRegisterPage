import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateFieldsService } from '../shared/formControl/validate-fields.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  cadastro!: FormGroup;

  constructor(public validate: ValidateFieldsService,private fb: FormBuilder) { }

  get f() {
    return this.cadastro.controls;
  }

  ngOnInit(): void{
    this.cadastro = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(156)]],
      phone: ['', [Validators.required,Validators.pattern("[0-9]{11}")]],
      address: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(256)]],
      model:['',[Validators.required]],
      width:[15,[Validators.required,Validators.min(15),Validators.max(100)]],
      height:[15,[Validators.required,Validators.min(15),Validators.max(100)]],
    });
  }

  save(): void {
    this.cadastro.markAllAsTouched();
    if(this.cadastro.invalid){
      return;
    }

    alert('SUCESSO!!\n\n' + JSON.stringify(this.cadastro.value, null, 4));
  }

  reset(): void{
    this.cadastro.reset();
  }

}
