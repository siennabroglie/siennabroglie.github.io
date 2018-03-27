//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = 360 - e.alpha;
        }
        
        
        //additions
        //|| or, && and, == 

        if (compassHeading >= 1 && compassHeading <= 360) 
            {text_area.textContent = compassHeading;}


        if (compassHeading >= 315 || compassHeading <= 45)
            {text_area.textContent = " NORTH | does not really exist | eather does not exist, electromagnetic waves have no medium | the speed of light is the same to all viewers and not relative ";}


        if (compassHeading >= 45 && compassHeading <= 135)
             {text_area.textContent = " EAST | does not really exist | light has a fixed constant speed independent of any state of motion | the principle of invarient light speed ";}


        if (compassHeading >= 135 && compassHeading <= 225)
             {text_area.textContent = " SOUTH | does not really exist | physical laws are independent of the inertial system | the principle of relativity ";}
         

        if (compassHeading >= 225 && compassHeading <= 315)
             {text_area.textContent = " WEST | does not really exist | there is no way to measure a[the] fixed central point of our universe | the principle of special relativity ";}


        //calls function to alter content based on heading
       // myOrientation();
    }

//device orientation that can track orientation on space
	window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
	}



