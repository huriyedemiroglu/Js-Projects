let count = document.getElementById('count');
let lucButton = document.getElementById('lucky_button');
let numbers = document.getElementById('numbers');

let counter = 0;

lucButton.addEventListener('click',()=>{
    
    count.addEventListener('mouseover',()=>{
        window.location.reload(false);
    });
    

    while (count.value > counter ) {

        if (count.value > 8) {
            window.location.reload(false);
            break;
        }
        
        let luckyNumbers = [];

        let firstNum = Math.ceil(Math.random() * 90);
        luckyNumbers.push(firstNum);
        let secondNum = Math.ceil(Math.random() * 90);
        luckyNumbers.push(secondNum);
        let thirdNum = Math.ceil(Math.random() * 90);
        luckyNumbers.push(thirdNum);
        let fourthNum = Math.ceil(Math.random() * 90);
        luckyNumbers.push(fourthNum);
        let fifthNum = Math.ceil(Math.random() * 90);
        luckyNumbers.push(fifthNum);
        let sixthNum = Math.ceil(Math.random() * 90);
        luckyNumbers.push(sixthNum);
        
        luckyNumbers.sort(function(a,b){ return a - b });
    
        let jokerNum ;
        while (luckyNumbers.length == 6) {
            jokerNum = (Math.ceil(Math.random() * 90));
            if (luckyNumbers.includes(jokerNum) != true) {
                luckyNumbers.push(jokerNum);
            }
            if( luckyNumbers.length == 7){
                break;
            }
        }
        let superStarNum = Math.ceil(Math.random() * 90);
        luckyNumbers.push(superStarNum);
    
        let result = `${luckyNumbers[0]}-${luckyNumbers[1]}-${luckyNumbers[2]}-${luckyNumbers[3]}-${luckyNumbers[4]}-${luckyNumbers[5]} | ${luckyNumbers[6]} | ${luckyNumbers[7]}`
    
        let p = document.createElement('p');
        let hr = document.createElement('hr');
    
        p.innerText = result;
        
        numbers.appendChild(p);
        numbers.append(hr);

        counter ++;

        if (count.value == counter) {
            break;
        }
      
    }
});


