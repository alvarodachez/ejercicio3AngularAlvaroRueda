import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  miFormulario = new FormGroup({
    username: new FormControl(''),
    useremail: new FormControl('', [Validators.email, Validators.required]),
    terminos: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void{
    console.log("Esta todo validado, enhorabuena")
  }

}
