class Sinhvien {
    // dùng constructor
    constructor(masv, hosv, tensv, email, sdt, namsinh){
        this.masv= masv;
        this.hosv= hosv;
        this.tensv=tensv;
        this.email= email;
        this.sdt=sdt;
        this.namsinh=namsinh;
    }
    getFullName(){
        return this.hosv+" "+this.tensv
    }
    getAge(){
        let date= new Date();
        let currentYear= date.getFullYear();
        let age= currentYear-this.namsinh;
        return age; 
    }
}
var listsv=[
    new Sinhvien('PD008','Ngo','Linh','linh@gmail.com','012345678','2000'),
    new Sinhvien('PD003','Hoang','Hinh','hinh@gmail.com','012345679','2003'),
    new Sinhvien('PD004','Nguyen','Hoang','hoang@gmail.com','012345679','2001'),
    new Sinhvien('PD002','Tran','Anh','anh@gmail.com','012345689','2004'),
    new Sinhvien('PD006','Nguyen','A','a@gmail.com','012345689','2002'),
]
listsv.sort((a, b) => {
    const ageA = a.getAge(); // ignore upper and lowercase
    const ageB = b.getAge(); // ignore upper and lowercase
    if (ageA < ageB) {
      return -1;
    }
    if (ageA > ageB) {
      return 1;
    }
  
    return 0;});
    console.log(listsv)