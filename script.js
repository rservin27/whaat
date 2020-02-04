$("button").click(function() {
    var school = $(".A").val();
    var bday = $(".B").val();

 
    console.log(school);
    console.log(typeof school);
    console.log(bday);
    console.log(typeof bday);

 if (school=== "2" && bday === "3" ){
   $("body").append('<img src= "coryy.png">');
 }
 else if(school==="1" && bday === "4" ){
    $("body").append('<img src= "fee.png">');
 }
 else if (school==="2" && bday === "4" ){
   $("body").append('<img src= "okshawn.png">');
 }
 else if (school==="1" && bday ==="3" ){
   $("body").append('<img src= "toppng.png">');
}
});