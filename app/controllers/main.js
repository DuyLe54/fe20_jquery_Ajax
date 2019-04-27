$(document).ready(function () {
  var nguoiDungService = new NguoiDungService();

  layDanhSachNguoiDung();

  function layDanhSachNguoiDung() {
    nguoiDungService.layDanhSachNguoiDung();
  }


  //title & button add
  function titleidbtn(title, titlebutton, idbtn) {
    $(".modal-title").html(title);

    var footer = `
    <button class="btn btn-success" id="${idbtn}">${titlebutton}</button>`
    $(".modal-footer").html(footer);
  }
  //thêm
  $("#btnThemNguoiDung").click(function () {
    titleidbtn("Thêm người dùng", "Thêm", "btnthem")
  })
  //xóa
  $("body").delegate(".btnxoa", "click", function () {
    var taiKhoan = $(this).data('taikhoan');
    nguoiDungService.xoaNguoiDung(taiKhoan);
    console.log(taiKhoan);
  })
  //sửa
  $("body").delegate(".btnsua", "click", function () {
    titleidbtn("Sửa", "Cập Nhật", "btnsua")
    var taiKhoan = $(this).data('taikhoan');
    var nguoiDung = nguoiDungService.layDanhSachNguoiDung(taiKhoan);

    $("#TaiKhoan").attr("disabled", "disabled");

    $("#TaiKhoan").val(nguoiDung.TaiKhoan);
    $("#HoTen").val(nguoiDung.HoTen);
    $("#MatKhau").val(nguoiDung.MatKhau);
    $("#Email").val(nguoiDung.Email);
    $("#SoDienThoai").val(nguoiDung.SoDT);
    $("#loaiNguoiDung").val(nguoiDung.MaLoaiNguoiDung);

  })

  $("body").delegate("#btnsua","click",function(){
    var taiKhoan = $("#TaiKhoan").val();
    var matKhau = $("#MatKhau").val();
    var hoTen = $("#HoTen").val();
    var email = $("#Email").val();
    var SoDT = $("#SoDienThoai").val();
    var loaiNguoiDung = $("#loaiNguoiDung").val();

    var nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen, email, SoDT, loaiNguoiDung);

    nguoiDungService.suaNguoiDung(nguoiDung);
  })



  // nút Thêm
  $("body").delegate("#btnthem", "click", function () {
    var taiKhoan = $("#TaiKhoan").val();
    var matKhau = $("#MatKhau").val();
    var hoTen = $("#HoTen").val();
    var email = $("#Email").val();
    var SoDT = $("#SoDienThoai").val();
    var loaiNguoiDung = $("#loaiNguoiDung").val();

    var nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen, email, SoDT, loaiNguoiDung);
    nguoiDungService.themNguoiDung(nguoiDung);
  })
})

