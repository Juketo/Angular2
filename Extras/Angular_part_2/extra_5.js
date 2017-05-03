// ao invés de 
private _mensagem: string;
private _inclusao: boolean;
constructor(mensagem: string, inclusao: boolean)
{
    this._mensagem = mensagem;
    this._inclusao = inclusao;
}
// usar
constructor(private _mensagem: string, private _inclusao: boolean)
{
    this._mensagem = _mensagem;
    this._inclusao = _inclusao;
}

// para acessar propriedades usam-se getters
get mensagem(): string
{
    return _mensagem;
}
// e se acessa via
let msg = classe.mensagem;
// sem o () no final

// port default, toda propriedade é public