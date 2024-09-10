var table = document.querySelector('.table');

var result = document.querySelector('.result');

for (var i = 1; i <= 10; i++) {
 var tr = document.createElement('tr');
  
  for (var x = 1; x <= 10; x++) {
    var td = document.createElement('td');
  
     for (var y = 1; y <= 1; y++) {
    var button = document.createElement('button'); 
   
   td.appendChild(button);
       button.classList.add('button')
 }
  tr.appendChild(td);
           td.classList.add('td')
}
  table.appendChild(tr);
             tr.classList.add('tr')
}

var buttons = document.querySelectorAll('.button');

for (var u = 0; u <= buttons.length - 1; u++) {
buttons[u].value = u + 1;
  buttons[u].textContent = u + 1;
  buttons[u].id = u + 1;
}

let massiveSet = new Set();

let randomNumbers = function () {

  for (var a = 0; a <= 9; a++) {
  massiveSet.add(Math.round(Math.random() * 100));
  }
  
  while (massiveSet.length < 9) {
    massiveSet.add(Math.round(Math.random() * 100));
  }
  
  console.log(massiveSet)
 return massiveSet;
};

let massive = Array.from(randomNumbers());
console.log(massive);

  let choosedNumbersMassive = [];
for (let elem of buttons) {

elem.addEventListener('click', function() {
 

  
  if (+this.value == massive[0] || +this.value == massive[1] || +this.value == massive[2] || +this.value == massive[3] || +this.value == massive[4] || +this.value == massive[5] || +this.value == massive[6] || +this.value == massive[7] || +this.value == massive[8] || +this.value == massive[9]) {
 
    choosedNumbersMassive.push(+this.value)
    choosedNumbersMassive.sort(function (a,b) {
     return a - b})
    /*
  result.innerHTML = 'Молодцы';
  */
    this.classList.add('green');
 } else {
/*
    result.innerHTML = 'Попробуйте ещё раз';
    */
   this.classList.add('red')
 }
 
    console.log(choosedNumbersMassive);

  });
}

var timer = document.querySelector('.timer');

timer.addEventListener('click', function () {
 let timerId = setInterval (function () {

  timer.textContent = 0;

   
   timer.textContent =  timer.value++
   
    if (timer.textContent >= 61) {
      clearInterval(timerId);
      timer.textContent = "Время закончилось";
    }
   
   /*
      let oneNumber = 0;
      
      while (oneNumber <= 7) {
      if (choosedNumbersMassive[oneNumber] === massive[oneNumber]) {
         clearInterval(timerId)
         timer.textContent = "Молодец";
      }
      }
    
*/
  /*
     for (let oneNumber = 0; oneNumber < choosedNumbersMassive.length; oneNumber++) {
       /*
            if (choosedNumbersMassive[oneNumber] === massive[oneNumber]) 
            
       if (choosedNumbersMassive.includes(massive[oneNumber])) 
      */

 if (choosedNumbersMassive[0] == massive[0] && choosedNumbersMassive[1] == massive[1] && choosedNumbersMassive[2] == massive[2] && choosedNumbersMassive[3] == massive[3] && choosedNumbersMassive[4] == massive[4] && choosedNumbersMassive[5] == massive[5] && choosedNumbersMassive[6] == massive[6] && choosedNumbersMassive[7] == massive[7] && choosedNumbersMassive[8] == massive[8]  && choosedNumbersMassive[9] == massive[9]) {
        clearInterval(timerId);
                timer.textContent = "Вы выиграли";
 
   
        }
  }, 1000);

}, {once: true})