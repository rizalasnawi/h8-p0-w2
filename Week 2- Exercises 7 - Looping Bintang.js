//bintang baris
var row=5;
for (var i = 0; i<row; i++){
    console.log("*");
}
console.log("\n");
//bintang berkumpul
var row2=5;
for (var i = 0; i<row2; i++){
    bintang="";
        for(var j=0; j<row2; j++){
            bintang=bintang+"*";
    }
    console.log(bintang);
}

//bintang segitiga siku siku
row3=5;
for (var i = 0; i<=row3; i++){
    bintang="";
        for(var j=0;j<i;j++){
            bintang=bintang+"*";
        }
    console.log(bintang);
}