function runUser()
{
    var now = new Date();
    var hour = now.getHours();
    var nameOfUser;
    var greetingString = "";

    if( hour < 12)
    {
        greetingString += "Good Morning, "
        //document.getElementById("greeting").innerHTML = "<h1>Good Morning, ";   
    }
    else
    {
       hour = hour - 12;

        if(hour < 6)
        {
            greetingString += "Good Afternoon, ";
            //document.getElementById("greeting").innerHTML = "<h1>Good Afternoon, ";
        }
        else
        {
            greetingString += "Good Evening, ";
           //document.getElementById("greeting").innerHTML = "<h1>Good Evening, ";
        }
    }

    if(document.cookie)
    {
        var myCookie = unescape(document.cookie);
        var cookieTokens = myCookie.split("=");
        nameOfUser = cookieTokens[1];
    }

    else
    {
        name = window.prompt("Please enter your name");
        document.cookie = "name=" + escape(name);
    }

    greetingString+= name;

    document.getElementById("greeting").innerHTML = greetingString;
    document.getElementById("notrightperson").innerHTML ="<a href = 'javascript:wrongPerson()'>" + "Click here if you're not "
                     + name + "</a>";
}
        
function wrongPerson()
{
    document.cookie = "name=null;" + " expires=Thu, 01-Jan-95 00:00:01 GMT";

    location.reload();
}