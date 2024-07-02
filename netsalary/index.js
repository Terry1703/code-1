function calculateTaxableIncome(basicsalary,benefits){
    return 'basicsalary + benefits';
}


function calculateNssfDeduction(basicsalary){
    if (nssfrate=7%){
    return 'basicsalary * nssfrate'
}
}
console.log (calculateNssfDeduction)

function calculateNhifDeduction(grosssalary){
    if (grosssalary <=3999){
        return '100';
    } 
    else if (grosssalary<=5999){
        return '300';
    }
    else if (grosssalary <= 8999){
        return '400';
    }
    else{
        return '1200';
    }
}
function calculateNetSalary(basicsalary,benefits){
    paye =calculatepaye(taxableincome);

    nssfdedaction= calculateNssfDeduction(basicsalary);

    grosssalary= calculateTaxableIncome(basicsalary,benefits);

    taxableincome= grosssalary - nssfdedaction;

   nhifdedaction=calculateNhifDeduction(grosssalary);

    netsalary =grosssalary-(nssfdedaction + paye + nhifdedaction)

    }



