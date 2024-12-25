import { Component } from '@angular/core';
import { DbservicesService } from 'src/app/services/dbservices.service';

@Component({
  selector: 'app-car-reg-no',
  templateUrl: './car-reg-no.component.html',
  styleUrls: ['./car-reg-no.component.scss']
})
export class CarRegNoComponent {
  constructor(private dbservice:DbservicesService) { }

  //DECLARATION
  SelectBrand: string = "Select Brand Name";
  SelectModel:string =  "Select Model Name"

  //SUBSCRIBED THE SUBJET AT SERVICE TO AUTO TRIGGER THE FUNCTION AT CAR BRAND COMPONENT
  ngOnInit() {
    this.dbservice.subject$.subscribe(() => this.patchbrandname())
  }

  //TO PATCH THE NAME OF THE BRAND SELECTED AT CAR BRAND COMPONENT IN THE INPUT AT CAR-REG
  patchbrandname() {
    if (this.SelectBrand == undefined) {
      this.SelectBrand = "Select Brand Name"
    } else {
      this.SelectBrand = this.dbservice.saveCarModelReturn()
      console.log("brand name recieved at aar reg compo", this.SelectBrand)
    }
  }

 
}
