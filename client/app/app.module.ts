import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map'; // importa o .Map para observables
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // necessário para o ngModel
import { BotaoModule } from './botao/botao.module';
import { ModalModule } from './modal/modal.module';

@NgModule({
    // appModule tem dependencia do FotoModule
    imports: 
    [ 
        BrowserModule, 
        FotoModule, 
        HttpModule, 
        PainelModule, 
        routing,
        FormsModule,
        ReactiveFormsModule,
        BotaoModule,
        ModalModule 
    ],
    // o que o modulo declara
    declarations: 
    [ 
        AppComponent, 
        CadastroComponent, 
        ListagemComponent 
    ], 
    // se tivesse mais de um componente, aponta qual iniciar
    bootstrap: [ AppComponent ]
})
export class AppModule
{

}