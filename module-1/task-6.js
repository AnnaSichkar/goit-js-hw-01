let input;
let total = 0;

while (true) {
    let input = prompt('Введите число');
    
    if (!input) {
       alert(`Общая сумма чисел равна ${total}`);
        break;
    }
    
    input = Number(input);
    total += input; 
}


