/*
Uma variável local de um template é uma maneira de movermos dados entre elementos. 
Contudo, seu valor depende do contexto. O valor da variável é o elemento no qual 
ela é adicionada:
*/
<input class="form-control" #textoProcurado  placeholder="filtrar pelo título da foto">
// #textoProcurado é o elemento, ou seja, o input
// ou ainda da pra usar "var-" ao invés do "#"
var-textoProcurado

// Angular só atualizará a view em resposta a um evento assíncrono.
// logo, se usa esse hackzinho para fazer funcionar
<input #textoProcurado (keyup)="0">
<p>{{textoProcurado.value}}</p>
// é suficiente para que o Angular atualize a view exibindo sempre o 
// novo valor do nosso input

// Pipe serve para filtrar de acordo com a entrada do usuário.
// ele também precisa do hack
(keyup)="zero"

// implementamos a classe PipeTransform para garantir que o transform 
// esteja correto na classe
export class FiltroPorTitulo implements PipeTransform {}