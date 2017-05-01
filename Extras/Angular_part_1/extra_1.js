//npm install: baixa tudo que ta listado no package.json menos o que já tem

// sempre mexer no arquivo .ts (transcript) pois dele vai ser criado o .js 
// que é feito em ecmaScript 5

// O .map mostra onde o erro está no arquivo .ts

/* Qualquer arquivo .ts criado é um módulo do ES6 por natureza. Tudo que for 
declarado dentro dele não cai no escopo global, e só temos acesso às 
funcionalidades exportadas de um módulo. Para exportarmos usamos a sintaxe
 xport, e para importarmos usamos a sintaxe import.*/

// cria o módulo principal da aplicação que declara os componentes A, B e 
// carrega em sua inicialização o componente A
import { Component } from '@angular/core';
@Component({
    selector: 'a',
    templateUrl: './app/a/a.component.html'
})
export class A {}
// ---
import { Component } from '@angular/core';
@Component({
    selector: 'b',
    templateUrl: './app/b/b.component.html'
})
export class B {}
// ---
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { A }   from './a';
import { B }   from './b';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ A, B ],
  bootstrap:    [ A ]
})
export class AppModule { }