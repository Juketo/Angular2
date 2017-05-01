// Podemos tipar variáveis, parâmetros de métodos e funções, inclusive o retorno.
function somaDoisNumeros(num1: number, num2: number): number 
{
  return num1 + num2;
}

// Quando usamos a diretiva ngFor, declaramos uma variável local de template, 
// a variável se chamada #foto.
<div class="row">
    <painel *ngFor="let foto of fotos | filtroPorTitulo:textoProcurado.value" 
            titulo="{{foto.titulo | uppercase}}" class="col-md-2">   
        <foto titulo="{{foto.titulo}}" url="{{foto.url}}"></foto>
        <br>
        <button class="btn btn-danger btn-block" (click)="remove(foto)" >
            Remover</button>
    </painel>
</div> 
// É a própria diretiva que atribuirá o valor dessa variável. 
// Veja que na associação de eventos (click)="remove(foto)" recebe como 
// parâmetro uma foto.

// Quando se remove um elemento de um item do teplate, precisa criar uma nova 
// lista (com a mudança) e setar por cima da lista atual do template.