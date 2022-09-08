import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/modelos/cliente.model';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes:Cliente[];
  cliente:Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
    id: ''
  }
  @ViewChild("clienteForm") clienteForm: NgForm;

  @ViewChild("botonCerrar") botonCerrar: ElementRef;
  
  constructor(private clientesServicio: ClienteService) { }

  ngOnInit(): void {
    this.clientesServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }

  getSaldoTotal(){
    let saldoTotal : number=0;
    if(this.clientes){
      this.clientes.forEach( cliente =>{
        saldoTotal += cliente.saldo;
      })
    }
    return saldoTotal;
  }

  agregar({value, valid}: NgForm ){
    if(!valid){
       console.log('hola')
    }
    else{
      this.clientesServicio.agregarCliente(value);
      this.clienteForm.resetForm();
      this.cerrarModal();
    }
  }

  private cerrarModal(){
    this.botonCerrar.nativeElement.click();
  }

}
