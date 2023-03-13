let arr = ['Tue', 'Thu', 'Sat', 'Nine'];
console.log('Mảng ban đầu là: ' + arr);

// xoá phần tử cuối mảng 
arr.pop(); 
console.log('Mảng sau khi xoá phần tử cuối: ' + arr)
//thêm 'Mon' vào đầu mảng
arr.splice(0, 0, 'Mon'); 
// thêm 'Wed' vào phần tử thứ 2 của mảng
arr.splice(2, 0, 'Wed'); 
// thêm 'Fri' vào phần tử thứ 4 của mảng
arr.splice(4, 0, 'Fri'); 
// thêm phần tử vào cuối mảng
arr.push('Sun');  
console.log('Mảng sau khi đã được thêm và sắp xếp: ' + arr);