import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  URL:string = "http://localhost:3000/user/login";

  constructor(private httpClient: HttpClient ) { }

  autenticar(usuario: String, senha: String){
    return this.httpClient.post(this.URL, {
      userName: usuario,
      password: senha
    })
  }
}
