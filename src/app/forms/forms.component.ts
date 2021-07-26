import { Router } from '@angular/router';
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

  constructor(public validate: ValidateFieldsService,private fb: FormBuilder,private router: Router) { }

  get f() {
    return this.cadastro.controls;
  }

  getValue(txt: String){
    switch(txt){
      case 'name':{
        return this.cadastro.value.name.replace(/ /gi,"_");
      }
      case 'phone':{
        return this.cadastro.value.phone;
      }
      case 'address':{
        return this.cadastro.value.address.replace(/ /gi,"_");
      }
      case 'model':{
        return this.cadastro.value.model;
      }
      case 'width':{
        return this.cadastro.value.width;
      }
      case 'height':{
        return this.cadastro.value.height;
      }
    }

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

    //alert('SUCESSO!!\n\n' + JSON.stringify(this.cadastro.value, null, 4));
    this.router.navigateByUrl(`RegistreSeuPedido/Sucesso/"
    ${this.cadastro.value.name.replace(/ /gi,"_")}/
    ${this.cadastro.value.phone}/
    ${this.cadastro.value.address.replace(/ /gi,"_")}/
    ${this.cadastro.value.model}/
    ${this.cadastro.value.width}/
    ${this.cadastro.value.height}`);
  }

  reset(): void{
    this.cadastro.reset();
  }

}
