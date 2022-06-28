var Array = []

function armazenar_nomes(){

    for( var x  = 1; x <= 5; x++){
        var input = document.getElementById('inp' + x);
        Array[x - 1] = input.value;
    }


    const valor1 = document.getElementById('inp1');
    const valor2 = document.getElementById('inp2');
    const valor3 = document.getElementById('inp3');
    const valor4 = document.getElementById('inp4');
    const valor5 = document.getElementById('inp5');
    valor1.value = Array[4];
    valor2.value = Array[3];
    valor3.value = Array[2];
    valor4.value = Array[1];
    valor5.value = Array[0];
}
