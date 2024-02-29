let computerNumber = 0;
let attemps = 0;

function init() {
    attemps = 0;
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
}

function verifyNumber() {
    let bet = document.getElementById('bet').value;

    if(bet > 100 || bet < 1)
    {
        alert('Aposta Inválida');
        return;
    }

    if(bet > computerNumber)
    {
        attemps++;
        alert('O número para ser encontrado é MENOR!');
    }
    else if (bet < computerNumber)
    {
        attemps++;
        alert('O número para ser encontrado é MAIOR!');
    }
    else
    {
        alert('Parabéns você ACERTOU! Com '+attemps+' erros');
        init();
    }
}