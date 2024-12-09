let score = 87;
let grade1;
if(score>=90 && score>=100){
    grade1 = "A";
}
else if(score<=89 && score>=70){
    grade1 = "B";
}
else if(score >=60 && score <=69){
    grade1 = "C";
}
else if(score >=50 && score <= 59){
    grade1 = "D";
}
else{
    grade1 = "F";
}
console.log("according to your scores, your  grade was :" ,grade1);