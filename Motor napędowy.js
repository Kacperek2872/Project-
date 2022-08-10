const btn = document.querySelector("#Clickerdemo");
const paragraf= document.querySelector("#demo");
let show= true
const paragraf2= document.querySelector("#demov2");
btn.addEventListener ("click",function(){
    // if(show==true){
    //     show=false
    // }
    // else{
    //     show=true
    // } 
    show = !show;
    // paragraf.setAttribute('style','display:'+ show ? 'block' : 'none')
    paragraf.style.display = show ? 'block' : 'none';
    paragraf2.style.display = !show ? 'block' : 'none';
    
});
paragraf2.style.display = 'none';
//Wrzucić wszystko w funkcję i powielić o argument 


