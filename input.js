function getRadioValue(groupName, groupVal) {
  var valRet = 0;
  var radios = document.getElementsByName(groupName);
  for (var i = 0; i < radios.length; i++) { 
    if (radios[i].checked) {
      groupVal = i; 
      break;
    }
  }
  return groupVal;
};

document.addEventListener("DOMContentLoaded", function(event) { 
  var typeInput = document.getElementById('t-type');
  var intInput = 11;
  var enjInput = 11;
  var lenInput = document.getElementById('t-length');
  var noteInput = document.getElementById('t-notes');
   var goalInput = document.getElementById('t-goals');

  document.querySelector('form.train-form').addEventListener('submit', function(e) {
    e.preventDefault();
    //console.log(e);

    intInput = (getRadioValue("t-i", intInput)+1);
    enjInput = (getRadioValue("t-e", enjInput)+1);

    //var outstr = 

    console.log("{Type: "+typeInput.value+"}");
    console.log("{Intensity: "+intInput+"}"); 
    console.log("{Enjoyment: "+enjInput+"}"); 
    console.log("{Length: "+lenInput.value+"}");
    console.log("{Notes: "+noteInput.value+"}"); 
    console.log("{Injuries: "+injInput.value+"}");
    console.log("{Goals: "+goalInput.value+"}")
  });
});