function konversiMenit(menit) {
    var min;
    var jam;
        min=menit%60;
        jam=(menit-min)/60;

    if(min <10){ //kalo 0 malah tambah 0, jadi dicobain sampe ilang 0 nya :)
        return jam+":"+"0"+min;
    }
    else{
        return jam+":"+min;
    }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00