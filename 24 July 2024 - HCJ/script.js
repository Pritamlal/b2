const scriptURL = 'https://script.google.com/macros/s/AKfycbz3FccdWq9UvuIrTeEVWC_uIbMFEUIMa7orFC69AClgEOnYtr-OaIDQNiCuiH_TV8QlgQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit',e=>{
    e.preventDefault()
    fetch(scriptURL,{method:'POST',body:new FormData(form)})
    .then(response => alert("Thank You!your form is sumbitted succesfully"))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error!',error.message))
})