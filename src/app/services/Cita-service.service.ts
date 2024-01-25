import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from 'src/dtos/Cita.dto';
import { ResponseApi } from 'src/dtos/Response.dto';

@Injectable({providedIn: 'root'})


export class CitaService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl: string = "http://localhost:8081";
  private getCitasUrl: string = "citas/findAll";
  private getCitaByIdUrl: string = "citas/getById"
  private deleteCitaByIdUrl: string = "citas/deleteById"
  private createCitaUrl: string = "citas/create";



/*
  public getCitas(): Observable<Cita[]>{
    return this.httpClient.get<Cita[]>(`${this.baseUrl}/${this.getCitasUrl}`);
  }
*/


  public getCitas(): Observable<ResponseApi<Cita[]>>{
    return this.httpClient.get<ResponseApi<Cita[]>>(`${this.baseUrl}/${this.getCitasUrl}`);
  }

  public createCita(cita: Cita): Observable<ResponseApi<Cita>>{
    return this.httpClient.post<ResponseApi<Cita>>(`${this.baseUrl}/${this.createCita}/`, cita);
  }

}
