import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email:string;
  password:string;

  constructor(private loginServicio:LoginService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.loginServicio.getAuth().subscribe(auth =>{
      if(auth){
        this.router.navigate(['/']);
      }
    })
  }

  registro(){
    this.loginServicio.registro(this.email,this.password)
    .then(res =>{
      this.router.navigate(['/']);
    })
    .catch(error =>{
      console.log(error)
    })
  }
              
}
