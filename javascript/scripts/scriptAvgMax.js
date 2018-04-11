function computeAverage()
{
    var numbersArray = []; 
    var numbersFromTextBox = document.getElementById("data").value;
    var total = 0;
    var average = 0;
    numbersArray = numbersFromTextBox.split(',');
    
    if(numbersArray.length <= 9)
    {
        document.getElementById("average").innerHTML = "Please enter at least 10 numbers";
    }
    else
    {
        for(i=0; i < numbersArray.length; i++)
        {
            var currentNumber = parseInt(numbersArray[i]);
            if(currentNumber>100 || Number.isNaN(currentNumber))
            {
                document.getElementById("average").innerHTML = "Please only enter numbers between 1 and 100";
                break;
            }
            else
            {
                total += currentNumber;
                average = total/numbersArray.length;
                document.getElementById("average").innerHTML = average;
            }      
        }
    }
   
}

function computeMax()
{
    var numbersArray = []; 
    var numbersFromTextBox = document.getElementById("data").value;
    var total = 0;
    var maxNumber = 0;
    numbersArray = numbersFromTextBox.split(',');
    
    if(numbersArray.length <= 9)
    {
        document.getElementById("maximum").innerHTML = "Please enter at least 10 numbers";
    }
    else
    {
        for(i=0; i < numbersArray.length; i++)
        {   
            var currentNumber = parseInt(numbersArray[i]);
            
            if(currentNumber>100 || Number.isNaN(currentNumber))
            {
                document.getElementById("maximum").innerHTML = "Please only enter numbers between 1 and 100";
                break;
            }
            
            else if(maxNumber < currentNumber)
            {
                maxNumber = currentNumber;
                document.getElementById("maximum").innerHTML = maxNumber;
            }
        }
    }
    
}