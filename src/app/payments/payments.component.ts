import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {
  Comprehensive:any
  val2500:any
  compValueSt:number = 335
  compValue:number = 235
  get2500Data: any;
  rangidv:number = 0
  rangcng:number = 0
  passCover:any;
  randomValue:any;
  rangidvoutput:any



  compreshensiveCheck(){
    console.log("compressive value check value is",this.Comprehensive)
    
  }

  selValu2500(data:any){
    this.val2500 = data;
    this.compValue = 235;
    this.compValueSt = 335;
    this.compValueSt = 100 + this.compValue
    this.compValue = this.val2500 + this.compValue
    console.log("sel value 2500 is",this.compValue)
  
  }

  selValu5000(data:any){
     this.compValue = 335
     this.compValueSt = 335
     this.compValueSt = 100 + this.compValue
     this.compValue = this.compValue + data;
  }

  selValu7500(data:any){
    this.compValue = 445;
    this.compValueSt = 545
    this.compValueSt = 100 + this.compValue;
    this.compValue = data + this.compValue;
  }

  selValue10000(data:any){
    this.compValue = 545;
    this.compValueSt = 645;
    this.compValueSt = 100 + this.compValue;
    this.compValue = this.compValue + data
  }

// idv range logic

rangeidvcngCollect(){
    this.randomValue = this.rangidv * 3654
    this.rangidvoutput = this.randomValue/980000
  console.log("range idv selected is",this.rangidv)
  console.log("range idv for cng is",this.rangcng)
}

passengerCover(){
  console.log("pass cover",this.passCover)
}

thirdPartyCover(){
  this.y = 215;
}


// final value

x:any; y:any; z:any; a:any; b:any; c:any; d:any
finalVal:any;

calculateFinalValue(){
  this.finalVal = Math.floor(this.compValue + this.rangidvoutput)
  console.log("final value ",this.finalVal)
}

}
