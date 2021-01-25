import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProjetosService } from './projetos.service';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, ProjetosComponent, HeaderComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, NgbModule],
  providers: [HttpClientModule, ProjetosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
