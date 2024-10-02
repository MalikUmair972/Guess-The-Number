let number = document.getElementById('number');
let submit = document.getElementById('btn');

submit.addEventListener('click', () => {
    let numValue = parseInt(number.value);

if (numValue < 100) {
    alert('This Number is Less Than 100');
}else if (numValue > 100) {
    alert('This Number is More Than 100');
}else {
   alert('This Number is exactly 100');
}
});