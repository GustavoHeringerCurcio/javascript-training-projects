let valores = [];

function add() {
  const input = document.getElementById('input');
  const list = document.getElementById('list');
  const results = document.getElementById('results')

  // Transforma o valor primitivo de String para Number.
  // Armazenando o valor do input.

  const numero = Number(input.value); 

    if(input.value.trim() === '') {
        alert('[ERRO!!]Type a number')
        return;
    }
    if(numero < 1 || numero > 100) {
        alert('ERRO! Please Try a number between 1 - 100')
        return;
    }
    if (valores.includes(numero)) {
        alert('Duplicate number')
        return;
    }

    valores.push(numero);

    const option = new Option(`Value ${numero} added`);
    list.appendChild(option);

    input.value = '';

    results.innerHTML += `teste ${numero}`

}

function finish() {
    if (valores.length === 0) {
        alert('No numbers were added.');
        return;
    }

    // to understand: let valores [2, 10, 20, 50] .length = 0 1 2 3

    let maior = valores[0]; //maior = 2
                            //index = 1

    for (let index = 1; index < valores.length; index = index + 1) {
        if (valores[index] > maior){
            maior = valores[index];
        }
    }

    let menor = valores[0]

    for (let index = 1; index < valores.length; index = index + 1) {
        if (valores[index] < menor) {
            menor = valores[index];
        }
    }

    let soma = 0

    for (let index = 0; index < valores.length; index = index + 1) {
        soma = soma + valores[index];
    }

    let media = soma / valores.length;

    

    let res = document.getElementById('res');
    
    res.innerHTML = `
        <p>Total numbers registered: <p class="redcss">${valores.length}</p></p>
        <p>Sum of numbers registered: <p class="redcss">${soma}</p></p>
        <p>Average value: <p class="redcss">${media}</p></p>
        <p>Highest number registered: <p class="redcss">${maior}</p></p>
        <p>Lowest Number registered: <p class="redcss">${menor}</p></p>`;


}