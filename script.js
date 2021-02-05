const add = document.getElementsByClassName('Add');
const expend = document.getElementsByClassName('Expend');
const type = document.getElementById('type');
const enter = document.querySelector(".enter");
const description = document.querySelector('.description');
const amount = document.querySelector('.amount');
const ul1 =document.querySelector('.ul1');
const ul2 =document.querySelector('.ul2');
const budget = document.querySelector('.budget');

type.addEventListener('click',function(){
    console.log(type.value)
})
  

// click event that records savings and expending
enter.addEventListener('click',function(){
    const descVal = (description.value);
    const amountVal = (amount.value)


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
        list.appendChild(document.createTextNode("time" + descVal));
        list.classList.toggle("add");
        ul1.appendChild(list);
        
        list = document.createElement('li');
        list.appendChild(document.createTextNode('+ ' + amountVal));
        list.classList.toggle("add");
        ul2.appendChild(list);}

// create a li element that subtract its value to the user money
    else if (type.value == 'Expend'){
        budget.textContent = (Number(budget.textContent) - Number(amountVal));

        list = document.createElement('li');
        list.appendChild(document.createTextNode("time " + descVal));
        list.classList.toggle("expend");
        ul1.appendChild(list);

        list = document.createElement('li');
        list.appendChild(document.createTextNode("- " + amountVal));
        list.classList.toggle("expend");
        ul2.appendChild(list);
        }
  
})







