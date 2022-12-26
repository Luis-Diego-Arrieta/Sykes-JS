const output = document.querySelector('.output');
//the first element in the document with the class "output" is returned

const userVal = document.querySelector('input[name="userName"]');
//The method returns the first element in the DOM that matches the provided selector. If no element matches the selector, null is returned.

const btn = document.querySelector('button');
userVal.style.borderColor = '#333';
btn.onclick = ()=>{
   
   //se realiza validacion, si el valor ingresado es mayor a 3 caracteres, se procede con el coding block
    if(userVal.value.length > 3){
       
       //retorna el valor contenido en la constante userVal, que ha sido leido del DOM con un query selector
       const message = `Hello ${userVal.value}`;

       //muestra el contenido de la constante message
       output.textContent =  message;
       
       // is commonly used with JavaScript to hide and show elements without deleting and recreating them.
       userVal.style.display = 'none';
      
       //display:none removes the element from the document. It does not take up any space
       btn.style.display = 'none';
   }

   //si el valor ingresado no es mayor a 3 caracteres ingresa al coding block else e indica el error al usuario
   else{
       output.textContent = 'The input should have more than three characters';

       //marca el borde del cuadro en rojo
       userVal.style.borderColor = 'red';
   }
}