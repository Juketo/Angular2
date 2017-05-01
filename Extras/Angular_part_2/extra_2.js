// só pode exportar classes que tem Decorators (@Component({})
// dai se declara no "providers" no Decorator do Module

// Para que seja possível injetar FotoService em outros componentes 
// é necessário anotar FotoService com @Injectable, caso contrário Angular 
// não entenderá que deve procurar as dependências do próprio serviço quando 
// for injetá-lo. Além disso, o móduloFotoModule precisa adicionar FotoService 
// em sua lista de providers.
import { FotoService } from './foto.service';
@NgModule({
    providers: [ FotoService ]
)}
@Injectable() // Por padrão classes não são injectable.
export class FotoService {};

// tipando o retorno para trazer um Array de FotoComponent
lista(): Observable<FotoComponent[]> 
{
    return this.http.get(this.url)
            .map(res => res.json());

}

// cria-se um Service quando em mais de um lugar tiver de 
// importar um serviço, como o Http.

// Injetando
@Injectable()
constructor(service: FotoService) {}
// ou ainda
constructor(@Inject(FotoService) service) {}