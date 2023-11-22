const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
 event.preventDefault();

 const weight = document.getElementById('weight'),Value;
 const heigtht = document.getElementById('heigtht'),Value;

 const bmi =(weight / (heigtht * heigtht)).toFixed(2);

 const Value = document.getElementById('value');
 let description = '';
  
 value.classList.add('attention');

 document.getElementById('infos').classList.remove('hidden');

 if(bmi< 18.5){
    description = 'Cuidado você está abaixo do peso!' 
 }else if ( bmi >= 18.5 && bmi <=25){
  description = "Você está no peso ideal"
  value.classList.remove('attention');
  value.classList.add('normal');
 }else if ( bmi > 25 && bmi <=30){
  description = "Cuidado! você está com sobrepeso!";
}else if ( bmi > 30 && bmi <=35){
description = "Cuidado! você está com obesidade moderada!";
}else{
description = "Cuidado! Você está com obesidade morbida!";
}
 value.textContent =bmi.replace(',', ','),
 document.getElementById('description').textContent = description

});