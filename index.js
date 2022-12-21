let action = prompt('Яку дію хочете зробити? (add, sub, mult, div)')
let firstNumber = +prompt('Перше число')
let secondNumber= +prompt('Друге число ')

if(!isNaN(firstNumber) && !isNaN(secondNumber)){
switch (action) {
    case 'add':
        alert(`${firstNumber} + ${secondNumber} = ${firstNumber+secondNumber}`)
        break;
    case 'sub':
        alert(`${firstNumber} - ${secondNumber} = ${firstNumber-secondNumber}`)
        break;
    case 'mult':
        alert(`${firstNumber} * ${secondNumber} = ${firstNumber*secondNumber}`)
        break;
    case 'div':
        alert(`${firstNumber} / ${secondNumber} = ${(firstNumber/secondNumber).toFixed(2)}`)
        break;
    default:
        alert('Нажаль цю дію не можу виконати')
}
}else {
    alert('потрібно вписати число')
}

