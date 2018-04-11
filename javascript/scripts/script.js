// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



function openPage(pageName,elmnt,color) 
{
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) 
    {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) 
    {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

}

// document.getElementById("myButton").onclick = function () {
//        location.href = "www.yoursite.com";
//    };


function validateForm()
{
    ///////////////////////////////////Name////////////////////////////////////////////////////////////
    var nameOfUser = document.getElementById("name").value;
    nameOfUser = nameOfUser.replace(/ +/g, "");
    var nameRegEx = /^[a-zA-Z]+$/;
    var incorrectFields = false;
    var errorMessage = "";
    if(!nameOfUser.match(nameRegEx))
    {   
        incorrectFields = true;
        errorMessage += "Please enter a name that includes only letters of alphabet\n";
        document.getElementById("name").value = "";
    }
    //////////////////////////////////Address///////////////////////////////////////////////////////
    var address = document.getElementById("address").value;
    var addressRegEx = /^[a-zA-Z0-9\s,'-]*$/
    if(addressRegEx.test(address) == false)
    {
        incorrectFields = true;
        errorMessage += "Please enter a valid home address\n";
        document.getElementById("address").value = "";
    }
    ////////////////////////////////Checkboxes//////////////////////////////////////////////////////
    var form = document.getElementById("survey");
    els = form.elements["response[]"];
    var checkedBoxCounter = 0;
    for (i = 0; i < els.length; i += 1) 
    {
        if (els[i].checked) 
        {
            checkedBoxCounter++;
        }
	}
    if(checkedBoxCounter < 2)
    {
        incorrectFields = true;
        errorMessage += "Please check at least two boxes for what you liked most about our campus\n";
    }
    //////////////////////////////Radio Button///////////////////////////////////////////////////////
    var radios = document.getElementsByName("interest");
    var clickedRadioCounter = 0;
    
    for (i = 0; i < radios.length; i += 1) 
    {
        if (radios[i].checked) 
        {
            clickedRadioCounter++;
        }
	}
    if(clickedRadioCounter < 1)
    {
        incorrectFields = true;
        errorMessage += "Please click on at least one option on how you became interested in George Mason\n";
    }    
    ///////////////////////////////Email Address/////////////////////////////////////////////////////
    var emailAddress = document.getElementById("email").value;
    var emailRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (emailRegEx.test(emailAddress) == false) 
    {
        incorrectFields = true;
        errorMessage += "Please enter a valid email\n";
        document.getElementById("email").value = "";
    }
    ////////////////////////////Incorrect Fields Check- Pop up window/////////////////////////////////////////////
    if(incorrectFields)
    {
        alert("The following field(s) are incorrect and must be corrected before continuing:\n\n" + errorMessage);
        return false;
    }
    return true;   
}

function resetForm() 
{
    document.getElementById("survey").reset();
}
