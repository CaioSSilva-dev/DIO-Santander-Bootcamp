class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(num){
        this._saldo = num;
    }
    saque(num){
        if(num > this._saldo){
            return "Operação Invalida: Saldo Insuficiente"
        }
        return this._saldo = this._saldo - num
    }
    deposito(num){
        this._saldo = this._saldo + num
        return this._saldo
    }
}
class ContaPoupanca{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }
    saque(num){
        if(num > 500){
            return "Operação Invalida: Limite de saque 500R$"
        }
        this._saldo = this._saldo - num
        return this._saldo
    }
    deposito(num){
        this.saldo = this._saldo + num
        return this._saldo
    }
}