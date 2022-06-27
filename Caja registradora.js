function checkCashRegister(price, cash, cid) {
    let change = cash - price;

    // Variables
    let penny = 0;
    let nickel = 0;
    let dime = 0;
    let quarter = 0;
    let one = 0;
    let five = 0;
    let ten = 0;
    let twenty = 0;
    let oneHundred = 0;
    // resultados
    let pennyResult = 0;
    let nickelResult = 0;
    let dimeResult = 0;
    let quarterResult = 0;
    let oneResult = 0;
    let fiveResult = 0;
    let tenResult = 0;
    let twentyResult = 0;
    let oneHundredResult = 0;
     
    let resultado = {
        status: "",
        change: []
    }

    for(let i = 0; i < cid.length; i++){
        switch(cid[i][0]){
            case "PENNY":
                penny += cid[i][1];
                break
            case "NICKEL":
                nickel += cid[i][1];
                break
            case "DIME":
                dime += cid[i][1];
                break
            case "QUARTER":
                quarter += cid[i][1];
                break
            case "ONE":
                one += cid[i][1];
                break
            case "FIVE":
                five += cid[i][1];
                break        
            case "TEN":
                ten += cid[i][1];
                break
            case "TWENTY":
                twenty += cid[i][1];
                break                
            case "ONE HUNDRED":
                oneHundred += cid[i][1];
                break        
        }
    }

    // Solución.
    while(change > 0){

        // 100 dolares.
        if((change - 100) >= 0 && (oneHundred / 100) > 0){         
            change -= 100;
            change = change.toFixed(2);
            oneHundred -= 100;
            //oneHundred = oneHundred.toFixed(2);
            oneHundredResult += 100;
            //oneHundred = oneHundred.toFixed(2);
        
        // 20 dolares.    
        }else if((change - 20) >= 0 && (twenty / 20) > 0){
            change -= 20;
            change = change.toFixed(2);
            twenty -= 20;
            //twenty = twenty.toFixed(2);
            twentyResult += 20;
            //twentyResult = twentyResult.toFixed(2);
            
        // 10 dolares.
        }else if((change - 10) >= 0 && (ten / 10) > 0){
            change -= 10;
            change = change.toFixed(2);
            ten -= 10;
            //ten = ten.toFixed(2);
            tenResult += 10;    
            //tenResult = tenResult.toFixed(2);
        
        // 5 dolares    
        }else if((change - 5) >= 0 && (five / 5) > 0){
            change -= 5;
            change = change.toFixed(2);
            five -= 5;
            //five = five.toFixed(2);
            fiveResult += 5;
            //fiveResult = fiveResult.toFixed(2);
    
        // 1 dolár.    
        }else if((change - 1) >= 0 && (one / 1) > 0){
            change -= 1;
            change = change.toFixed(2);
            one -= 1;
            //one = one.toFixed(2);
            oneResult += 1;
            //oneResult = oneResult.toFixed(2);

        // 0.25 dolares
        }else if((change - 0.25) >= 0 && (quarter / 0.25) > 0){
            change -= 0.25;
            change = change.toFixed(2);
            quarter -= 0.25;
            //quarter = quarter.toFixed(2);
            quarterResult += 0.25;
            //quarterResult = quarterResult.toFixed(2);
        
        // 0.10 dolares
        }else if((change - 0.10) >= 0 && (dime / 0.10) > 0){
            change -= 0.10;
            change = change.toFixed(2);
            dime -= 0.10;
            //dime = dime.toFixed(2);
            dimeResult += 0.10;
            //dimeResult = dimeResult.toFixed(2);

        // 0.05 dolares
        }else if((change - 0.05) >= 0 && (nickel / 0.05) > 0){
            change -= 0.05;
            change = change.toFixed(2);
            nickel -= 0.05;
            //nickel = nickel.toFixed(2);
            nickelResult += 0.05;
            //nickelResult = nickelResult.toFixed(2);

        // 0.01 dolares
        }else if((change - 0.01) >= 0 && (penny / 0.01) > 0){
            change -= 0.01;
            change = change.toFixed(2);
            penny -= 0.01;
            penny = Number(penny.toFixed(2));
            pennyResult += 0.01;
            pennyResult = Number(pennyResult.toFixed(2))


        }else{
            resultado.status = "INSUFFICIENT_FUNDS"
            return resultado;
        }
    }
    
    let dineroDisponible = penny + nickel + dime + quarter + one + five + ten + twenty + oneHundred;

    if (dineroDisponible.toFixed(2) == 0){
        resultado.status = "CLOSED";
        resultado.change.push(["PENNY", pennyResult]);
        resultado.change.push(["NICKEL", nickelResult]);
        resultado.change.push(["DIME", dimeResult]);
        resultado.change.push(["QUARTER", quarterResult]);
        resultado.change.push(["ONE", oneResult]);
        resultado.change.push(["FIVE", fiveResult]);
        resultado.change.push(["TEN", tenResult]);
        resultado.change.push(["TWENTY", twentyResult]);
        resultado.change.push(["ONE HUNDRED", oneHundredResult]);
    }else{
        resultado.status = "OPEN";
    }
    
    if(oneHundredResult > 0 && resultado.status != "CLOSED"){
        resultado.change.push(["ONE HUNDRED", oneHundredResult]);
    }
    
    if(twentyResult > 0 && resultado.status != "CLOSED"){
        resultado.change.push(["TWENTY", twentyResult]);
    }

    if(tenResult > 0 && resultado.status != "CLOSED"){
        resultado.change.push(["TEN", tenResult]);
    }

    if(fiveResult > 0 && resultado.status != "CLOSED"){
        resultado.change.push(["FIVE", fiveResult]);
    }

    if(oneResult > 0 && resultado.status != "CLOSED"){
        resultado.change.push(["ONE", oneResult]);
    }

    if(quarterResult > 0 && resultado.status != "CLOSED"){
        resultado.change.push(["QUARTER", quarterResult]);
    }

    if(dimeResult > 0 && resultado.status != "CLOSED"){
        resultado.change.push(["DIME", dimeResult]);
    }

    if(nickelResult > 0 && resultado.status != "CLOSED"){
        resultado.change.push(["NICKEL", nickelResult]);
    }

    if(pennyResult > 0 && resultado.status != "CLOSED"){
        resultado.change.push(["PENNY", pennyResult]);
    }

    return resultado;
  
}