import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbservicesService {
  modelName: any;

  constructor() { }

  carName:any
  private carValue:any = [];

 
   saveCarValue(car:any){
     this.carValue.push(car)
   }

   sendCarValue(){
    return this.carValue
   }

   saveCarModel(name:any){
     this.carName = name
   }

   saveCarModelReturn(){
    return this.carName
   }


   subject$ = new Subject<void>()

   triggerF(){
    this.subject$.next()
   }

  

}
