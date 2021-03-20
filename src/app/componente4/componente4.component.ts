import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})

export class Componente4Component implements OnInit
{

  alunos = [
    "Fabrício",
    "Reiner",
    "Adrian",
    "Gabriel",
    "Henrique",
    "Rafael",
    "Roberta",
    "Vitor",
    "Wagner",
    "Augusto",
    "Bruno",
    "Cássio",
    "César",
    "Douglas",
    "Eduardo",
    "Felipe",
    "Flávio",
    "Gabriel",
    "Juliana",
    "Juliano",
    "Laura",
    "Luis Ricardo",
    "Meani",
    "Rafael",
    "Ruan",
    "Matheus"
  ];

  constructor()
  {

  }

  ngOnInit(): void
  {
  }

}
