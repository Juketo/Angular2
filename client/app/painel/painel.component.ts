import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit
{
    @Input() titulo: string;
    elemento: ElementRef; // encapsula o elemento NATIVO do dom

    constructor(elemento: ElementRef)
    {
        this.elemento = elemento;
    }

    ngOnInit() // é chamado antes do constructor, quando os onInputs são chamados
    {
        this.titulo = this.titulo.length > 7
                      ? this.titulo.substr(0,7) + "..."
                      : this.titulo;
    }

    fadeOut(cb)
    {
        $(this.elemento.nativeElement).fadeOut(cb);
    }
}