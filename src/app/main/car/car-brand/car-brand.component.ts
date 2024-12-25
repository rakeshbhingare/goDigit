import { Component } from '@angular/core';
import { DbservicesService } from 'src/app/services/dbservices.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-car-brand',
  templateUrl: './car-brand.component.html',
  styleUrls: ['./car-brand.component.scss']
})
export class CarBrandComponent {
  brandData:any;
  selectBrandData1:any
  brandValueSelected:any
  BrandArr:any = []
  carName:any;

  constructor(private http:HttpService,private dbService:DbservicesService){}

  // selectBrandData(){
  //   this.dbService.sendCarValue()
  // }

  ngOnInit(){
   this.getData()
  }

  selectDataInBrand(data:any){
    this.BrandArr = [data]
    this.dbService.saveCarValue(this.BrandArr)
    console.log("brand id send to service is",data)
  }

  selectNameInBrand(name:any){
    this.carName = name
    this.dbService.saveCarModel(this.carName)
    console.log("car name selected in car brand is",this.carName)
  }

  triggerFn(){
    this.dbService.triggerF()
  }

  getData(){
    this.http.getDataFromServer("brands").subscribe({
      next:((res:any)=>{
        this.brandData = res
        console.log("res is ",this.brandData)
      })
    })
  }
}
