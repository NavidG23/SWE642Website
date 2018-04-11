function validateZip()
{
    var currentZipcode = document.getElementById("zip").value;
    var zipFound = false;
    document.getElementById("city").innerHTML = "";
    document.getElementById("state").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    var zipRegEx = /^[0-9]{5}(?:-[0-9]{4})?$/
    
      $.ajax({
//        url : "https://api.jsonbin.io/b/5aabf8cdaba566611f330081",
        url : "https://navidg23.github.io/SWE642Website/zipcodes.json",
        type : "GET",
        dataType:"jsonp",
        success : function(data) 
        { 
            if (zipRegEx.test(currentZipcode) == false) 
            {
                document.getElementById("error").innerHTML = "Zip code is invalid"
                return;
            }
            for(var i = 0; i < data.zipcodes.length; i++)
            {
                if(currentZipcode == (data.zipcodes[i].zip))
                {
                    zipFound = true;
                    document.getElementById("city").innerHTML = data.zipcodes[i].city;
                    document.getElementById("state").innerHTML = data.zipcodes[i].state;   
                }
            }
            if(zipFound == false)
            {
                document.getElementById("error").innerHTML = "Zip code not found"
            }
        },
        error : function(request,error)
        {
            alert("Request: "+JSON.stringify(request));
        }
    });
  }