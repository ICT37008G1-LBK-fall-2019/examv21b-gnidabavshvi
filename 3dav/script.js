var text="arc13581AA";
var text2="ate145123Bgt"
var regex=/^[a-zA-Z]{3}[1,3,5,8]{5}[A,B]{2}$/;
if (text.match(regex))
{
    console.log("1");
}
else {
    console.log("-1");
}
if(text2.match(regex))
{
    console.log("1");
}
else{
    console.log("-1");
}