import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente.model';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente ={
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
    id: ''
  } 

  id:string;

  constructor(private clienteServicio:ClienteService,
              private router:Router,
              private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clienteServicio.getCliente(this.id).subscribe( cliente => {
      this.cliente = cliente;
    });
  }
 
  guardar({value,valid}: NgForm ){
    if(!valid){
      console.log('Por favor rellenar correctamente el formulario')
    }else{
      value.id=this.id;
      this.clienteServicio.modificarCliente(value);
      this.router.navigate(['/'])
    }
  }

  eliminar(){
    if(confirm('¿Seguro que desea eliminar el cliente?')){
      this.clienteServicio.eliminarCliente(this.cliente);
      this.router.navigate(['/']);
    }
  }

}
