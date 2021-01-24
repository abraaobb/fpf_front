import { Component, OnInit } from '@angular/core';
import { ProjetosService } from '../projetos.service';
import { ProjetoModel } from '../projetos/projeto.model';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
})
export class ProjetosComponent implements OnInit {
  projeto: ProjetoModel = new ProjetoModel();
  projetos: Array<any> = new Array();

  constructor(private projetosService: ProjetosService) {}

  ngOnInit(): void {
    this.listarProjetos();
  }

  listarProjetos() {
    this.projetosService.listarProjetos().subscribe(
      (projetos) => {
        this.projetos = projetos;
      },
      (err) => {
        console.log('Erro ao listar os projetos ' + err);
      }
    );
  }

  cadastrar() {
    console.log(this.projeto);
    this.projetosService.cadastrarProjeto(this.projeto).subscribe(
      (projeto) => {
        this.projeto = new ProjetoModel();
        this.listarProjetos();
      },
      (err) => {
        console.log('erro ao cadastrar o projeto');
      }
    );
  }

  remover(id: number) {
    this.projetosService.removerProjeto(id).subscribe(
      (projeto) => {
        this.projeto = new ProjetoModel();
        this.listarProjetos();
      },
      (err) => {
        console.log('erro ao atualizar o projeto');
      }
    );
  }

  atualizar(id: number) {
    this.projetosService.atualizarProjeto(id, this.projeto).subscribe(
      (projeto) => {
        this.projeto = new ProjetoModel();
        this.listarProjetos();
      },
      (err) => {
        console.log('erro ao atualizar o projeto');
      }
    );
  }
}
