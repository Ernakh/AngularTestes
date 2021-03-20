import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit
{

  data: any;

  cadastro = new FormGroup(
    {
      nome: new FormControl(''),
      sobrenome: new FormControl(''),
      idade: new FormControl('')
    }
  );

  constructor() { }

  ngOnInit(): void
  {
  }

  obter()
  {
    this.data = this.cadastro.value;
  }

}
