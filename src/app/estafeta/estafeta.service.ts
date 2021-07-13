import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import {Estafeta} from './Estafeta';
@Injectable({
  providedIn: 'root'
})
export class EstafetaService {

  constructor(
    private http: HttpClient
    
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getEstafetas(): Observable<Estafeta[]>{
     return this.http.get<Estafeta[]>("http://localhost:3000/estafetas")
      
     
  }

  getEstafeta(): void{
    console.log(this.http.get("localhost:3000/estafetas"))
 }

  
}
