document.addEventListener("DOMContentLoaded", function(event) { 
  var name_div = document.getElementById("name");
  var description_div = document.getElementById("description");
  var food_div = document.getElementById("food");
  
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = name_div.getElementsByTagName("input")[0].value;
    var radioCheck;
    // 11-18 on one line + clearer !!!!!
    // radios.reduce!
    var radios = description_div.getElementsByTagName("input");
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        radioCheck = radios[i].value;
        break;
      }
    }
    console.log(name + " is " + radioCheck + "!");
  });
});
