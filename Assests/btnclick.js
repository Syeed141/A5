console.log("Hello")








// card 1


document.getElementById('b1').addEventListener('click', function (event) {


    event.preventDefault();

    const InputValue = getValueFromForm('first-card-input');


    const CurrentCardbalance = getValueFromText('first-card-balance');


    const navbarBalancee = getValueFromText('main-balancee');

    const result = cardBalance(InputValue, CurrentCardbalance, 'first-card-balance');
    MainBalance(InputValue, navbarBalancee, 'main-balancee');

    console.log('result : ', result);

    console.log(document.getElementById('mod_1')); 


    if (result === 1){

document.getElementById('mod_1').classList.remove('hidden');



    }

    // transaction history
    const div = document.createElement('div');

    const date = new Date();
    const formattedDate = `Date : ${date.toDateString()} ${date.toTimeString()}`;


    div.classList.add(
        'w-full', 'h-[8.5rem]', 'p-4', 'rounded-lg',
        'bg-white', 'shadow-md', 'border-2', 'border-solid',
        'lexend', 'text-center', 'font-bold'
    );


    div.innerHTML = ` 

<h3 > ${InputValue} Taka is Donated for the flood relief at Feni, Bangladesh    </h3>

<p class = "font-light" >${formattedDate} </p>

`

    document.getElementById('footer').appendChild(div);




});


// second card 

document.getElementById('b2').addEventListener('click', function (event) {


    event.preventDefault();

    const InputValue = getValueFromForm('second-card-input');
    console.log(InputValue);

    const CurrentCardbalance = getValueFromText('second-card-balance');
    console.log(CurrentCardbalance);

    const navbarBalancee = getValueFromText('main-balancee');
    console.log(navbarBalancee);




    const result = cardBalance(InputValue, CurrentCardbalance, 'second-card-balance');
    MainBalance(InputValue, navbarBalancee, 'main-balancee');

    if (result === 1){

        document.getElementById('mod_1').classList.remove('hidden');
        
        
        
            }


    // Transaction History

    const div = document.createElement('div');

    const date = new Date();
    const formattedDate = `Date : ${date.toDateString()} ${date.toTimeString()}`;


    div.classList.add(
        'w-full', 'h-[8.5rem]', 'p-4', 'rounded-lg',
        'bg-white', 'shadow-md', 'border-2', 'border-solid',
        'lexend', 'text-center', 'font-bold'
    );


    div.innerHTML = ` 

<h3 > ${InputValue} Taka is Donated for the flood at Noakhali, Bangladesh    </h3>

<p class = "font-light" >${formattedDate} </p>

`

    document.getElementById('footer').appendChild(div);







});



// third card

document.getElementById('b3').addEventListener('click', function (event) {


    event.preventDefault();

    const InputValue = getValueFromForm('third-card-input');
    console.log(InputValue);

    const CurrentCardbalance = getValueFromText('third-card-balance');
    console.log(CurrentCardbalance);

    const navbarBalancee = getValueFromText('main-balancee');
    console.log(navbarBalancee);




    const result = cardBalance(InputValue, CurrentCardbalance, 'third-card-balance');
    MainBalance(InputValue, navbarBalancee, 'main-balancee');

    if (result === 1){

        document.getElementById('mod_1').classList.remove('hidden');
        
        
        
            }


    // Transaction History

    const div = document.createElement('div');

    const date = new Date();
    const formattedDate = `Date : ${date.toDateString()} ${date.toTimeString()}`;


    div.classList.add(
        'w-full', 'h-[8.5rem]', 'p-4', 'rounded-lg',
        'bg-white', 'shadow-md', 'border-2', 'border-solid',
        'lexend', 'text-center', 'font-bold'
    );


    div.innerHTML = ` 

<h3 > ${InputValue} Taka is Donated for the injured in the quota movement, Bangladesh </h3>

<p class = "font-light" >${formattedDate} </p>

`

    document.getElementById('footer').appendChild(div);




});



// Buttons 

// History Button
document.getElementById('HistoryButton').addEventListener('click', function (event) {



  

    document.getElementById('DB').classList.remove('bg-green-400');


    document.getElementById('HistoryButton').classList.add('bg-green-400');

    document.getElementById('main-sec').classList.add('hidden');
    
    document.getElementById('footer').classList.remove('hidden');






});


// Donation Button 


document.getElementById('DB').addEventListener('click',function(event){




    document.getElementById('DB').classList.add('bg-green-400');


    document.getElementById('HistoryButton').classList.remove('bg-green-400');

    document.getElementById('main-sec').classList.remove('hidden');
    
    document.getElementById('footer').classList.add('hidden');




});



// Modal close btn 

document.getElementById('mod_close').addEventListener('click',function(event){

event.preventDefault();

document.getElementById('mod_1').classList.add('hidden');




})