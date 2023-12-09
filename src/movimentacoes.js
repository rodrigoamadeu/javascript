class Movimentacao {
    constructor( banco = 'padrao', nome = '', saldo = 0 ){
        this.banco = banco,
        this.nome = nome,
        this.saldo = saldo
    }
}

class Registro{
    constructor(dia, mes, ano){
        this.dia = dia, 
        this.mes = mes,
        this.ano = ano, 
        this.movimentacoes = []
    }

    novaMovimentacao(... movimentacoes){
        movimentacoes.forEach( 
            lancamento => this.movimentacoes.push(lancamento) 
        )
    }

    resumo(){
        let valorAtualizado = 0
        let tipo = '' // vai pegar o tipo de conta
        const regex = new RegExp('x', 'gi') //ao invés de inserir a regex diretamente no .replace pode-se criar uma variável para regex e se ela for 'gi' será glogal 
        this.movimentacoes.forEach(lancamento => {
            // if(!lancamento.nome.match(/imposto/)){ // esse if vai somar tudo que não for 'imposto'
            // if(lancamento.nome.match(/imposto/)){ // esse if vai somar tudo que for 'imposto'
            // if(lancamento.banco.match(/x/i)){ // esse if vai somar tudo que for 'banco x ou X'
            lancamento.banco = lancamento.banco.replace(regex, 'Y') // faz a substituição do lancamento Banco Y para Banco X, passando o primeiro parametro para qual vai ser o atual e o segundo parametro o que vai ser substituido. Aqui estamos utilizando o método Replace com Regex. No caso a regex foi passada em forma de variável global 
            //if(lancamento.banco.match(/y/i)){ // esse if vai somar tudo que for 'banco Y ou y'. O .match(aqui é inserido) faz a busca pelo valor inserido ()
            //if(lancamento.banco.match(/\D/i)){ // esse if vai somar todo banco que não for numero, apenas letras '/\D/i'. O .match(aqui é inserido) faz a busca pelo valor inserido ()
            if(!lancamento.banco.match(regex)){ // tudo que não for (regex)
                valorAtualizado += lancamento.saldo
                tipo += lancamento.nome + ' | '
            }
        })
        return tipo + valorAtualizado
    }
}    

const m01 = new Movimentacao('00000','salario', 20000)
const m02 = new Movimentacao('Bank Z', 'comissao', 2000 )
const m03 = new Movimentacao('Bank X', 'imposto', -5000)
const m04 = new Movimentacao('Bank Y', 'contas', -1000)
const m05 = new Movimentacao('Bank X', 'imposto', -1000)


const registro01 = new Registro(22,10,2021)
registro01.novaMovimentacao(m01, m02, m03, m04, m05)
console.log('O saldo dos registros foi: ' + registro01.resumo())


const movimentacoesGerais = [m01, m02, m03, m04, m05]

movimentacoesGerais.map( elemento => 
    //console.log(elemento) 
    console.log(elemento.banco.length)   
)