//đọc số tiền bé hơn 100 triệu
//123455
//muời hai vạn ba ngàn bốn trăm năm mươi lăm
//123405
//muời hai vạn ba ngàn bốn trăm linh năm

let chuSo = [
  " không ",
  " một ",
  " hai ",
  " ba ",
  " bốn ",
  " năm ",
  " sáu ",
  " bảy ",
  " tám ",
  " chín ",
];
let Tien = ["", " ngàn", " vạn ", " triệu", " tỷ"];

function docSoBaChuSo(baSo) {
  let van;
  let tram;
  let chuc;
  let donVi;
  let ketQua = "";
  van = parseInt(baSo / 10000);
  tram = parseInt(baSo / 100);
  chuc = parseInt((baSo % 100) / 10);
  donVi = baSo % 10;
  if (van != 0) {
    ketQua += chuSo[van] + " vạn ";
  }
  if (tram != 0) {
    ketQua += chuSo[tram] + " trăm ";
    if (chuc == 0 && donVi != 0) ketQua += " linh ";
  }
  if (chuc != 0 && chuc != 1) {
    ketQua += chuSo[chuc] + " mươi";
    if (chuc == 0 && donVi != 0) ketQua = ketQua + " linh ";
  }
  if (chuc == 1) ketQua += " mười ";
  switch (donVi) {
    case 1:
      if (chuc != 0 && chuc != 1) {
        ketQua += " mốt ";
      } else {
        ketQua += chuSo[donVi];
      }
      break;
    case 5:
      if (chuc == 0) {
        ketQua += chuSo[donVi];
      } else {
        ketQua += " lăm ";
      }
      break;
    default:
      if (donVi != 0) {
        ketQua += chuSo[donVi];
      }
      break;
  }
  return ketQua;
}

function docTienBangChu(soTien) {
  let lan = 0;
  let i = 0;
  let so = 0;
  let ketQua = "";
  let tmp = "";
  let viTri = [];
  if (soTien > 0) {
    so = soTien;
  } else {
    so = -soTien;
  }
  viTri[5] = Math.floor(so / 1000000000000000);
  if (isNaN(viTri[5])) viTri[5] = "0";
  so = so - parseFloat(viTri[5].toString()) * 1000000000000000;
  viTri[4] = Math.floor(so / 1000000000000);

  if (isNaN(viTri[4])) viTri[4] = "0";
  so = so - parseFloat(viTri[4].toString()) * 1000000000000;
  viTri[3] = Math.floor(so / 1000000000);

  if (isNaN(viTri[3])) viTri[3] = "0";
  so = so - parseFloat(viTri[3].toString()) * 1000000000;
  viTri[2] = parseInt(so / 1000000);

  if (isNaN(viTri[2])) viTri[2] = "0";
  viTri[1] = parseInt((so % 1000000) / 1000);

  if (isNaN(viTri[1])) viTri[1] = "0";
  viTri[0] = parseInt(so % 1000);

  if (isNaN(viTri[0])) viTri[0] = "0";
  if (viTri[5] > 0) {
    lan = 5;
  } else if (viTri[4] > 0) {
    lan = 4;
  } else if (viTri[3] > 0) {
    lan = 3;
  } else if (viTri[2] > 0) {
    lan = 2;
  } else if (viTri[1] > 0) {
    lan = 1;
  } else {
    lan = 0;
  }
  for (i = lan; i >= 0; i--) {
    tmp = docSoBaChuSo(viTri[i]);
    ketQua += tmp;
    if (viTri[i] > 0) ketQua += Tien[i];
    if (i > 0 && tmp.length > 0) ketQua += ",";
  }
  if (ketQua.substring(ketQua.length - 1) == ",") {
    ketQua = ketQua.substring(0, ketQua.length - 1);
  }
  ketQua = ketQua.substring(1, 2).toUpperCase() + ketQua.substring(2);
  return ketQua;
}
//Input
let docSoTien = 123405;
let docSoTien2 = 4040282;

//Output
console.log("Đọc số tiền: " + docSoTien + " " + docTienBangChu(docSoTien));
console.log("Đọc số tiền: " + docSoTien2 + " " + docTienBangChu(docSoTien2));
