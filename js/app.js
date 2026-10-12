document.addEventListener('DOMContentLoaded',()=>{
  const year=document.querySelectorAll('[data-year]');
  year.forEach(el=>el.textContent=new Date().getFullYear());

  const form=document.getElementById('contactForm');
  const success=document.getElementById('success');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      if(!form.checkValidity()){
        e.stopPropagation();
        form.classList.add('was-validated');
        success?.classList.add('d-none');
        return;
      }
      form.classList.add('was-validated');
      success?.classList.remove('d-none');
      success?.focus();
      form.reset();
      form.classList.remove('was-validated');
    });
  }
});
