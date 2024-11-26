let btn_text = document.querySelector('#btn_text');

btn_text.addEventListener('click', function(){

    let input_text = document.querySelector('#input_text').value;
    let show_text = document.querySelector('#show_text');
    
    show_text.innerHTML = input_text.toUpperCase();
    show_text.style.color = 'red';
    console.log(show_text);
    

});


let btn_text1 = document.querySelector('#btn_text1');

btn_text1.addEventListener('click', function(){

    let input_text1 = document.querySelector('#input_text1').value;
    let show_text1 = document.querySelector('#show_text1');
    
    show_text1.innerHTML = input_text1.toLowerCase();
    show_text1.style.color = 'red';
    console.log(show_text1);
});


let btn_text2 = document.querySelector('#btn_text2');

btn_text2.addEventListener('click', function(){

    let input_text2 = document.querySelector('#input_text2').value;
    let show_text2 = document.querySelector('#show_text2');
    
    show_text2.innerHTML = input_text2.length;
    
    show_text2.style.color = 'red';
    console.log(show_text2);
});


let btn_text3 = document.querySelector('#btn_text3');

btn_text3.addEventListener('click', function(){

    let input_text3 = document.querySelector('#input_text3').value;
    let show_text3 = document.querySelector('#show_text3');
    
    show_text3.innerHTML = input_text3.slice();
    show_text3.style.color = 'red';
    console.log(show_text3);
});
