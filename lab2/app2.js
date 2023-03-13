let a1 = prompt("Moi nhap a: ");
let b1 = prompt("Moi nhap b: ");
let c1 = prompt("Moi nhap c: ");
let a=parseInt(a1);
let b=parseInt(b1);
let c=parseInt(c1);
//Kiem tra dieu kien la ba canh cua tam giac
if (a+b>c && a+c>b && b+c>a){
    document.writeln("a, b, c là 3 cạnh của 1 tam giác");
    if (a*a==b*b+c*c || b*b==a*a+c*c || c*c==a*a+b*b){
        document.writeln("Đây là tam giác vuông")
    }
    else if( a==b || a==c || b==c){
        document.writeln("Đây là tam giác cân")
    }
    else {
        document.writeln("Đây là tam giác thường")
    }
}
else{
    document.writeln("a, b, c không phải là 3 cạnh của 1 tam giác")
}