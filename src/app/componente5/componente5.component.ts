import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente5',
  templateUrl: './componente5.component.html',
  styleUrls: ['./componente5.component.css']
})
export class Componente5Component implements OnInit {

  pessoas = [
    { nome: "Fabrício", papel: "Professor" },
    { nome: "Reiner", papel: "Professor" },
    { nome: "Adrian", papel: "Aluno" },
    { nome: "Gabriel",papel: "Aluno" },
    { nome: "Henrique",papel: "Aluno" },
    { nome: "Rafael",papel: "Aluno" },
    { nome: "Roberta",papel: "Aluno" },
    { nome: "Vitor",papel: "Aluno" },
    { nome: "Wagner",papel: "Aluno" },
    { nome: "Augusto",papel: "Aluno" },
    { nome: "Bruno",papel: "Aluno" },
    { nome: "Cássio",papel: "Aluno" },
    { nome: "César",papel: "Aluno" },
    { nome: "Douglas",papel: "Aluno" },
    { nome: "Eduardo",papel: "Aluno" },
    { nome: "Felipe",papel: "Aluno" },
    { nome: "Flávio",papel: "Aluno" },
    { nome: "Gabriel",papel: "Aluno" },
    { nome: "Juliana",papel: "Aluno" },
    { nome: "Juliano",papel: "Aluno" },
    { nome: "Laura",papel: "Aluno" },
    { nome: "Luis Ricardo", papel: "Aluno" },
    { nome: "Meani",papel: "Aluno" },
    { nome: "Rafael",papel: "Aluno" },
    { nome: "Ruan",papel: "Aluno" },
    { nome: "Matheus", papel: "Aluno" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
