import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Huerto } from '../models/huerto.model';
import { Planta } from '../models/planta.model';
import { Sensor } from '../models/sensor.model';
import { Comunidad } from '../models/comunidad.model';
import { Tarea } from '../models/tareas.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api-huertos.com';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuarios`);
  }

  getHuertos(): Observable<Huerto[]> {
    return this.http.get<Huerto[]>(`${this.apiUrl}/huertos`);
  }

  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(`${this.apiUrl}/plantas`);
  }

  getSensores(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(`${this.apiUrl}/sensores`);
  }

  getComunidades(): Observable<Comunidad[]> {
    return this.http.get<Comunidad[]>(`${this.apiUrl}/comunidades`);
  }

  getTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.apiUrl}/tareas`);
  }
}