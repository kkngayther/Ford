var suv_cross = function(){
    if (document.querySelector('.suv_cross').style.display === 'none'){
        document.querySelector('.suv_cross').style.display = 'block';   
        document.querySelector('.truck').style.display = 'none';
        document.querySelector('.electrified').style.display = 'none';
        document.querySelector('.car').style.display = 'none'
    }
    else{
        document.querySelector('.suv_cross').style.display = 'none'
    };
}
var truck = function(){
    if (document.querySelector('.truck').style.display === 'none'){
        document.querySelector('.truck').style.display = 'block';   
        document.querySelector('.electrified').style.display = 'none';
        document.querySelector('.car').style.display = 'none';
        document.querySelector('.suv_cross').style.display = 'none'
    }
    else{
        document.querySelector('.truck').style.display = 'none'
    };
}
var electrified = function(){
    if (document.querySelector('.electrified').style.display === 'none'){
        document.querySelector('.electrified').style.display = 'block'; 
        document.querySelector('.truck').style.display = 'none'  ;
        document.querySelector('.car').style.display = 'none';
        document.querySelector('.suv_cross').style.display = 'none';
    }
    else{
        document.querySelector('.electrified').style.display = 'none'
    };
}
var car = function(){
    if (document.querySelector('.car').style.display === 'none'){
        document.querySelector('.car').style.display = 'block';   
        document.querySelector('.truck').style.display = 'none';
        document.querySelector('.electrified').style.display = 'none';
        document.querySelector('.suv_cross').style.display = 'none'
    }
    else{
        document.querySelector('.car').style.display = 'none';
    };
}
document.querySelector('.disclosures').onclick = function(){
    if (document.querySelector('.recall__text').style.display === 'none'){
        document.querySelector('.recall__text').style.display = 'block';
    }
    else{
        document.querySelector('.recall__text').style.display = 'none';
    }
}