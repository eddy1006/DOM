
$(document).ready(function(){   //use this syntax if you are putting your scripts inside head part of html...it makes sure to run our code
  $("h1").css("color","red")   // only after it gets confirmation that jquery library is loaded.
});

$("h1").css("color","red");

//document.querySelectorAll("button") is same as
$("button")

$("button").text("Dont click me")  //for changing text node;
$("button").html("<em>Dont click me</em>")  // for inner html


console.log($("a").attr("href")) // get the attribute value
$("a").attr("href","https://www.instagram.com");  //set the attribute

$("h1").click(function(){   //adding an on click event listener to our h1 element
  $("h1").css("color","purple");
})

$("button").click(function(){    //with jquery we can directly apply event listeners to all buttons without using for loops
    $("h1").css("color","purple");
})

$("body").keypress(function(event){   //couldve also used document instead of body
  console.log(event.key);
  $("h1").text(event.key);
})

$("h1").on("mouseover",function(){   //another way of adding event listeners by using on function.
  $("h1").css("color","blue");
})

$("button").on("click",function(){  //animation using jquery
  $("h1").toggle()  //toggle visibility
  $("h1").fadeToggle();  //fade in fade out toggle
  $("h1").slideToggle();
  $("h1").slideUp().slideDown().animate({opacity:0.5}) //animation chain and you can create custom animations using  animate function.
})
