import { Component } from '@angular/core';
import { DbservicesService } from 'src/app/services/dbservices.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss']
})
export class CarModelComponent {

  modelData:any;
  brandSelected:any = ""
  carValueRec:any
  modelName: any;
  constructor(private http:HttpService,private dbService:DbservicesService){}

  ngOnInit(){
    this.getDataModel()
  }

  selectModelFromdb(){
   this.carValueRec = this.dbService.sendCarValue()
   console.log("car value rec from db service is",this.carValueRec)
   for(let item of this.carValueRec){
    this.brandSelected = item[0]
    console.log("final car value rec from db service is",this.brandSelected)
   }
   this.getDataModel()
  }

  getDataModel(){
    this.http.getDataFromServer("brands").subscribe({
      next:((res:any)=>{
        if(res && res.length >0){
          this.modelData = res[this.brandSelected].models
          console.log("res data from db service in model is",this.modelData)
        }
      })
    })

  }
}