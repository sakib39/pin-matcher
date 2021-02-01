document.getElementById('generate-btn').addEventListener('click',function(){
    let random = generateRandom();
    document.getElementById('match').style.display='none';
    document.getElementById('not-match').style.display='none';
    document.getElementById('random-pin-screen').value = random;
    // console.log(random);
})

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click',function(){
        document.querySelector('#display').value += this.innerHTML;
    })
})

document.getElementById('clear').addEventListener('click',function(){
    document.querySelector('#display').value = '';
})

document.getElementById('backspace').addEventListener('click',function(){
    let displayNum = document.querySelector('#display').value;
    let array = (document.querySelector('#display').value).split('');
    array.splice(-1,1);
    document.querySelector('#display').value = array.join("");
})

document.getElementById('submit-btn').addEventListener('click',function(){
    let random = document.getElementById('random-pin-screen').value;
    let typedNumber = document.querySelector('#display').value;
    if(random == typedNumber){
        document.getElementById('match').style.display='block';
    }else{
        document.getElementById('not-match').style.display='block'; 
    }
    document.querySelector('#display').value = '';
    document.getElementById('random-pin-screen').value = '';
})



function generateRandom(){
    let random = (Math.random()*10000+'').split('.')[0];
    return random;
}