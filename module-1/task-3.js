const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Введите пароль');

if (!message) {
    console.log('Отменено пользователем!');
} else if (ADMIN_PASSWORD === message) {
    console.log('Добро пожаловать!');
} else {
    console.log('Доступ запрещен, неверный пароль!')
}

alert(message);
