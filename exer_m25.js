class Aluno {
    constructor(nomeDoAluno, notaDoAluno){
        this.nome = nomeDoAluno
        this.nota = notaDoAluno
    }
}

const ana = new Aluno('Ana', 7)
const paulo = new Aluno('Paulo', 7.5)
const matheus = new Aluno('Matheus', 5.5)
const vitoria = new Aluno('Vitória', 6)
const elena = new Aluno('Elena', 8.5)
const carlos = new Aluno('Carlos', 5)

const todosOsAlunos = [ana, paulo, matheus, vitoria, elena, carlos]
const alunosComSeisOuMais = todosOsAlunos.filter(function(item){
    return item.nota >= 6
})

const seisOuMais = () => {
    console.log(alunosComSeisOuMais)
}
seisOuMais()