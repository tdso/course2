import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  url_post:string = "http://localhost:3000/user/signup";

  constructor(private httpClient : HttpClient) { }

  cadastraNovoUsuario (usuario: NovoUsuario){
    return this.httpClient.post(this.url_post, {
      usuario
    });
  }
}
