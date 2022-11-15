import { HttpService } from './http.service'   //'./services/http.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector:'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'angularProj';
    tasks:any={};
    selectedDescription: any;
    selectedCompleted: any;

    constructor(private _httpService: HttpService) {
            //this.delTaskbyId('636ed18831bf97e2a65322af')      //delete
            //this.getTasksFromService();                       //lee todos
            //this.getTasksbyId('636ee87792607b9acc0a5950')    //lee por id
      }
    ngOnInit(){
        this.getTasksFromService();                       //lee todos
      }

    getTasksFromService(){
      let observable = this._httpService.getAll();
      observable.subscribe(data => { console.log("Todos los Datos son !", data);
      this.tasks=data;
      });
    }

    getTasksbyId(id:String){
      let observable = this._httpService.getById(id);
      observable.subscribe(data => console.log("por ID es !", data));
    }

     btnDetalle(tasks:any) {
        this.selectedDescription =  tasks.description;
        this.selectedCompleted = tasks.completed;
    }


}
