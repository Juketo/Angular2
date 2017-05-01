// componente angular encapsula seu css
@Component({
    styleUrls: ['./painel.component.css']
)}

// modos de encapsulamento da view: 

// ViewEncapsulation.NONE

// ViewEncapsulation.Emulated: encapsulamento padrão, tenta emular o Shadow DOM. 
// Tenta emular o Shadow DOM, garantindo assim que um elemento Host encapsule 
// determinado CSS sem que ele vaze para o escopo global afetando outros elementos.

// ViewEncapsulation.Native: utiliza diretamente Shadow DOM 
// (não usar, pois não está consolidado nos browsers)
