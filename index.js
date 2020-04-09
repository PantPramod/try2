const form=document.getElementsByTagName('form');
form[0].style.display="none";
form[1].style.display="none"
form[2].style.display="none"
form[3].style.display="none"

const para=document.getElementsByTagName('li');
console.log(para);



function fun(i){
    form[0].style.display="none";
    form[1].style.display="none"
    form[2].style.display="none"
    form[3].style.display="none"
    para[0].style.color="magenta"
    para[1].style.color="green"
    para[2].style.color="red"
    para[3].style.color="rgb(17, 79, 104)"
    para[0].style.color="black"
    if(i==0){
    form[0].style.display="block";
    para[0].style.color="yellow";
    }
    if(i==1){
    form[1].style.display="block";
    para[1].style.color="yellow"
    }
    if(i==2){
    form[2].style.display="block";
    para[2].style.color="yellow" 
    }
    if(i==3){
    form[3].style.display="block";
    para[3].style.color="yellow"
    }
}

