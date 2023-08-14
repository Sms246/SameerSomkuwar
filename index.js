let string = "";                                                 // String variable which we will pass in output screen.

let buttons = document.querySelectorAll("button");

for(var i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click",function (event)         // Mapping all buttons using event listener.
    {  
        if(event.target.innerHTML == "=")                        // When '=' button is clicked, condition in if statement will be true and commands inside will be performed.
        {
            string = eval(string);
            document.querySelector(".input").value = string;
        }
        else if(event.target.innerHTML == "C")                   // When "C" button is clicked the output screen will be cleared.
        {
            string = "";
            document.querySelector(".input").value = string;            
        }
        else                                                    // For rest of the buttons this commands will be performed.
        {
            string = string + event.target.innerHTML;
            document.querySelector(".input").value = string;
        }
    });
}