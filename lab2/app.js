// nhập a,b,c từ màn hình
let a = prompt("Moi nhap a: ");
let b = prompt("Moi nhap b: ");
let c = prompt("Moi nhap c: ");
let a1=parseInt(a);
let b1=parseInt(b);
let c1=parseInt(c);
// tính delta
let delta=b*b-4*a1*c1;
var x1,x2;
// Tìm nghiệm của phương trình
if (delta < 0)
{
document.write(" Phương trình vô nghiệm ");
}
else if (delta ==0)
{
x1 =x2= -b/2*a;
document.write("Phương trình có nghiệm kép là: ",x1)
}
else if (delta > 0)
{
x1 = (-b + Math.sqrt(delta))/(2*a);
x2 = (-b - Math.sqrt(delta))/(2*a);
document.write("Phương trình có 2 nghiệm phân biệt là: ",x1," ,",x2)
}