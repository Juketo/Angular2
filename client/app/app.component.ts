import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component
({ // annotentions in c#
    moduleId: module.id,
    selector: 'app', // indica <tag> como <app>
    templateUrl: './app.component.html'
})
export class AppComponent
{
    fotos: Object[] = []; // Array<Object> é o tipo

    constructor(http: Http) ///*@Inject(Http)*/
    {
        http.get('v1/fotos')
            .map(res => res.json())
            .subscribe(fotos => 
            {
                this.fotos = fotos;
                console.log(this.fotos);
            }), erro => console.log(erro);
    }
}