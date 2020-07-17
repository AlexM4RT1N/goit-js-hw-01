"use strict";

let credits;
let country = prompt('Укажите имя страны для оформления доставки: ');

country = country !== null ? (country[0].toUpperCase() + country.slice(1).toLowerCase()) : country ;

switch (country) {
  case 'Китай':
    credits = 100;
    break;

  case 'Чили':
    credits = 250;
    break;  
      
  case 'Австралия':
    credits = 170;
    break; 
      
  case 'Индия':
    credits = 80;
    break; 
      
  case 'Ямайка':
    credits = 120;
    break; 
        
  case null:
    alert('Отменено пользователем!');
    break; 

  default:
    alert('В вашей стране доставка не доступна');
    country = 'не доступно';
    break;
}
if (country !== null && country !== 'не доступно') {
  alert(`Доставка в ${country} будет стоить ${credits} кредитов`);
}

