import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ], // o que o modulo declara
    bootstrap: [ AppComponent ] // se tivesse mais de um componente, aponta qual iniciar
})
export class AppModule
{

}