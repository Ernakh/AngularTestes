import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Pessoa } from '../models/Pessoa.model';

@Component({
  selector: 'app-componente11',
  templateUrl: './componente11.component.html',
  styleUrls: ['./componente11.component.css']
})
export class Componente11Component implements OnInit {

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
  editando = null;
  nome = null;
  papel = null;

  selecionar(pessoa) {
    this.selecionado = pessoa;
  }

  cadastro = new FormGroup(
    {
      nome: new FormControl(''),
      papel: new FormControl('')
    }
  );

  salvar()
  {
    if (this.editando)
    {
      this.editando.nome = this.nome;
      this.editando.papel = this.papel;
    }
    else
    {
      const d = new Pessoa(this.nome, this.papel);
      this.pessoas.push(d);
    }

    this.nome = null;
    this.papel = null;
    this.editando = null;
  }

  editar(pessoa)
  {
    this.nome = pessoa.nome;
    this.papel = pessoa.papel;
    this.editando = pessoa;
    //this.cadastro.value.nome = pessoa.nome;
    //this.cadastro.value.papel = pessoa.papel;
  }

  cancelar()
  {
    this.nome = null;
    this.papel = null;
    this.editando = null;
  }

  excluir(pessoa)
  {
      if (this.editando == pessoa)
      {
        alert('Você não pode excluir uma pessoa que está editando');
      }
      else
      {

        if (confirm('Tem certeza que deseja excluir a pessoa "' + pessoa.nome + '"?'))
        {
          const i = this.pessoas.indexOf(pessoa);
          this.pessoas.splice(i, 1);
        }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
