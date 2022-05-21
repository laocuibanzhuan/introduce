
var body = document.querySelector('#body')

console.log(body);
window.addEventListener('mousewheel',function(e){
    if (e.deltaY>0) {
        body.style.backgroundImage = 'none'
        //开发中
        // body.style.backgroundColor = 'red'
    }
    else{
        body.style.backgroundImage = 'none'
        // body.style.backgroundColor = 'blue'
    }
})
