// importando a classe Http do módulo @angular/http
import {Http} from '@angular/http';
// precisa instanciar mas
var http = new Http(); // não funciona
// logo, se usa a tipagem no constructor
constructor(http: Http)  { }
// e assim o angular vai importar/fazer automaticamente a instância
// entretando ainda vai precisar de um provider que saiba devolver o http
import { HttpModule } from '@angular/http';

// ngFor que permite iterarmos sobre uma lista em nosso template
<foto *ngFor="let foto of fotos" [titulo]="foto.titulo" [url]="foto.url"></foto>
// usamos a sintaxe com colchetes para realizar uma associação unidirecional 
// da fonte de dados para a view