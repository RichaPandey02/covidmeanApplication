import { Covid19Service } from './covid19.service';
import { Component ,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid-virus';
  data :any ;




  constructor(private Covid19Service: Covid19Service) {
    this.getDataFromAPI()
   }
   public getDataFromAPI() {
  // ngOnTnit(): void {}
    this.Covid19Service.getData("cases").subscribe(
      (res) =>{

        this.data = res ;
        console.log(this.data)
      },
      (err)=>{
        console.log(err);
      }
    )
   }

 sortData(){
  var value = document.getElementById("sortBy") as HTMLSelectElement ;
  var query = value.value ;
  this.Covid19Service.getData(query).subscribe(
  (res) =>{

    this.data = res ;
    console.log(this.data)
  },
  (err)=>{
    console.log(err);
  }
)
}
}
