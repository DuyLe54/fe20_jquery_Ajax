function NguoiDungService() {

  this.layDanhSachNguoiDung = function () {
    $.ajax({
      url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
      type: "GET"
    })
      .done(function (result) {
        localStorage.setItem("Danh Sách Người Dùng", JSON.stringify(result));
        taobang(result);
      })
      .fail(function (err) {
        console.log(err);
      })

    // Thêm Người Dùng
    this.themNguoiDung = function (nguoiDung) {
      $.ajax({
        url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
        type: "POST",
        data: nguoiDung
      })
        .done(function (Result) {
          if (Result === "tai khoan da ton tai !")
            alert(Result);
          else {
            location.reload();
          }
        })
        .fail(function (Err) {
          console.log(Err);
        })
    }

    //xóa người dùng
    this.xoaNguoiDung = function (TaiKhoan) {
      $.ajax({
        url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${TaiKhoan}`,
        type: "DELETE",
      })
        .done(function (result) {
          location.reload();
        })
        .fail(function (err) {
          console.log(err);
        })
    }
    //sửa người dùng
    this.suaNguoiDung = function (nguoiDung) {
      var ngd = JSON.stringify(nguoiDung);
      $.ajax({
        url: `http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung`,
        type: "PUT",
        data: ngd,
        contentType: 'application/json',
        dataType: 'Json',
      })
        .done(function (succses) {
          location.reload();
        })
        .fail(function (err) {
          console.log(err);
        })
    }



    this.layDanhSachNguoiDung = function (taiKhoan) {
      var danhSachNguoiDung = JSON.parse(localStorage.getItem("Danh Sách Người Dùng"));

      // var nguoiDung;
      // danhSachNguoiDung.map(function (item) {
      //   if (item.TaiKhoan == taiKhoan) {
      //     nguoiDung = item;
      //     return nguoiDung;
      //   }
      // })
      // return nguoiDung;
      return danhSachNguoiDung.find(function (item) {
      return item.TaiKhoan === taiKhoan;
      })
    }
  }

  //tao bang bang map
  function taobang(mangDuLieu) {
    var tblbody = ``;
    mangDuLieu.map(function (item, index) {
      tblbody += `
      <tr>
      <td>${index + 1}</td>
      <td>${item.TaiKhoan}</td>
      <td>${item.MatKhau}</td>
      <td>${item.HoTen}</td>
      <td>${item.Email}</td>
      <td>${item.SoDT}</td>
      <td>${item.TenLoaiNguoiDung}</td>
      <td>
      <button class="btn btn-success btnsua" data-toggle="modal" data-target="#myModal" data-taikhoan="${item.TaiKhoan}">Sửa</button>
      <button class="btn btn-danger btnxoa " data-taikhoan="${item.TaiKhoan}">Xóa</button>
      </td>
      </tr>
      `
    })
    $("#tblDanhSachNguoiDung").html(tblbody);
  }
}