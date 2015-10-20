document.getElementById("1").style.color = "brown";
document.getElementById("-1").style.color = "brown";
document.getElementById("2").style.color = "BurlyWood";
document.getElementById("-2").style.color = "chocolate";
document.getElementById("3").style.color = "BurlyWood";
document.getElementById("-3").style.color = "chocolate";
document.getElementById("4").style.color = "BurlyWood";
document.getElementById("-4").style.color = "chocolate";
document.getElementById("5").style.color = "BurlyWood";
document.getElementById("-5").style.color = "chocolate";
document.getElementById("6").style.color = "BurlyWood";
document.getElementById("-6").style.color = "chocolate";
document.getElementById("7").style.color = "BurlyWood";
document.getElementById("-7").style.color = "chocolate";
document.getElementById("8").style.color = "BurlyWood";
document.getElementById("-8").style.color = "darksalmon";
document.getElementById("9").style.color = "green";
document.getElementById("-9").style.color = "darksalmon";
document.getElementById("10").style.color = "green";;
document.getElementById("11").style.color = "yellow";
document.getElementById("12").style.color = "green";
document.getElementById("13").style.color = "green";

document.getElementById("2").style.opacity = 0;
document.getElementById("-2").style.opacity = 0;
document.getElementById("3").style.opacity = 0;
document.getElementById("-3").style.opacity = 0;
document.getElementById("4").style.opacity = 0;
document.getElementById("-4").style.opacity = 0;
document.getElementById("5").style.opacity = 0;
document.getElementById("-5").style.opacity = 0;
document.getElementById("6").style.opacity = 0;
document.getElementById("-6").style.opacity = 0;
document.getElementById("7").style.opacity = 0;
document.getElementById("-7").style.opacity = 0;
document.getElementById("8").style.opacity = 0;
document.getElementById("-8").style.opacity = 0;
document.getElementById("9").style.opacity = 0;
document.getElementById("-9").style.opacity = 0;
document.getElementById("10").style.opacity = 0;
document.getElementById("11").style.opacity = 0;
document.getElementById("12").style.opacity = 0;
document.getElementById("13").style.opacity = 0;

    jQuery(document).ready(function($) {
  function update() {
    $(document).click(function(){
      mouseDown = 1;
      x2 = 1;
    });
    $(document.getElementById("1")).click(function(){
      document.getElementById("2").style.opacity = 1;
    });

    $(document.getElementById("-1")).click(function(){
      document.getElementById("-2").style.opacity = 1;
    });

    $(document.getElementById("2")).click(function(){
      document.getElementById("3").style.opacity = 1;
    });

    $(document.getElementById("-2")).click(function(){
      document.getElementById("-3").style.opacity = 1;
    });

    $(document.getElementById("3")).click(function(){
      document.getElementById("4").style.opacity = 1;
    });

    $(document.getElementById("-3")).click(function(){
      document.getElementById("-4").style.opacity = 1;
    });

    $(document.getElementById("4")).click(function(){
      document.getElementById("5").style.opacity = 1;
    });

    $(document.getElementById("-4")).click(function(){
      document.getElementById("-5").style.opacity = 1;
    });

    $(document.getElementById("5")).click(function(){
      document.getElementById("6").style.opacity = 1;
    });

    $(document.getElementById("-5")).click(function(){
      document.getElementById("-6").style.opacity = 1;
    });

    $(document.getElementById("6")).click(function(){
      document.getElementById("7").style.opacity = 1;
    });

    $(document.getElementById("-6")).click(function(){
      document.getElementById("-7").style.opacity = 1;
    });

    $(document.getElementById("7")).click(function(){
      document.getElementById("8").style.opacity = 1;
    });

    $(document.getElementById("-7")).click(function(){
      document.getElementById("-8").style.opacity = 1;
    });

    $(document.getElementById("8")).click(function(){
      document.getElementById("9").style.opacity = 1;
    });

    $(document.getElementById("-8")).click(function(){
      document.getElementById("-9").style.opacity = 1;
    });

    $(document.getElementById("9")).click(function(){
      document.getElementById("10").style.opacity = 1;
    });

    $(document.getElementById("10")).click(function(){
      document.getElementById("11").style.opacity = 1;
    });

    $(document.getElementById("11")).click(function(){
      document.getElementById("12").style.opacity = 1;
    });

    $(document.getElementById("12")).click(function(){
      document.getElementById("13").style.opacity = 1;
    });


    }
    update();
  });
