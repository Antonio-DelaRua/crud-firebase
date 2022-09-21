import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  createCar: FormGroup;
  submitted = false;
  loading = false;

  constructor(private fb: FormBuilder, private _carService: CarService, private router: Router, private toastr: ToastrService) { 
    this.createCar = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      caballos: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarCar(){
    this.submitted = true;


    if(this.createCar.invalid){
      return;
    }
    const car:any = {
      modelo: this.createCar.value.modelo,
      marca: this.createCar.value.marca,
      caballos: this.createCar.value.caballos,
      descripcion: this.createCar.value.descripcion,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this.loading = true;
    this._carService.agregarCoche(car).then(()=>{
      this.toastr.success('el Coche fue registrado con exito','Coche registrado', {
        positionClass:'toast-bottom-right'
      })
      this.loading = false;
      this.router.navigate(['/list-car'])
    }).catch(error => {
      console.log(error);
    })
  }

}
