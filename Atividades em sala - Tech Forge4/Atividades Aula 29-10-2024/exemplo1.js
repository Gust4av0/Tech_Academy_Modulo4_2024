//Exemplo de Herança
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nomeAluno, idadeAluno, sexoAluno) {
        this.nome = nomeAluno;
        this.idade = idadeAluno;
        this.sexo = sexoAluno;
    }
    Pessoa.prototype.apresentar = function () {
        console.log("Meu nome \u00E9: ".concat(this.nome, ", idade: ").concat(this.idade, " e meu sexo \u00E9: ").concat(this.sexo));
    };
    return Pessoa;
}());
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(nomeAluno, idadeAluno, sexoAluno, raAluno) {
        var _this = _super.call(this, nomeAluno, idadeAluno, sexoAluno) || this; // Chama o construtor da Classe pai, que no caso é a classe pessoa.
        _this.ra = raAluno;
        return _this;
    }
    return Aluno;
}(Pessoa));
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(nomeProfessor, idadeProfessor, sexoProfessor, chapaProfessor) {
        var _this = _super.call(this, nomeProfessor, idadeProfessor, sexoProfessor) || this;
        _this.chapa = chapaProfessor;
        return _this;
    }
    Professor.prototype.adicionarDisciplinas = function (disciplinasAdicionadas) {
        this.disciplinas = disciplinasAdicionadas;
        console.log("Disciplinas do Professor: ".concat(this.disciplinas, ";"));
    };
    return Professor;
}(Pessoa));
var alunoGustavo = new Aluno('Gustavo', 19, 'Masculino', 2310100);
alunoGustavo.apresentar();
var professorAntonio = new Professor('Antonio', 40, 'Masculino', 13456789);
professorAntonio.apresentar();
professorAntonio.adicionarDisciplinas(['Matemática', 'Artes']);
