let Details=[];


let studentDetails=document.getElementById("studentDetails");
let f_name=document.getElementById("firstName");
let l_name=document.getElementById("lastName");
let email=document.getElementById("Email");
let qualifaction=document.getElementById("Qualification");
let city=document.getElementById("city");
let Male=document.getElementById("male");
let female=document.getElementById("female");
let html=document.getElementById("html");
let css=document.getElementById("css");
let javascript=document.getElementById("javascript");
let python=document.getElementById("python");
let java=document.getElementById("java");

let studentsData=[];
if(Male.checked===true){
	female.checked=false;
}
if(female.checked===true){
	male.checked=false;
}

function called(){
	
	let f=document.getElementById("f_note");
	let count=studentsData.length;
	let Gender="";
	if(Male.checked===true){
		Gender="Male";
	}
	if(female.checked===true){
		Gender="Female";
	}
	
	let Skills=[];
	if(html.checked===true){
		Skills.push(html.value);
	}
	if(css.checked===true){
		Skills.push(css.value);
	}
	if(javascript.checked===true){
		Skills.push(javascript.value);
	}
	if(python.checked===true){
		Skills.push(python.value);
	}
	if(java.checked===true){
		Skills.push(java.value);
	}
	let profile="";
	if(Gender==="Male"){
		profile="https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg";
	}
	if(Gender==="Female"){
		profile="https://d29fhpw069ctt2.cloudfront.net/clipart/92161/preview/dagobert83_female_user_icon_preview_d35c.png";
	}
	

	if((f_name.value==="")||(email.value==="")){
		f.textContent="Note:please enter complete details";
	}
	
	else if((f_name.value!=="")&&(email.value!=="")){
		f.textContent="";
		let studentData={
			id:count+1,
			firstName:f_name.value,
			lastName:l_name.value,
			email:email.value,
			Qualification:qualifaction.value,
			imageURL:profile,
			city:city.value,
			gender:Gender,
			skills:Skills
		};
		
		studentsData.push(studentData);
		studentList(studentData);
	}
	Skills.length=0;
	html.checked=false;
	css.checked=false;
	javascript.checked=false;
	qualifaction.value="";
	python.checked=false;
	java.checked=false;
	Male.checked=false;
	female.checked=false;
	f_name.value="";
	l_name.value="";
	email.value="";
	city.value="";
}

let submitBtn=document.getElementById("submitBtn");
submitBtn.onclick=function(){
	called();
};

function studentList(details){
	let li=document.createElement("li");
	li.classList.add("d-flex","mb-3");
	li.id="list"+details.id;
	li.id="li_1";
	
	let div_1=document.createElement("div");
	div_1.classList.add("col-8","studentBox1","p-2");
	li.appendChild(div_1);
	
	let title=document.createElement("h4");
	title.textContent="Description";
	div_1.appendChild(title);
	
	let first_name=document.createElement("p");
	first_name.textContent="NAME:"+details.firstName+" "+details.lastName;
	first_name.classList.add("mb-0");
	div_1.appendChild(first_name);
	
	let emailId=document.createElement("p");
	emailId.textContent="EMAIL:"+details.email;
	emailId.classList.add("mb-0");
	div_1.appendChild(emailId);
	
	let Education=document.createElement("p");
	Education.textContent="EDUCATION QUALIFICATION:"+details.Qualification;
	Education.classList.add("mb-0");
	div_1.appendChild(Education);
	
	let city=document.createElement("p");
	city.textContent="CITY:"+details.city;
	city.classList.add("mb-0");
	div_1.appendChild(city);
	
	let Gender=document.createElement("p");
	Gender.textContent="GENDER:"+details.gender;
	Gender.classList.add("mb-0");
	div_1.appendChild(Gender);
	
	let Skills=document.createElement("p");
	Skills.textContent="SKILLS:"+details.skills;
	Skills.classList.add("mb-0");
	div_1.appendChild(Skills);
	
	
	let div=document.createElement("div");
	div.classList.add("justify-content-end");
	li.appendChild(div);
	
	let Image=document.createElement("img");
	Image.src=details.imageURL;
	Image.classList.add("mb-0");
	div.appendChild(Image);
	
	
	studentDetails.appendChild(li);
}
