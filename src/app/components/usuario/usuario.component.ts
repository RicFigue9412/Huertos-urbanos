import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
  import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }
}