import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjetoModel } from './projetos/projeto.model';

import {environment} from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {
  constructor(private http: HttpClient) {}

  listarProjetos(): Observable<any>{
    return this.http.get(environment.apiUrl);
  }

  cadastrarProjeto(projeto: ProjetoModel): Observable<any> {
    return this.http.post(environment.apiUrl, projeto);
  }

  removerProjeto(id: any) {
    return this.http.delete(environment.apiUrl.concat(id));
  }

  atualizarProjeto(id: any, projeto: ProjetoModel): Observable<any> {
    return this.http.put(environment.apiUrl.concat(id), projeto);
  }
}
