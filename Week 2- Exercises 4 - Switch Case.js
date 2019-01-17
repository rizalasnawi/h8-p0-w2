var tanggal = 21;
var bulan = 1;
var tahun = 1945;



switch(true){
    case tanggal > 31 : {tanggal = "Tanggal Invalid";
        break;}
    case tanggal < 1: {tanggal = "Tanggal Invalid";
        break;}
    default :{ tanggal = tanggal;
        break;}
}

switch(bulan){
    case bulan = 1 : { bulan = "Januari";
        break; }
    case bulan = 2 : { bulan = "Februari";
        break;}
    case bulan = 3 : { bulan = "Maret";
        break; }
    case bulan = 4 : { bulan = "April";
        break; }
    case bulan = 5 : { bulan = "Mei";
        break; }
    case bulan = 6 : { bulan = "Juni";
        break; }
    case bulan = 7 : { bulan = "Juli";
        break; }
    case bulan = 8 : { bulan = "Agustus";
        break; }
    case bulan = 9 : { bulan = "September";
        break; }
    case bulan = 10 : { bulan = "Oktober";
        break; }
    case bulan = 11 : { bulan = "November";
        break; }
    case bulan = 12 : { bulan = "Desember";
        break; }
    default :{
        bulan = "Bulan Invalid"; }
}

switch (true){
    case tahun < 1900 : { tahun = "Tahun Invalid";
        break; }
    case tahun > 2200 : { tahun = "Tahun Invalid";
        break; }
    default: { tahun = tahun;
        break; }
}

console.log (tanggal + " " + bulan + " " + tahun);
