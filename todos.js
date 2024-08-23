const form = document.querySelector('.add');
const icon = document.querySelector('i');
const ul = document.querySelector('ul');
const usersearch = document.querySelector('#search');
const adderror = document.createElement('p');
adderror.className = 'error-message';
document.body.appendChild(adderror);



const templateFunc= todo =>{
    const html =
        `<li class="list-group-item d-flex justify-content-between align-items-center py-4">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>`
    ul.innerHTML+=html
}

form.addEventListener('submit',e=>{
e.preventDefault();
     todo = form.add.value.trim();
    if(todo.length){
    templateFunc(todo);
    form.reset()

    }

})
ul.addEventListener('click', e=>{
    if(e.target.tagName === 'I'){
    const todoItem = e.target.closest('li');
    todoItem.remove();
    }

})
//search//

document.addEventListener('DOMContentLoaded', () => {
    Array.from(ul.children).forEach(li => {
        li.classList.remove('nomatch');
    });
});

const filteredSearch = (input)=>{
    let hasMatch= false;
    Array.from(ul.children)
    .forEach(li=>{
        if(!li.textContent.toLowerCase().includes(input)){
            li.classList.add('nomatch');
            
        }
        else{
            li.classList.remove('nomatch');
             hasMatch= true;
        }
        if( !hasMatch && input !== ''){
            adderror.textContent='Nothing found budso'
        }
        else{
            adderror.textContent=''
        }
    })
}
// filter

//keyup event//
usersearch.addEventListener('keyup', ()=>{

    const input = usersearch.value.trim().toLowerCase();
    filteredSearch(input);
   
  
})

