import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: String = "";
  senha: String = "";

  constructor(private authService:AutenticacaoService, private router:Router) { }

  login(){
    console.log(this.usuario);
    console.log(this.senha);
    this.authService.autenticar(this.usuario,this.senha).subscribe((resp) => {
      console.log("retorno da api - sucesso");
      this.router.navigate(['animais']);
    },
    (err) =>{
      console.log("erro na chamda da api - " + err);
    });
  }

  ngOnInit(): void {
  }

}
