//--------------------------->
function foo(operand1, operand2) {
    const op1 = operand1.split('')
    const op2 = operand2.split('')
    const arr = [op1, op2];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (op1[i].includes(op2[i])) {
            result.push(op1[i])
        }
        console.log(result);
    }
}
foo('react', 'redux');

//----------------------------->

function foo(a, b) {
    let anew = a.split('')
    let bnew = b.split('')
    const arr = [anew, bnew];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (anew[i].includes(bnew[i])) {
            console.log(true);
        }
    }
}
foo('2,3,1', '1,3,2');