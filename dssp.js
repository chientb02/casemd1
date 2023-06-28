let combo1 = new monAn('Combo Nhóm 1' ,'IMG/combo nhóm/D6.jpg' ,'175.000₫','3 Miếng Gà + 1 Burger Zinger/Burger Tôm/Burger Gà Quay + 2 Lon Pepsi' )
let combo2 = new monAn('Combo Nhóm 2' ,'IMG/combo nhóm/D7-new.jpg' ,'195.000₫','4 Miếng Gà + 1 Khoai tây chiên lớn / 2 Thanh Bí Phô-mai + 2 Pepsi Lon' )
let combo3 = new monAn('Combo Nhóm 3' ,'IMG/combo nhóm/D8-new.jpg' ,'232.000₫','5 Miếng Gà + 1 Popcorn (Vừa) / 4 Gà Miếng Nuggets+ 2 Pepsi Lon' )
let dsCombo = [combo1,combo2,combo3]


let monMoi1 = new monAn('snack','IMG/snack/2-Skewers.jpg','175.000₫','1 snack')
let monMoi2 = new monAn('snack','IMG/snack/5-Mashies-Vegie.jpg','175.000₫','1 snack')
let monMoi3 = new monAn('snack','IMG/snack/FF-L.jpg','175.000₫','1 snack')
let monMoi4 = new monAn('snack','IMG/snack/SALAD-HAT-GA-VIEN.jpg','175.000₫','1 snack')
let monMoi5 = new monAn('snack','IMG/snack/MP-(L)-new.jpg','175.000₫','1 snack')
let monMoi6 = new monAn('snack','IMG/snack/MP-(R)-new.jpg','175.000₫','1 snack')
let monMoi7 = new monAn('snack','IMG/snack/SALAD-HAT.jpg','175.000₫','1 snack')
let dsMonMoi = [monMoi1, monMoi2 , monMoi3 , monMoi4 , monMoi5, monMoi6, monMoi7]


let gaRan1 = new monAn('Fried-Chicken','IMG/gà rán gà quay/1-Fried-Chicken.jpg','195.000₫','1-Fried-Chicken.jpg')
let gaRan2 = new monAn('2-Fried-Chicken','IMG/gà rán gà quay/2-Fried-Chicken.jpg','195.000₫','2-Fried-Chicken')
let gaRan3 = new monAn('3-Fried-Chicken','IMG/gà rán gà quay/3-Fried-Chicken.jpg','195.000₫','3-Fried-Chicken')
let gaRan4 = new monAn('Gà rán','IMG/gà rán gà quay/3-HW.jpg','195.000₫','Fried-Chicken-new')
let gaRan5 = new monAn('Gà rán','IMG/gà rán gà quay/5-HW.jpg','195.000₫','Fried-Chicken-new')
let gaRan6 = new monAn('Gà rán','IMG/gà rán gà quay/6-Fried-Chicken-new.jpg','195.000₫','Fried-Chicken-new')
let gaRan7 = new monAn('Gà rán','IMG/gà rán gà quay/BJ.jpg','195.000₫','Fried-Chicken-new')
let gaRan8 = new monAn('Gà rán','IMG/gà rán gà quay/MOD-PHI-LE-GA-QUAY.jpg','195.000₫','MOD-PHI-LE-GA-QUAY')
let dsGaRan = [gaRan1, gaRan2 , gaRan3, gaRan4 , gaRan5, gaRan6, gaRan7, gaRan8];










class monAn {
    ten
    anh
    gia
    thongTin
    constructor(ten,anh,gia,thongTin) {
        this.ten=ten  ;
        this.anh=anh ;
        this.gia=gia ;
        this.thongTin=thongTin  ;
    }
    getTen() {
        return this.ten;
    }
    getAnh() {
        return this.anh;
    }
    getGia() {
        return this.gia;
    }
    getThongTin(){
        return this.thongTin;
    }
    setTen(ten){
        this.ten=ten;
    }
    setAnh(anh){
        this.anh=anh;
    }
    setGia(gia){
        this.gia=gia;
    }
    setThongTin(thongTin){
        this.thongTin=thongTin;
    }
    edit(ten, anh, gia,thongTin) {
        this.ten = ten;
        this.anh = anh;
        this.gia = gia;
        this.thongTin = thongTin;
    }
    showFood(arr){
        for (let i = 0; i < arr.length; i++) {
            return `
         for (let i = 0; i < arr.length; i++) {
        <div  class="sanPham"  style="float:left ; width: 280px; height: auto ; border: 1px solid #BEBEBE ;">
             <img src="${arr[i].anh}" alt="${arr[i].ten}" style="width: 250px;height: auto;margin-left:10px;">
            <div class="ttSanpham">
            <h3>${arr[i].ten}</h3>
             <p>${arr[i].gia}</p>
             <p>${arr[i].thongTin}</p>
             <button onclick="editProduce(+i+)">Edit</button>
             <button onclick="deleteProduce(+i+)">Delete</button>
             <button  style="background-color:#EEEEEE;color:#BEBEBE;border:none; width:215px; height:auto ;margin:10px; border-radius:20px;"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg></button>
</div>
         </div>
         `}}}

var showCombo = '';
for (let i = 0; i < dsCombo.length; i++) {
    let thucdon = dsCombo[i];

    showCombo += thucdon.showFood(dsCombo);
}
function  showComBo() {
    document.getElementById('combo').innerHTML = showCombo;
}
function new_Product () {
    let ten = document.getElementById('name').value;
    let anh = document.getElementById('img').value;
    let gia = document.getElementById('price').value;
    let tt = document.getElementById('tt').value;
    //     let combo = new monAn(ten,anh,gia,tt,grade,img);
    //   dsCombo.push(combo)
    // showComBo()
}
function editProduce(index) {
    var inputElement = document.getElementById('textUpdate')
    inputElement.value= arr[index]
    a= index
}
function deleteProduce(index) {
    arr.splice(index,1);
    display_produce()
    alert('xóa thành công')
}
function update() {
    var upDate = document.getElementById('textUpdate').value ;
    arr[a]= upDate
    display_produce()
    alert('sửa thành công')
}


var showMonMoi = '';
for (let i = 0; i < dsMonMoi.length; i++) {
    let thucdon = dsMonMoi[i];
    showMonMoi += thucdon.hienThiMonAn();
}
document.getElementById('monMoi').innerHTML = showMonMoi;


var showGaRan = '';
for (let i = 0; i < dsGaRan.length; i++) {
    let thucdon = dsGaRan[i];
    showGaRan += thucdon.hienThiMonAn();
}
document.getElementById('gaRan').innerHTML = showGaRan;