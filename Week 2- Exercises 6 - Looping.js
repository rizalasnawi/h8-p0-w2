//1. Melakukan Looping Menggunakan While

var kata = " - I love coding";
var i = 0;
while(i < 20){
        if(i==2){
            console.log("LOOPING PERTAMA");
     }
      i = i+2;
     console.log(i ,kata);
}


var kata1 = " - I will become fullstack developer"
var j = 20;

while(j >2){
        if(j==20){
            console.log("LOOPING KEDUA");
        }
        j -=2;
        console.log(j, kata1);
}


//2. Melakukan Looping Menggunakan For

var limit= 20;
for (var i = 1; i< limit; i++){
    if (i==1){
        console.log("LOOPING PERTAMA");
    }
    console.log(i, "- I Love Coding");
}


var limit1=20;
for (var j = limit1; j>0; j--){
    if(j==20){
        console.log("LOOPING KEDUA");
    }
    console.log(j, "- I will become fullstack developer");
}


var limit2= 100;
for (var counter=1; counter<=limit2; counter ++){
    if(counter % 2 == 0){
        console.log(counter + " GENAP");
    }
    else{
        console.log(counter + " GANJIL");
    }
}

var limit3= 100;
for (var counter=1; counter<=limit3; counter+=2){
    if(counter % 3 == 0){
        console.log(counter + " kelipatan " + 3);
    }
    else{
        console.log("");
    }
}

var limit5= 100;
for (var counter=1; counter<=limit5; counter+=5){
    if(counter % 6 == 0){
        console.log(counter + " kelipatan " + 6);
    }
    else{
        console.log("");
    }
}


var limit9= 100;
for (var counter=1; counter<=limit9; counter+=9){
    if(counter % 10 == 0){
        console.log(counter + " kelipatan " + 10);
    }
    else{
        console.log("");
    }
}

