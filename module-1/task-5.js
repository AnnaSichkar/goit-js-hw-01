let country = prompt('Укажите страну доставки');
let normalizedInput = country.toLowerCase();
let price;

switch (normalizedInput) {
    case 'китай': {
        country = 'Китай';
        price = 100;
        break;
    }

    case 'чили': {
        country = 'Чили';
        price = 250;
        break;
    }

    case 'австралия': {
        country = 'Австралию';
        price = 170;
        break;
    }

    case 'индия': {
        country = 'Индию';
        price = 80;
        break;
    }

    case 'ямайка': {
        country = 'Ямайку';
        price = 120;
        break;
    }

    default:
        alert('В вашей стране доставка не доступна.')
        
}

console.log(`Доставка в ${country} будет стоить ${price} кредитов`);


// const textInputRef = document.querySelector('input[name="text"]');

// const buttonRef = document.querySelector('button');

// buttonRef.addEventListener('click', function() {
//     let normalizedInput = textInputRef.toLowerCase();

//     switch (normalizedInput) {
//             case 'китай': {
//                 country = 'Китай';
//                 price = 100;
//                 break;
//             }
        
//             case 'чили': {
//                 country = 'Чили';
//                 price = 250;
//                 break;
//             }
        
//             case 'австралия': {
//                 country = 'Австралию';
//                 price = 170;
//                 break;
//             }
        
//             case 'индия': {
//                 country = 'Индию';
//                 price = 80;
//                 break;
//             }
        
//             case 'ямайка': {
//                 country = 'Ямайку';
//                 price = 120;
//                 break;
//             }
        
//             default:
//                 alert('В вашей стране доставка не доступна.')
//         }
        
//         console.log(`Доставка в ${country} будет стоить ${price} кредитов`);

// });