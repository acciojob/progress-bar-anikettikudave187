//your JS code here. If required.
const progress=document.getElementById("progress");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const circles=document.querySelectorAll(".circle");

let currentActive=1;

next.addEventListener("click", ()=>{
	currentActive++;
	if(currentActive>circles.length){
		currentActive=circles.length;
	}
	update();
});

prev.addEventListener("click",()=>{
	currentActive--;
	if(currentActive<1){
		currentActive=1;
	}
	update();
});

function update(){
	circles.forEach((circle, index)=>{
		if(index < currentActive){
			circle.classList.add("active");
		}else{
			circle.classList.remove("active");
		}
	});

	const activeCount=document.querySelectorAll(".circle.active").length;
	const total= circles.length-1;
	progress.style.width=(activeCount-1)/total*100+"%";

	prev.disabled=currentActive===1;
	next.disabled=currentActive===circles.length;
}
