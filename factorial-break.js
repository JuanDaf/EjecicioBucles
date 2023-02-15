let fac =1, i =1;
//Factorial de  10
while (true) {
    if (i==9) {
        break;
    }
    fac += i * fac;
    i++;
}

console.log(fac);