init();

function init(){

    fetch("/",{
        method : 'post',
    }).then((response) => response.json())
    .then((data) => console.log(data))
}