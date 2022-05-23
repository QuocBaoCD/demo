var number1 = 5;
var number2 = 10;
//các phép toán tử so sánh
number1 == number2;
console.log(number1 == number2);
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 != number2);
// >= lớn hơn hoặc =
// === so sánh cả giá trị và kiểu giữ liệu
//vidu:
var text1 = 'sang';
var text2 = 'hoang';
console.log(text1 > text2);
var tNumber1 = '51';
var tNumber2 = '100';
console.log(tNumber1 < tNumber2);

var dieuKienA = true;
var dieuKienB = false;
console.log(!dieuKienA)
// vidu1:tinh trị tuyêt dối của 1 số theo cấu trúc if()
var d = -9;
if (d < 0) {
    d = -d;

}
console.log('d=', d);
// vidu2:bài tap tinh trị tuyệt đối:
// var btnTinhTriTuyetDoi=document.getElementById('btnTinhTriTuyetDoi').onclick = function () {
//     var num = Number(document.getElementById('number1').value);
//     // out
//     var output = num; //kỹ thuật cờ hiệu, lính canh...
//     if (num < 0) {
//         output = -num;
//     }
//     document.getElementById('ketQua').innerHTML = output;

// }
// vidu2: in số lơn nhât
var btnSoLonNhat = document.getElementById('btnSoLonNhat').onclick
    = function () {
        var numBer1 = Number(document.getElementById('numBer1').value);
        var numBer2 = Number(document.getElementById('numBer2').value);

        var max = 0;

        if (numBer1 > numBer2) {
            max = numBer1;
        } else {
            max = numBer2;
        }
        // inra ket qua
        document.getElementById('ketQua2').innerHTML = max;
    }
// vi dụ3: tính ddiemr trung bình toán lý hóa và xuât ra kêt quả kèm xêp loại:
document.getElementById('btnXepLoai').addEventListener('click', function () {
    var diemToan = Number(document.getElementById('diemToan').value);
    var diemLy = Number(document.getElementById('diemLy').value);
    var diemHoa = Number(document.getElementById('diemHoa').value);
    // output:DTB:number;xepLoai:string
    var DTB = 0;
    var xepLoai = '';
    if (diemHoa === 0 || diemLy === 0 || diemToan === 0) {
        alert('Vui long dien day du thong tin!')
    }
    else {
        DTB = (diemHoa + diemLy + diemToan) / 3;
        if (DTB < 5) {
            xepLoai = 'yếu';
        } else if (DTB >= 5 && DTB < 6.5) {
            xepLoai = 'Trung Binh';
        } else if (DTB >= 6.5 && DTB < 8) {
            xepLoai = 'Khá';
        } else if (DTB >= 8 && DTB <= 10) {
            xepLoai = 'Giỏi';
        } else {
            xepLoai = 'KHông hợp lệ';
        }
        
        // in ra ket quả:
        document.getElementById('ketQua3').innerHTML = 'Điểm Trung Bình:' + DTB + '_ Xếp Loại:' + xepLoai;


    }
})



// -------------------bài tập 1: tinh tiền lương khi nhập số giờ làm -------
document.getElementById('btnTinhLuong').onclick=function(){


var gioLam=Number(document.getElementById('soGioLam').value);
var tienLuongCB=Number(document.getElementById('luongCB').value);
// output:
var tienLuong=0;
if(gioLam<=40){
    tienLuong=gioLam*tienLuongCB ;
}
else{
tienLuong= (tienLuongCB*40)+(tienLuongCB*1.5*(gioLam-40));

}
document.getElementById('ketQua_bt1').innerHTML='tiền lương ='+tienLuong;
}

// ----------------bài taapj2;>chương trình cho phép người dừng nhập vào số lượng ,Đơn giá từng sản phẩm .yêu cầu tinh tổng tiền theo công thức
    document.getElementById('btnTinhTongTien').onclick=function() {
        var tenSanPham=document.getElementById('tenSanPham').value;
        var soLuong=Number(document.getElementById('soLuong').value);
        var donGia=Number(document.getElementById('donGia').value);
var tongTien=0;
if(soLuong<=50){
    tongTien=soLuong*donGia;
}
else if(soLuong>50 && soLuong<=100){
    tongTien=(soLuong*donGia)*92/100 ;
}
else{
    tongTien=(soLuong*donGia)*88/100;
}
document.getElementById('ketQua_bt2').innerHTML=' tên sản phẩm '+tenSanPham +
'_tổng tiền'+tongTien;
    }


