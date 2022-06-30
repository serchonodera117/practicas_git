let asterisco = " *";
let ind = " *"
let espacios = "     ";
let renglon;
let j = 5
function a(){
    for(i = 0; i < 5; i++){
        renglon ="";
        renglon += asterisco;
        asterisco += ind;
        var arr = espacios.split('')
        arr.splice(j,i)
        console.log(arr.join('') + renglon);
        j--
    }
} 
a()
