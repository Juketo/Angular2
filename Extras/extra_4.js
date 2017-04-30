// painel é exibido, inclusive com seu título, mas seu conteúdo não
// neste caso faltou o ng-content
<div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title text-center">{{titulo}}</h3>
    </div>
    <div class="panel-body">
        <ng-content></ng-content>       
    </div>
</div>

// Angular ser um framework para criação de SPA (Single Page Applications)

// Não importamos o RouterModule em nosso módulo principal da aplicação, 
// mas apenas as rotas que foram compiladas pelo RouterModule.
import { routing } from './app.routes';
