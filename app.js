
let form=document.getElementById("mainForm");

form.addEventListener("submit",(event)=>{
event.preventDefault();
data();
})

function data(){
let mn=document.getElementById("mn").value;
let an=document.getElementById("an").value;
let zn=document.getElementById("zn").value;
let hn=document.getElementById("hn").value;
let fn=document.getElementById("fn").value;
let mo=document.getElementById("mo").value;
let ao=document.getElementById("ao").value;
let zo=document.getElementById("zo").value;
let ho=document.getElementById("ho").value;
let fo=document.getElementById("fo").value;
let pr=document.getElementById("price").value;

let dm=mn-mo;
let da=an-ao;
let dz=zn-zo;
let dh=hn-ho;
let df=fn-fo;

let ttld=da+dz+dh+df;

let pm=(dm/ttld)*pr;
let pa=(da/ttld)*pr;
let pz=(dz/ttld)*pr;
let ph=(dh/ttld)*pr;
let pf=(df/ttld)*pr;

let dataPosition=document.getElementById("data");
let displayData=document.createElement("allData");

displayData.classList.add("m-5","shadow","col-8");
displayData.innerHTML=`
<div class="input-group mb-2 col-10">
            <input type="number" class="form-control" placeholder="${pm}" disabled>
            <span class="input-group-text" >التكلفة على العداد الرئيسي</span>
          </div>
          <div class="input-group mb-2 col-10" >
            <input type="number" class="form-control" placeholder="${pa}" disabled>
            <span class="input-group-text" >التكلفة على احمد </span>
          </div>
          <div class="input-group mb-2 col-10" >
            <input type="number" class="form-control" placeholder="${pz}" disabled>
            <span class="input-group-text" >التكلفة على زغلول </span>
          </div>
          <div class="input-group mb-2 col-10" >
            <input type="number" class="form-control" placeholder="${ph}" disabled>
            <span class="input-group-text" >التكلفة على هنداوي </span>
          </div>
          <div class="input-group mb-2 col-10">
            <input type="number" class="form-control" placeholder="${pf}"  disabled>
            <span class="input-group-text" >التكلفة على فيصل </span>
          </div>
          <hr>
          
`;
dataPosition.appendChild(displayData);
}