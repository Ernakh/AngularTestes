import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pessoa } from '../models/Pessoa.model';

@Component({
  selector: 'app-componente8',
  templateUrl: './componente8.component.html',
  styleUrls: ['./componente8.component.css']
})
export class Componente8Component implements OnInit {

  pessoas = [
    new Pessoa ("Fabrício","Professor" ),
    new Pessoa ("Reiner", "Professor" ),
    new Pessoa ("Adrian", "Aluno" ),
    new Pessoa ("Gabriel", "Aluno" ),
    new Pessoa ("Henrique", "Aluno" ),
    new Pessoa ("Rafael", "Aluno" ),
    new Pessoa ("Roberta", "Aluno" ),
    new Pessoa ("Vitor", "Aluno" ),
    new Pessoa ("Wagner", "Aluno" ),
    new Pessoa ("Augusto", "Aluno" ),
    new Pessoa ("Bruno", "Aluno" ),
    new Pessoa ("Cássio","Aluno" ),
    new Pessoa ("César", "Aluno" ),
    new Pessoa ("Douglas", "Aluno" ),
    new Pessoa ("Eduardo", "Aluno" ),
    new Pessoa ("Felipe", "Aluno" ),
    new Pessoa ("Flávio", "Aluno" ),
    new Pessoa ("Gabriel", "Aluno" ),
    new Pessoa ("Juliana", "Aluno" ),
    new Pessoa ("Juliano", "Aluno" ),
    new Pessoa ("Laura", "Aluno" ),
    new Pessoa ("Luis Ricardo", "Aluno" ),
    new Pessoa ("Meani", "Aluno" ),
    new Pessoa ("Rafael", "Aluno" ),
    new Pessoa ("Ruan", "Aluno" ),
    new Pessoa ("Matheus", "Aluno" )
  ];

  selecionado = null;

  selecionar(pessoa) {
    this.selecionado = pessoa;
  }

  cadastro = new FormGroup(
    {
      nome: new FormControl(''),
      papel: new FormControl('')
    }
  );

  salvar() {
    const d = new Pessoa(this.cadastro.value.nome, this.cadastro.value.papel);
    this.pessoas.push(d);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
