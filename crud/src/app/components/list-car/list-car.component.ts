import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

  coches: any[] = []

  

  constructor(private _carService: CarService, private toastr: ToastrService ) { 

  
   
  }

  ngOnInit(): void {

    this.getCoches()
  }

  getCoches(){
    this._carService.getCar().subscribe(data => {
      this.coches = [];
      data.forEach((element:any) => {
        this.coches.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.coches);
    })
  }
  eliminarEmpleado(id: string) {
    this._carService.eliminarCoche(id).then(() => {
      console.log('empelado eliminado con exito');
      this.toastr.error('El empleado fue eliminado con exito', 'Registro eliminado!', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    })
  }

}
