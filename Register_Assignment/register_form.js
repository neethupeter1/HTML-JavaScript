
document.getElementById("register").addEventListener("Click", regfn);
    

function regfn() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var loc = document.getElementById("loc").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementsByName("gender").value;


    if(fname == "") {
       // document.getElementById("fname").insertAdjacentHTML('afterend','<p id: enter; style="color: red;">Please enter valid input</p>');   
       document.getElementById("fnamepara").innerHTML = "Please enter valid input";     
    };   
    if (lname == "") {
        document.getElementById("lnamepara").innerHTML = "Please enter valid input";
    };
    if(loc == "") {
        document.getElementById("locpara").innerHTML = "Please enter valid input";
    };
    if(email =="") {
        document.getElementById("emailpara").innerHTML = "Please enter valid input";
    };
    
    if(document.getElementById("male").checked) {
        gender = document.getElementById("male").value;
    } else if(document.getElementById("female").checked) {
        gender = document.getElementById("female").value;
    } else {
        document.getElementById("genderpara").innerHTML = "Please enter valid input";
    }


    if(localStorage.details!='') {
        var users = JSON.parse(localStorage.details);
       } else {
            var users = [];
           };
              
    var regValues = {
    firstname: fname,
    lastname: lname,
    location: loc,
    email: email,
    gender: gender 
    };

    if(regValues.firstname == "" || regValues.lastname == "" || regValues.location == "" || regValues.location == "" || regValues.email == "" || regValues.gender == "") {         
        return false;
    } else {
        users.push(regValues);
        localStorage.details = JSON.stringify(users);
        var resp = JSON.parse(localStorage.details),
            len = resp.length,
            html = '';
    };
   
    //console.log(len);

    if(fname!=="" && lname!=="" && loc!=="" && email!=="" && gender!=="") {
        html = '<table border="1" style="border-collapse:collapse;">';
        html += '<tr><td>Firstname</td><td>Lastname</td><td>Location</td><td>Email</td><td>Gender</td></tr>'
      
        for(var i=0; i<len; i++) {
            html += '<tr>';
            html += '<td>' +resp[i].firstname+ '</td>';
            html += '<td>' +resp[i].lastname+ '</td>';
            html += '<td>' + resp[i].location+ '</td>';
            html += '<td>' + resp[i].email+ '</td>';
            html += '<td>' + resp[i].gender+ '</td>';
            html += '</tr>';    
        }
        html+='</table>';
        
        document.getElementById("regTable").innerHTML = html; 
        
    }
}


        
