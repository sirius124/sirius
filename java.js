
document.querySelector('.b-6').addEventListener('click', () => {
    let data = document.querySelector('.i-4').value;
    document.querySelector('.out-4').innerHTML = data;
});

document.querySelector('.b-6').addEventListener('click', () => {
    let data = document.querySelector('.i-1').value;
	document.querySelector('.out-1').innerHTML += data;
   
});

document.querySelector('.b-6').addEventListener('click', () => {
     let data = document.querySelector('.i-7').value;
     if (document.querySelector('.i-7').checked) {
        document.querySelector('.out-7').innerHTML = data;
     }
     else {
         document.querySelector('.out-7').innerHTML = '';
     }
    
});

document.querySelector('.b-6').addEventListener('click', () => {
     let data = document.querySelector('.i-8').value;
     if (document.querySelector('.i-8').checked) {
        document.querySelector('.out-8').innerHTML = data;
     }
     else {
         document.querySelector('.out-8').innerHTML = '';
     }
    
});

document.querySelector('.b-6').addEventListener('click', () => {
     let data = document.querySelector('.i-9').value;
     if (document.querySelector('.i-9').checked) {
        document.querySelector('.out-9').innerHTML = data;
     }
     else {
         document.querySelector('.out-9').innerHTML = '';
     }
    
});

document.querySelector('.b-6').addEventListener('click', () => {
     let data = document.querySelector('.i-91').value;
     if (document.querySelector('.i-91').checked) {
        document.querySelector('.out-91').innerHTML = data;
     }
     else {
         document.querySelector('.out-91').innerHTML = '';
     }
    
});

document.querySelector('.b-6').addEventListener('click', () => {
     let data = document.querySelector('.i-10').value;
     if (document.querySelector('.i-10').checked) {
        document.querySelector('.out-10').innerHTML = data;
     }
     else {
         document.querySelector('.out-10').innerHTML = '';
     }
    
});

document.querySelector('.b-6').addEventListener('click', () => {
     let data = document.querySelector('.i-11').value;
     if (document.querySelector('.i-11').checked) {
        document.querySelector('.out-11').innerHTML = data;
     }
     else {
         document.querySelector('.out-11').innerHTML = '';
     }
    
});

document.querySelector('.b-6').addEventListener('click', () => {
     let data = document.querySelector('.i-12').value;
     if (document.querySelector('.i-12').checked) {
        document.querySelector('.out-12').innerHTML = data;
     }
     else {
         document.querySelector('.out-12').innerHTML = '';
     }
    
});

document.querySelector('.b-6').addEventListener('click', () => {
     let data = document.querySelector('.i-13').value;
     if (document.querySelector('.i-13').checked) {
        document.querySelector('.out-13').innerHTML = data;
     }
     else {
         document.querySelector('.out-13').innerHTML = '';
     }
    
});

document.querySelector('.b-6').addEventListener('click', () => {
     let data = document.querySelector('.i-131').value;
     if (document.querySelector('.i-131').checked) {
        document.querySelector('.out-131').innerHTML = data;
     }
     else {
         document.querySelector('.out-131').innerHTML = '';
     }
    
});

document.querySelector('.b-6').addEventListener('click', () => {
     let data = document.querySelector('.i-132').value;
     if (document.querySelector('.i-132').checked) {
        document.querySelector('.out-132').innerHTML = data;
     }
     else {
         document.querySelector('.out-132').innerHTML = '';
     }
    
});

function calc()
            {
                var n1 = parseFloat(document.getElementById('n1').value);
                var n2 = parseFloat(document.getElementById('n2').value);
                
                var oper = document.getElementById('operators').value;

                if(oper === '-')
                {3
                    document.getElementById('result').value = n1-n2;
                }
            }

clickboardInput.onclick = () => {
    navigator.clipboard.writeText(clickboardInput.value)
    successMessage.classList.add('active')
    setTimeout(() => successMessage.classList.remove('active'), 2000)
}

