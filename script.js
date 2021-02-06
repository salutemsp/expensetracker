const add = document.getElementsByClassName('Add');
const expend = document.getElementsByClassName('Expend');
const type = document.getElementById('type');
const enter = document.querySelector(".enter");
const description = document.querySelector('.description');
const amount = document.querySelector('.amount');
const dateli =document.querySelector('.dateLi');
const info =document.querySelector('.info');
const amountLi =document.querySelector('.amountLi');
const budget = document.querySelector('.budget');
const date = document.querySelector('.date');


// responsible for the date
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
date.innerHTML = today
dateNow = date.innerHTML



// click event that records savings and expending
enter.addEventListener('click',function(){
    const descVal = (description.value);
    const amountVal = (amount.value);
    const clear = (description.value = (''), amount.value = (''));


// check if the user has inputed a value if not then dont proceed
    if (descVal.length <= 0 || amountVal.length <= 0 ){
        console.log('working?')
    }
// check if value of the input is less than your total money
    else if(type.value == 'Expend' && Number(amountVal) > Number(budget.textContent)){
        console.log('youve got no money')

        }
// create a li element that add its value to the user money
   else if(type.value == 'Add'){

     budget.textContent = (Number(budget.textContent) + Number(amountVal));
        list = document.createElement('li');
        list.appendChild(document.createTextNode(dateNow));
        list.classList.toggle("add");
        dateli.appendChild(list);
        
        list = document.createElement('li');
        list.appendChild(document.createTextNode(descVal));
        list.classList.toggle("add");
        info.appendChild(list);

        list = document.createElement('li');
        list.appendChild(document.createTextNode('+ ' + amountVal));
        list.classList.toggle("add");
        amountLi.appendChild(list);
        
    }

// create a li element that subtract its value to the user money
    else if (type.value == 'Expend'){
        budget.textContent = (Number(budget.textContent) - Number(amountVal));

        list = document.createElement('li');
        list.appendChild(document.createTextNode(dateNow));
        list.classList.toggle("expend");
        dateli.appendChild(list);
        
        list = document.createElement('li');
        list.appendChild(document.createTextNode(descVal));
        list.classList.toggle("expend");
        info.appendChild(list);

        list = document.createElement('li');
        list.appendChild(document.createTextNode('- ' + amountVal));
        list.classList.toggle("expend");
        amountLi.appendChild(list);}
})









