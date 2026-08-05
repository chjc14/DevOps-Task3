document.getElementById("registrationForm").addEventListener("submit", function(event){

event.preventDefault();

let fname = document.getElementById("fname").value.trim();
let lname = document.getElementById("lname").value.trim();
let father = document.getElementById("father").value.trim();
let mother = document.getElementById("mother").value.trim();
let dob = document.getElementById("dob").value;

let phone = document.getElementById("phone").value.trim();
let email = document.getElementById("email").value.trim();

let photo = document.getElementById("photo").files.length;
let sign = document.getElementById("sign").files.length;

let per10 = document.getElementById("per10").value;
let per12 = document.getElementById("per12").value;
let perug = document.getElementById("perug").value;

let namePattern = /^[A-Za-z ]+$/;
let phonePattern = /^[6-9][0-9]{9}$/;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// First Name
if(fname === ""){
alert("First Name is required");
return;
}

if(!namePattern.test(fname)){
alert("First Name should contain only alphabets");
return;
}

// Last Name
if(lname === ""){
alert("Last Name is required");
return;
}

if(!namePattern.test(lname)){
alert("Last Name should contain only alphabets");
return;
}

// Father Name
if(father === ""){
alert("Father Name is required");
return;
}

if(!namePattern.test(father)){
alert("Father Name should contain only alphabets");
return;
}

// Mother Name
if(mother === ""){
alert("Mother Name is required");
return;
}

if(!namePattern.test(mother)){
alert("Mother Name should contain only alphabets");
return;
}

// Date of Birth
if(dob === ""){
alert("Please Select Date of Birth");
return;
}

let today = new Date();
let birthDate = new Date(dob);

if(birthDate >= today){
alert("Invalid Date of Birth");
return;
}

// Age Validation
let age = today.getFullYear() - birthDate.getFullYear();

if(age < 16){
alert("Candidate must be at least 16 years old");
return;
}

// Phone Number
if(phone === ""){
alert("Phone Number is required");
return;
}

if(!phonePattern.test(phone)){
alert("Enter a valid 10-digit Phone Number");
return;
}

// Email
if(email === ""){
alert("Email Address is required");
return;
}

if(!emailPattern.test(email)){
alert("Enter a valid Email Address");
return;
}

// 10th Percentage
if(per10 !== "" && (per10 < 0 || per10 > 100)){
alert("10th Percentage should be between 0 and 100");
return;
}

// 12th Percentage
if(per12 !== "" && (per12 < 0 || per12 > 100)){
alert("12th Percentage should be between 0 and 100");
return;
}

// Graduation Percentage
if(perug !== "" && (perug < 0 || perug > 100)){
alert("Graduation Percentage should be between 0 and 100");
return;
}

// Photo Upload
if(photo === 0){
alert("Please Upload Your Photo");
return;
}

// Signature Upload
if(sign === 0){
alert("Please Upload Your Signature");
return;
}

alert("Registration Submitted Successfully!");

document.getElementById("registrationForm").reset();

});