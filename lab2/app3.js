// nhập họ tên giới tính từ bàn phím
var hoTen = prompt("Nhập họ và tên của bạn: ");
var gioiTinh = prompt("Nhập giới tính của bạn: ");
// tách họ tên đêm tên
var a = hoTen.indexOf(' ');
var b=hoTen.lastIndexOf(' ');
var ho = hoTen.substring(0,a);
var tenDem = hoTen.substring(a+1,b);
var ten = hoTen.substring(b+1);
// thay tên đệm theo giới tính
let tenDemMoi;
if (gioiTinh === "nam") {
  tenDemMoi = " Văn ";
} else {
  tenDemMoi = " Thị ";
}
document.write("Họ: " + ho);
document.write(". Tên đệm: " + tenDem);
document.write(". Tên: " + ten);

var tenMoi = ho + tenDemMoi + ten;
document.write(". Tên mới: " + tenMoi);
