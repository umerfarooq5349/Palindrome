let text_input=document.getElementById('text-input')
const check_btn=document.getElementById('check-btn')

let result=document.getElementById('result')

check_btn.addEventListener('click',function (){

    if (text_input.value===''){
        window.alert('Please input a value')
    }
    else{
        let textInput=text_input.value

        textInput=textInput.replace(/[^a-z0-9]/g, "")
        if(textInput===textInput.split('').reverse().join('')){
            result.innerText=textInput+ ' is a palindrome'
        }
        else{
            result.innerText=textInput+ ' is not a palindrome'
        }
    }

})
