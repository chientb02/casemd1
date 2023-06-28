
function dangNhap() {
   var taikhoan= document.getElementById('tk').value ;
    var matkhau = document.getElementById('mk').value ;
    if (taikhoan == 'chienne' && matkhau== 123){
        alert('đăng nhập thành công')
        location.href= 'product.html'
       localStorage.setItem("username", taikhoan)
        document.getElementById("tendn").innerHTML  = localStorage.getItem("username")
        document.getElementById("editcombo").style.display = "block"

    }else {
        alert('Sai mất rồi') ;
    }
}









    // function m2() {
    // let value = document.getElementById("input1").value
    // let value1 = document.getElementById("input2").innerHTML
    // console.log(value)
    // console.log(value1)