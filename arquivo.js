class Aluno {

    nome;
    matricula;
    nota1;
    nota2;
    nota3;
  
    constructor(nome, matricula, n1, n2, n3) {
       this.nome = nome;
       this.matricula = matricula;
       this.nota1 = n1;
       this.nota2 = n2;
       this.nota3 = n3;
    }
      
    exibeInfo() {
      return `Aluno: ${this.nome} - mat: ${this.matricula}
      Notas: N1: ${this.nota1} - N2: ${this.nota2} - N3: ${this.nota3}
      Média:${this.calculaMedia()}`;
    }

    calculaMedia() {
      return ((Number(this.nota1) + Number(this.nota2) + Number(this.nota3)) / 3).toFixed(2);
    }
}

//-----------------------------------------------------------------------------------------------------------
const nomeAluno = document.getElementById('inputNomeAluno')
const matriculaAluno = document.getElementById('inputMatriculaAluno')
const alunoNota1 = document.getElementById('inputNota1')
const alunoNota2 = document.getElementById('inputNota2')
const alunoNota3 = document.getElementById('inputNota3')
const corpoTabela = document.getElementById('tbody')

function inserirAluno(event) {
  event.preventDefault()

  let aluno = new Aluno(nomeAluno.value, matriculaAluno.value, alunoNota1.value, alunoNota2.value, alunoNota3.value)

  corpoTabela.innerHTML +=   `
                              <tr>
                                <td>${aluno.matricula}</td>
                                <td>${aluno.nome}</td>
                                <td>${aluno.calculaMedia()}</td>
                                <td id="botaoDeletarAluno">🗑️</td>
                              </tr>
                            `
  deletarAluno()
}

function deletarAluno() {
  const btnDeletaAluno = document.querySelectorAll('#botaoDeletarAluno')
  btnDeletaAluno.forEach(function(botao) {
    botao.onclick = function() {
      let paiDoBotaoClicado = botao.parentElement
      paiDoBotaoClicado.remove()
    }
  })
}