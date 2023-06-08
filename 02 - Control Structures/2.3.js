
//i % 2 == 0 veut dire que tant qu'un nombre peut imbriquer x fois 2 en lui, et que le reste est égal à 0, la boucle continue.

//version 1

let i = 0;

while (i <= 100) {
    if (i%2==0) {
    console.log(i);
    }
    i ++;
}
//version 2

/*for (let i = 2; i<=100; i +=2) {
    console.log(i);
}*/