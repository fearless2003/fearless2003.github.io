function postcomment(){
alert("clicked")
}

function handleSubmit(event) {
  event.preventDefault();

  let form = event.target;
  let email = form.email.value;
let comment= document.querySelector("#comment").value
  let list = document.querySelector('#comments');
  list.innerHTML += `<li><strong>${email}</strong>: ${comment}</li>`;

  form.reset();
  form.email.focus();
}




let form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
