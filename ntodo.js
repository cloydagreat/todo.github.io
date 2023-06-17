// to-do list javaScript

const dList = document.getElementById("dList");
const button = document.getElementById("butt");
const input = document.getElementById("input");
const cancel = document.getElementById("s-file");

function clicki(){
	
	if(input.value === ""){
		alert("nigga write something")
	}
	else{
	let li = document.createElement("li");
	clone = cancel.cloneNode(true);
	clone.style.display="block";
		
	let span = document.createElement("span");
	span.appendChild(clone);	
	li.innerHTML = input.value;
	li.appendChild(span);
	dList.appendChild(li);
	button.style.backgroundColor="green";		
	}
	
	
	input.value = "";
	showSave()
	
	
	//clone.addEventListener("click", function(e){
	//li.remove();
	//showSave();
	//},false)
}


	
dList.addEventListener("click", function(e) {
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("check");
		showSave();
	}
	else if(e.target.id === "s-file"){
		e.target.parentNode.parentNode.remove();
		showSave()
	}
})	


function showSave(){
	localStorage.setItem("cloy" ,JSON.stringify(dList.innerHTML));
}

function get(){
	dList.innerHTML = JSON.parse(localStorage.getItem("cloy"));
}
get();






