function toggleButton(){

    //get attribute value
    //if left, then translate to right, change attribtue value to right.
    //if right, then translate to left, change attribute value to left.
 
    var side = $(".toggle-outer").attr("data-side");
    if(side == "left")
    {
       $(".movable").removeClass("move-left");
       $(".movable").addClass("move-right");
       $(".toggle-outer").attr("data-side", "right");
 
       //wait for 1 second, if the state is still right, then change animation
       setTimeout(function (){
          if($(".toggle-outer").attr("data-side") == "right")
          {
             //do whatever you want to do here.
          }
          // Something you want delayed.           
        }, 500);
    }
    else if(side == "right")
    {
       $(".movable").removeClass("move-right");
       $(".movable").addClass("move-left");
       $(".toggle-outer").attr("data-side", "left");
 
       setTimeout(function (){
          if($(".toggle-outer").attr("data-side") == "left")
          {
             //do whatever you want to do here.
          }
          // Something you want delayed.           
        }, 500);
    }
    else
    {
       location.reload(true);
    }
 }