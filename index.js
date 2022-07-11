const prompt = require('prompt-sync')();

/*


Projeto 1 - A Jornada do Herói

Hoje começamos o nosso primeiro projeto entregável! Esse projeto 

avaliará os conteúdos passados durante essa primeira semana, e se 

você consegue desenvolver uma programação utilizando todos eles.

Você poderá usar as aulas de Codelab para trabalhar no seu projeto.

A premissa é a seguinte: O nosso herói chegou ao fim da sua jornada, 

ao desafio final, e você pode criar um background legal resumindo qual 

foi essa jornada e onde ele chegou. Use sua criatividade! Vale qualquer

coisa: uma guerreira que percorreu um longo caminho para enfrentar um 

bruxo e salvar seu povo, um astronauta que teve que viajar aos confins

da galáxia para deter uma anomalia que engolirá seu planeta, ou uma 

pessoa que está voltando para casa ao fim de um dia cansativo e 

precisa fazer o jantar.

Dependendo de como foi sua jornada, dos objetivos concluídos no caminho, teremos 

um resultado final diferente.Requisitos


Você deve criar um programa que faça 5 perguntas para o usuário, e 

dependendo das respostas, exibirá um resultado diferente no final. 

As perguntas devem ser todas de Sim ou Não, e devem ser referentes 

aos objetivos que tiveram que ser cumpridos durante a jornada, por 

exemplo: “Você conseguiu encontrar a Espada Mágica da Chama da Estrela 

do inverno?”, “Você conseguiu consertar os reatores nucleares do motor 

de dobra?”, “Você se lembrou de passar no mercado e comprar óleo?”


No final, o programa deve fazer uma contagem de quantas respostas foram

Sim, e exibir o resultado de acordo com esse número:

0 respostas Sim: Você falha miseravelmente.

1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.

3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, 

mas acaba falhando por pouco.

4 respostas Sim: Depois de muito esforço você conquista seu objetivo, 

embora não de maneira perfeita.

5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos 

serão lembrados por muitas gerações.

O programa deve contar a história inicial (background), fazer as 

perguntas, e ao final, exibir o resultado conforme as situações acima.


*/

//const respostas = respostas.filter(r => r === 'sim');

//console.log(`${respostas2}`);

console.log(`Essa saga aconteceu em meados sec I DC,quando navios Barbaros ,vindos de terras distantes 

se aproximavam do pequeno vilarejo,que estava em sua rota, em buscade riquezas, comidas e escravos.Dentre 

os habitantes da vila, existia um grande guerreiro , que cansado das guerras se refuiava entre os habitantes 

daquele local.Conhecido como Pakato.Esse guerreiro sabia que sozinho poderia conter a invasao barbara,

mas nao queria machucar os habitantes que daquela regiao.Agora é com voce, Pakato, responda 5 perguntas 

e com base em sua resposta ,saberemos se obteve exito ou falhou na missao`);

console.log();

let pergunta1 = '';

while (pergunta1 != 'sim' && pergunta1 != 'nao') {
    pergunta1 = prompt(
        'Os Barbaros cercaram o vilarejo:responda sim ou nao? ',
    ).toLowerCase();

    console.log(typeof pergunta1);
}

console.log();

let pergunta2 = '';

while (pergunta2 != 'sim' && pergunta2 != 'nao') {
    pergunta2 = prompt(
        'Você conseguiu salvar o vilarejo:responda sim ou nao? ',
    ).toLowerCase();
}

let pergunta3 = '';

while (pergunta3 != 'sim' && pergunta3 != 'nao') {
    pergunta3 = prompt(
        'Você conseguiu salvar os habitantes:responda sim ou nao? ',
    ).toLowerCase();
}

let pergunta4 = '';

while (pergunta4 != 'sim' && pergunta4 != 'nao') {
    pergunta4 = prompt(
        'Você atacou os Barbaros:responda sim ou nao? ',
    ).toLowerCase();
}

let pergunta5 = '';

while (pergunta5 != 'sim' && pergunta5 != 'nao') {
    pergunta5 = prompt(
        'Você destruiu os navios Barbaros:responda sim ou nao? ',
    ).toLowerCase();
}

let resposta = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5];

respostas = resposta.filter(function (item) {
    if (item === 'sim') {
        return 'sim';
    }
});

console.log(respostas);

if (respostas.length >= 5) {
    console.log(
        'Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.!',
    );
} else if (respostas.length == 4) {
    console.log(
        'Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.',
    );
} else if (respostas.length == 3) {
    console.log(
        'Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.',
    );
} else if (respostas.length <= 2) {
    console.log('Você falha, mas ainda consegue fugir da situação.');
} else {
    console.log('Você falha miseravelmente.');
}
