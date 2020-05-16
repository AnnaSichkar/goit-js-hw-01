let country = prompt('Укажите страну доставки');
if (country) {
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

}
