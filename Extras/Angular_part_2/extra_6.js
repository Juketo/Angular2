/*
O Output é um decorator que permite criarmos eventos customizado, isto é, 
eventos que não existem na especificação JavaScript. Contudo, precisamos 
associar o decorator a uma instância de EventEmitter do pacte @angular/core. 
*/

/*
O selector de um componente nada mais é do que o nome que utilizaremos 
para utilizarmos o componente no template de outros componentes.
 */

/*
O nome de um evento customizado é o nome do atributo decorado com Output 
e que guarda uma instância de EventEmitter. 
*/

/*
O Input é um decorator para definir uma inbound property de um componente. 
Em outras palavras, ela permite passarmos valores o selector do componente.
*/

// chamando outra acao
import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'meuComponente',
  templateUrl: './meu-component.html'
})
class MeuComponent { 
   @Output meuEvento = new EventEmitter();
   executaAcao() {
       this.meuEvento.emit();
   }
}
// tipando fica assim
@Output meuEvento = new EventEmitter<number>(); // tipando o EventEmitter
executaAcao()
{
    this.meuEvento.emit(10); // como nosso EventEmitter é do tipo number, 
    // podemos passar um número. Qualquer outra coisa geraria um erro de 
    // compilação.
}
// template
<button click="executaAcao()">Meu botão</button>
// outro template
<meuComponent meuEvento="metodoQualquerdoComponent($event)"></meuComponent>
// que resulta
metodoQualquerDoComponent(event) {
    alert(event); // exibe 10!
}

// enviando dados com um event
/*
associamos ao meuEvento um método de um componente, no caso aquele cujo 
template utilizou meuComponent. Como meuComponet em sua definição dispara 
um evento click que por debaixo dos panos chama*/ 
this.meuEvento.emit(10), 
/* assim que for disparado, chamará o método definido em meuEvento do nosso 
componente. Este método tem acesso a $event. Sendo assim, no método, $event 
passa a ser o dado que disponibilizamos.
*/