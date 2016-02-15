$(document).ready(function() {
  $("form#portland-profile").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var style = $("select#style").val();

//Need help figuring this part out
    var profile = style;

    if (style === 'skinny-jeans') {
      profile = "You are a hipster";
    }

      // if (style ==== 'polo-shirts') {
      //   profile = "You are a bro.";
      //   }
      //
      // if (style ==== 'joggers') {
      //   var profile = "You are a bro.";
      //   }

    //   $("#style").empty().append(profile);
      $("#profile1").show();
      $("#profile2").show();
      $("#profile3").show();
    // else {
    //   alert('Please enter your age.');
    // }
    //
    // event.preventDefault();
  });
});
