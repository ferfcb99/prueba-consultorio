import { Consultorio } from './../dtos/Consultorio.dto';
import { Component, OnInit } from '@angular/core';
import { CitaService } from './services/Cita-service.service';
import { Cita } from 'src/dtos/Cita.dto';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public citas: Cita[] = [];

  public consultorio: number = 0;
  public doctor: number = 0;
  public horario: string = "";
  public nombre_paciente: string = "";



  constructor(private citasService: CitaService,
    private formBuilder: FormBuilder){}

  ngOnInit(): void {
   // throw new Error('Method not implemented.');
   this.getCitas();
  }

  getCitas(): void{
    this.citasService.getCitas()
      .subscribe(citas => {
        this.citas = citas.body;
        console.log((this.citas))
      });
  }

  enviar(): void{

  }

}
