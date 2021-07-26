import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  panelOpenState = false;

  name!: string;
  phone!: string;
  address!: string;
  model!: string;
  width!: string;
  height!: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.paramMap.get('name')!.replace(/_/gi," ");
    this.phone = this.activatedRoute.snapshot.paramMap.get('phone')!;
    this.address = this.activatedRoute.snapshot.paramMap.get('address')!.replace(/_/gi," ");
    this.model = this.activatedRoute.snapshot.paramMap.get('model')!;
    this.width = this.activatedRoute.snapshot.paramMap.get('width')!;
    this.height = this.activatedRoute.snapshot.paramMap.get('height')!;
  }

}
