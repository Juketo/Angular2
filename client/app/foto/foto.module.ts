import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';

@NgModule({
    declarations: [ FotoComponent, FiltroPorTitulo ], // o que quero usar
    exports: [ FotoComponent, FiltroPorTitulo ] // o que quero que outros utilizem
})

export class FotoModule
{
    
}