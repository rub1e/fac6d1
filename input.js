// function getRadioValue(groupName, groupVal) {
//   var valRet = 0;
//   var radios = document.getElementsByName(groupName);
//   for (var i = 0; i < radios.length; i++) { 
//     if (radios[i].checked) {
//       groupVal = i; 
//       break;
//     }
//   }
//   return groupVal;
// };

document.addEventListener("DOMContentLoaded", function(event) { 
  // var typeInput = document.getElementById('t-type');
  // var intInput = 11;
  // var enjInput = 11;
  // var lenInput = document.getElementById('t-length');
  // var noteInput = document.getElementById('t-notes');
  //  var goalInput = document.getElementById('t-goals');

  var name_div = document.getElementById("name");
  var description_div = document.getElementById("description");
  var food_div = document.getElementById("food");
  
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = name_div.getElementsByTagName("input")[0].value;
    // console.log("name: " + name);

    var radioCheck;
    var radios = description_div.getElementsByTagName("input");
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        radioCheck = radios[i].value;
        break;
      }
    }
    console.log(name + " is " + radioCheck + "!");
  });

  //   intInput = (getRadioValue("t-i", intInput)+1);
  //   enjInput = (getRadioValue("t-e", enjInput)+1);

  //   //var outstr = 

  //   console.log("{Type: "+typeInput.value+"}");
  //   console.log("{Intensity: "+intInput+"}"); 
  //   console.log("{Enjoyment: "+enjInput+"}"); 
  //   console.log("{Length: "+lenInput.value+"}");
  //   console.log("{Notes: "+noteInput.value+"}"); 
  //   console.log("{Injuries: "+injInput.value+"}");
  //   console.log("{Goals: "+goalInput.value+"}")
});