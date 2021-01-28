const add = document.getElementsByClassName('Add');
const expend = document.getElementsByClassName('Expend');
const type = document.getElementById('type');
const enter = document.querySelector(".enter");
const desc = document.querySelector('.description');
const amount = document.querySelector('.amount');
const ul =document.querySelector('.ul');

type.addEventListener('click',function(){
    console.log(type.value)
})
  


enter.addEventListener('click',function(){
    const abc = (desc.value) + " " + (amount.value);

    list = document.createElement('li');
    list.appendChild(document.createTextNode(abc));
    ul.appendChild(list);

})


