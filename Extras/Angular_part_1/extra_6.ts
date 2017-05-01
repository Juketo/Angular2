// event binding: da view para a fonte de dados
<input (keyup)="calculaTotal()">
// data binding: da fonte de dados para a view
<input [value]="pessoa.nome">

// Angular 2 não possui two-way data binding como implementado no Angular 1

// diretiva que funciona como uma espécie de atalho para as associações
// ao invés de
<textarea 
    name="descricao"    
    (input)="foto.descricao = $event.target.value" 
    [value]="foto.descricao" 
    class="form-control">
 </textarea>
// usar
<textarea name="descricao" [(ngModel)]="foto.descricao" class="form-control">
</textarea>

//  é através do serviço Http que realizamos requisições Ajax, 
// por exemplo, requisições do tipo GET

// O método POST do serviço Http espera receber um JSON
var headers = new Headers();
headers.append('Content-Type', 'application/json');
var foto = {titulo : 'Calopsita Azul', url: 'N/A'};
http.post('v1/fotos', JSON.stringify(this.foto), { headers: headers });

// inbound property: podemos passar para o componente um título através da view. Ex:
<painel titulo="Calopsita Azul"></painel>

// toda property com o decorator Input só recebe os dados associados 
// à propriedade depois da chamada do construtor

// problema: o componente é iniciado, mas só depois das inbound properties 
// terem sido atribuídas. Para arrumar a ordem do ciclo de vida, usa-se:
import { Component, Input, OnInit } from '@angular/core';
export class PainelComponent implements OnInit
{
    ngOnInit()
    {
        this.titulo = this.titulo.length > 7 ?
             this.titulo.substr(0, 7) + '...' : 
             this.titulo;
    }
}
// ao invés de se colocar no constructor

// TypeScript, podemos usar interfaces para indicar a forma de um objeto literal
interface Pedido
{
    descricao: string;
    valor: number;
}
function realizar(pedido: Pedido) { ... }
realizar({descricao: 'PS4', valor: 1.500}); // válido
realizar({descricao: 'XBOX'}); // inválido, faltou a propriedade `valor`.
