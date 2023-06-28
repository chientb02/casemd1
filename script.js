function Previous() {
    document.getElementById('bn').src = 'IMG/bn/bn1.jpg'
}

function Next() {
    document.getElementById('bn').src = 'IMG/bn/bn2.jpg'
}

class danhMucMonAn {
    ten
    anh

    constructor(ten, anh) {
        this.ten = ten;
        this.anh = anh;
    }
}
function hienThiDanhMuc() {
    let showList = '';
    for (let i=0 ;i<dsThucDon.length ; i++){
        showList += ` <div style="margin-right : 20px;font-size : 25px ">
             <img src="${dsCombo[i].anh}" alt="${dsThucDon[i].ten}" style="width: 300px;height: auto; " onclick="thucdon(${i})">
             <p>${dsCombo[i].ten}</p>
         </div> `
    }
    return showList;
}
let thucDon1 = new danhMucMonAn('Món mới' , 'IMG/prd/td1.jpg')
let thucDon2 = new danhMucMonAn('Combo 1 người' , 'IMG/prd/td2.jpg')
let thucDon3 = new danhMucMonAn('Gà rán - Gà quay' , 'IMG/prd/td3.jpg')
let thucDon4 = new danhMucMonAn('Burger - Cơm - Mì ý' , 'IMG/prd/td4.jpg')

let dsThucDon = [thucDon1,thucDon2,thucDon3 , thucDon4]
let str = hienThiDanhMuc();
document.getElementById('danhmucmon').innerHTML = str;

function thucdon(i) {
    if (i===0){
        location.href='/casestudy/product.html#deal'
    }else if ( i === 1){
        location.href='/casestudy/product.html#monmoinew'
    }else if( i===2) {
        location.href='/casestudy/product.html#garannew'
    }
}
function menu(){
    location.href= 'product.html'
}

function deal() {
    location.href='/casestudy/product.html#deal'
}
function reloadd() {
    location.href='/casestudy/kfc.html';
    taikhoan = ''
    localStorage.setItem("username", taikhoan)
    document.getElementById("tendn").innerHTML  = localStorage.getItem("username")
}
function dangnhap1() {
    location.href = '/casestudy/dangnhap.html'
}

