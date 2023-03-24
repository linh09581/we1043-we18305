// tạo class sinhvien
class Sinhvien {
  // dùng constructor
  constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.class_id = class_id;
    this.email = email;
    this.phone_number = phone_number;
    this.dob = new Date(dob);
  }
  // hàm lấy fullname
  getFullName() {
    return this.first_name + " " + this.last_name;
  }
  // lấy tuổi tính theo ngày
  getAge() {
    var day = (Date.now() - this.dob.getTime()) / (1000 * 60 * 60 * 24);
    return day;
  }
}
var listsv = [
  new Sinhvien(
    1,
    "Ngo",
    "Linh",
    01,
    "linh@gmail.com",
    "012345789",
    "2000-11-29"
  ),
  new Sinhvien(
    2,
    "Nguyen",
    "Hoa",
    02,
    "hoa@gmail.com",
    "012345789",
    "2004-07-20"
  ),
  new Sinhvien(
    3,
    "Tran",
    "Hoang",
    01,
    "hoang@gmail.com",
    "012345789",
    "10/10/2003"
  ),
  new Sinhvien(
    4,
    "Hoang",
    "Phan",
    01,
    "phan@gmail.com",
    "012345789",
    "2003-04-05"
  ),
  new Sinhvien(
    5,
    "Tran",
    "Linh",
    01,
    "linh@gmail.com",
    "012345789",
    "2001-05-20"
  ),
];
console.log(listsv[0].getAge());
// sắp xếp mảng sinh viên theo tuổi
listsv.sort((a, b) => {
  const ageA = a.getAge();
  const ageB = b.getAge();
  if (ageA < ageB) {
    return -1;
  }
  if (ageA > ageB) {
    return 1;
  }

  return 0;
});
console.log(listsv);
// in thông tin wirth và height
console.log(screen.width);
console.log(screen.height);