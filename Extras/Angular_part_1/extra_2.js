// criacao de classe no Typescript 6
class Pessoa 
{
    nome;
    endereco;
}
// diferente do ES06
class Pessoa 
{
    constructor()
    {
        this._nome;
        this._endereco;
    }
}


// data binding unidirecional do modelo para a view
<img class="img-responsive center-block" [src]="url" [alt]="titulo">
// ou via Angula 1
<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">

// inbound properties
import {Component, Input} from '@angular/core';
@Component
({
    moduleId: module.id, //Faz com que o componente procure o template relativo à sua pasta.
    selector: 'foto',
    templateUrl: './foto.component.html' 
})
export class FotoComponent {

    @Input() titulo;
    @Input() url;
}


