            
   console.log("this the place for our code ") ; 
   const sections = document.querySelectorAll('.light-dark-mode-container') ; 
   const formElement = document.querySelector('.adresse') ;
sections.forEach((item)=> {
 this.addEventListener("click" , () => {
      document.body.classList.toggle('dark') ; 
      formElement.toggle('dark') ; 
 })
}) ; 