//3)change
let selected=document.querySelector("select");
let device=document.querySelector("#device")
selected.addEventListener("change",demo);

function demo(dets)
{
   // console.log(dets.target.value);
   device.textContent=`${dets.target.value}  Device Selected` ;
}