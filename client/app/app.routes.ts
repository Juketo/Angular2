// de/para
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

const appRoutes: Routes = [
// O path é o caminho, a URL digitada pelo usuário ou fruto de um link. 
// O component indica qual componente deve ser carregado assim que a URL 
// da rota for acessada.
{ path: '', component: ListagemComponent },
{ path: 'cadastro', component: CadastroComponent },
{ path: 'cadastro/:id', component: CadastroComponent },
{ path: '**', component: ListagemComponent }, 
// ** = se digitar qualquer outra coisa, cai no listagem

];

export const routing = RouterModule.forRoot(appRoutes);
 
/*
A diretiva router-outlet indica o local em que os componentes carregados 
pelo sistema de rotas do Angular devem ser inseridos dentro de um template.

Em nosso caso, como AppComponent passou a ser o primeiro componente a ser
carregado em nossa aplicação, é em seu template que usamos a diretiva 
router-outlet.
*/