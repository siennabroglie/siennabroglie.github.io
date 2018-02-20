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
            {text_area.textContent = "the sisters were ancient, even then. \n I remember their long skirts and small steps, \n moving slowly, voices crackling with delight.";}


        if (compassHeading >= 45 && compassHeading <= 135)
             {text_area.textContent = "East, to flatter, straighter roads";}


        if (compassHeading >= 135 && compassHeading <= 225)
             {text_area.textContent = "The one wooden chair \n I could see through the back door window \n faced me \n South.";}
         

        if (compassHeading >= 225 && compassHeading <= 315)
             {text_area.textContent = "2 years ago I had walked onto the back porch \n with my mother and father. Some wooden slats \n framed holes in the floor that gaped clear to the foundation. \n A rooster cries.";}


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



