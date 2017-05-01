import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';
import { FotoService } from './foto.service';

@NgModule({
    declarations: [ FotoComponent, FiltroPorTitulo ], // o que quero usar
    exports: [ FotoComponent, FiltroPorTitulo ], // o que quero que outros utilizem
    providers: [ FotoService ]

})

export class FotoModule
{
    
}