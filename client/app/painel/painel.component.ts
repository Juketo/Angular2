import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit
{
    @Input() titulo: string;

    ngOnInit() // é chamado antes do constructor, quando os onInputs são chamados
    {
        this.titulo = this.titulo.length > 7
                      ? this.titulo.substr(0,7) + "..."
                      : this.titulo;
    }
}