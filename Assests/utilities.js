console.log("Hello")



function getValueFromForm (id) {


const val = parseFloat(document.getElementById(id).value);


return val;





}


function getValueFromText (id) {

    const vari = parseFloat(document.getElementById(id).innerText);

    console.log(vari)

    return vari;
    
 


}


// main balance minus

function MainBalance (Input_value,Main_value,id) {

    let current_main_balance ;

    if(Input_value >= 0) {

        current_main_balance = Main_value - Input_value;

    }


    

    if(current_main_balance >= 0) {

        document.getElementById(id).innerText = current_main_balance;
        

    } 

    else if(current_main_balance < 0){

        alert("Insufficient Main Balance")
    }



    return

}




// card balance plus 

function cardBalance(Input_value,Main_card_balance,id){




const NewMainCardBalance = Main_card_balance + Input_value;

if(Input_value > 0 && Input_value <= 5500) {


   document.getElementById(id).innerText = NewMainCardBalance ;

return 1;
}

else {


    alert("Invalid amount added")

    return 0;
    
}


}