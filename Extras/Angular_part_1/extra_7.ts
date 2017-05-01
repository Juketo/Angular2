// validação orientada a template: é feita diretamente no template por meio 
// de diretivas
// validação orientada a modelo: é feita no componente

// ngIf exibe o elemento no qual foi adicionada se o seu valor for true 
// e o esconde quando for false.
<span *ngIf="!titulo.valid" class="form-control alert-danger">
        Título obrigatório
</span>
// é atalho para
template="ngIf !titulo.valid"
// ou
[ngIf]="!titulo.valid"