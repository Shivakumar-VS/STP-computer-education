let grade = 87;
if(grade>=90 && grade>=100){
    grade = "A";
}
else if(grade<=89 && grade>=70){
    grade = "B";
}
else if(grade >=60 && grade <=69){
    grade = "C";
}
else if(grade >=50 && grade <= 59){
    grade = "D";
}
else{
    grade = "F";
}
console.log("according to your scores, your  grade was :" ,grade);