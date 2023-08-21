const aluno = {
    nomeCompleto: "nome do aluno",
    dataDeNascimento: "00/00/0000",
    sexo: "Undefined",
    numeroRA: "999999",
};

function geraAlunos (nome, dataDeNascimento, sexo, numeroRA,modelo) {
    const aluno = Object.create(modelo);
    aluno.nomeCompleto = nome; 
    aluno.dataDeNascimento = dataDeNascimento;
    aluno.sexo = sexo; 
    aluno.numeroRA = numeroRA; 

    return aluno;
}

function Turma () {
    this.turma = [];
    this.frequencia = [];

    this.adiciona = function (aluno) {
        let novoaluno = Object.values(aluno);
        this.turma.push(aluno);
        for (let k = 0; k < (this.turma.length-1); k++) {
            let aluno = Object.values(this.turma[k]);
            if (Number(aluno[2]) == Number(novoaluno[2])) {
                this.turma.pop();
                break;
            }
        }
    }

    this.leitura = function (registroAcademico) {
        for (let k of this.turma) {
            let aluno = Object.values(k);
            if (Number(aluno[2]) == Number(registroAcademico)) {
                console.log(k);
                break;
            }
        }
    }

    this.remocao = function (registroAcademico) {
        for (let k in this.turma) {
            let aluno = Object.values(this.turma[k]);
            if (Number(aluno[2]) == Number(registroAcademico)) {
                this.turma.splice(k,1);
                break;
            }
        }
    }

    this.atualiza = function (registroAcademico) {
        for (let k in this.turma) {
            let aluno = Object.values(this.turma[k]);
            if (Number(aluno[2]) == Number(registroAcademico)) {
                console.log("Atualiza dados");
                break;
            }
        }
    }

    this.mostra = function () {
        console.log(this.turma);
    }

}

const turma = new Turma();
turma.adiciona(geraAlunos('fulano','NA','23756124851','NA',aluno));
turma.adiciona(geraAlunos('fulano','NA','23756124851','NA',aluno));

turma.mostra();
turma.remocao('23756124851');
turma.mostra();