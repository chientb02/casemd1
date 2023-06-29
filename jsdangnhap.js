
function dangNhap() {
   var taikhoan= document.getElementById('tk').value ;
    var matkhau = document.getElementById('mk').value ;
    if (taikhoan == 'chienne' && matkhau== "123"){
        localStorage.setItem("usern", taikhoan)
        alert('đăng nhập thành công')
        location.href= 'product.html'
    }else {
        alert('Sai mất rồi') ;
    }
}

window.addEventListener('DOMContentLoaded', function(event) {
    let username = localStorage.getItem("usern");
    if (username) {
        document.getElementById("tendn").innerHTML = username;
        document.getElementById("editc1").style.display = "block";
        document.getElementById("editc2").style.display = "block";
        document.getElementById("editc3").style.display = "block";
    }
});
function dangnhap1() {
    localStorage.clear()
    location.href = '/casestudy/dangnhap.html';
}






    // function m2() {
    // let value = document.getElementById("input1").value
    // let value1 = document.getElementById("input2").innerHTML
    // console.log(value)
    // console.log(value1)