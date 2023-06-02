create schema mini_market;
use mini_market;
create table khach_hang(
kh_id int auto_increment,
ten varchar(255) not null,
sdt char(11) not null,
email varchar(255),
capdo int not null,
diachi varchar(255),
primary key(kh_id)
);
create table ca(
ca_id int,
batdau time not null,
ketthuc time not null,
primary key(ca_id)
);
create table nhan_vien(
nv_id int auto_increment,
ten varchar(255) not null,
sdt char(11) not null,
email varchar(255),
diachi varchar(255) not null,
cccd varchar(255) not null unique,
ngay_vao date not null,
ca_id int not null,
primary key(nv_id),
foreign key(ca_id) references ca(ca_id)
);
create table ngay_cong(
id int auto_increment,
nv_id int not null,
ca_id int not null,
ngay date not null,
primary key(id),
foreign key(nv_id) references nhan_vien(nv_id),
foreign key(ca_id) references ca(ca_id)
);
create table san_pham(
sp_id char(20),
ten varchar(255) not null,
gia int not null,
primary key(sp_id)
);
create table donhang(
dh_id int auto_increment,
ngay date not null,
nv_id int not null,
kh_id int,
primary key(dh_id),
foreign key(nv_id) references nhan_vien(nv_id),
foreign key(kh_id) references khach_hang(kh_id)
);
create table dh_sp(
dh_id int not null,
sp_id char(20) not null,
soluong int not null,
primary key(dh_id,sp_id),
check (soluong>0)
);
insert into ca values
(1,'05:00:00','13:00:00'),
(2,'13:00:00','22:00:00');
insert into nhan_vien(ten,sdt,email,diachi,cccd,ngay_vao,ca_id) value
('Hoang Anh','0123456789','anh@gmail.com','1 Nguyen Van Linh Da Nang','045787290','2023-01-02',1),
('Ngo Linh','0123456799','linh@gmail.com','2 Le Duan Da Nang','045787292','2023-01-03',2);
insert into khach_hang(ten,sdt,email,capdo,diachi) value
('Nguyen van a','01234668889','a@gmail.com','2','01 Ong Ich Khiem'),
('Hoang Thi','0587768989','thi@gmail.com','3','2 Dien Bien Phu'),
('Tran Ha','0123356757','ha@gmail.com','1','8 Hai Phong'),
('Tran Hung','0123356758','hung@gmail.com','0','10 Hai Phong'),
('Nguyen Khoa','0123356756','khoa@gmail.com','1','19 Ton That Dam'),
('Nguyen Linh','0123356799','li@gmail.com','2','20 Ton That Dam'),
('Do Van B','0123356788','b@gmail.com','1','29 Do Ba'),
('Phung Do','0123356777','do@gmail.com','1','22 Ton That Dam'),
('Nguyen Trang','0123356766','trang@gmail.com','1','88 Nguyen Van Linh'),
('Hoang A','0123356755','khoa@gmail.com','1','19 Le Duan');
insert into ngay_cong(nv_id,ca_id,ngay) value
('1','1','2023-04-01'),
('2','2','2023-04-01'),
('1','1','2023-04-02'),
('2','2','2023-04-02'),
('1','1','2023-04-03'),
('2','2','2023-04-03');
insert into san_pham(sp_id,ten,gia) value
('1','Mi hao hao','4500'),
('2','Mi 3 mien','6000'),
('3','Mi Omachi','5000'),
('4','Mi Han Quoc','10000'),
('5','Mi Kokomi','5000'),
('6','Coca cola','10000'),
('7','Pepsi','10000'),
('8','Fanta','11000'),
('9','Sprite','10000'),
('10','Sua Fami','27000'),
('11','Sua vinamilk','30000'),
('12','Sua TH true milk','33000'),
('13','Sua Ovaltine','31000'),
('14','Sua Yomost','32000'),
('15','Sua milo','32000'),
('16','Sua tintin','30000'),
('17','Banh Kinh Do','50000'),
('18','Banh Chocopie','40000'),
('19','Banh Nabati','30000'),
('20','Banh Oreo','28000');
insert into donhang(ngay,nv_id,kh_id) value
('2023-04-01',1,3),
('2023-04-01',1,2),
('2023-04-01',2,3),
('2023-04-01',2,4),
('2023-04-02',1,5),
('2023-04-02',2,6),
('2023-04-02',2,7),
('2023-04-03',1,8),
('2023-04-03',1,9),
('2023-04-03',2,10),
('2023-04-03',2,1),
('2023-04-03',2,2),
('2023-04-04',1,3),
('2023-04-04',1,4),
('2023-04-04',1,5),
('2023-04-04',2,7),
('2023-04-04',2,8),
('2023-04-04',2,9),
('2023-04-04',2,10);
insert into dh_sp(dh_id,sp_id,soluong) value
(1,1,5),
(2,2,4),
(3,3,2),
(4,4,3),
(5,5,1),
(6,6,3),
(7,7,4),
(8,2,4),
(9,1,3),
(10,3,2),
(11,11,2),
(12,10,4),
(13,19,1),
(14,15,2),
(15,18,3),
(16,5,3),
(17,8,4),
(18,9,1),
(19,10,2);


