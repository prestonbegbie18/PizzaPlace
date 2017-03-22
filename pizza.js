window.onload = showValues;

function showValues()
{
  var veg = document.getElementById("checkVeggies");
  //veg.defaultChecked = true;
  var name = document.getElementById("orderName");
  //name.value = "Preston";
  console.log("Finished Running JavaScript");
}

function order(){

  var name = document.getElementById("orderName");
  //get the status of the check box
  var veg = document.getElementById("checkVeggies").checked;
  var pepperoni = document.getElementById("checkPepperoni").checked;
  var sausage = document.getElementById("checkSausage").checked;

  //check if each checkbox is checked
  if(pepperoni && sausage && !veg)
  {
    console.log(name.value + " ordered a Meat Lovers Pizza");
  }
  else if(veg && !pepperoni && !sausage)
  {
    console.log(name.value + " ordered a Veggie Pizza");
  }
  else if(veg && pepperoni && sausage)
  {
    console.log(name.value + " ordered a Supreme Pizza");
  }
  else if(!veg && !pepperoni && !sausage)
  {
    console.log(name.value + " ordered a Cheese Pizza");
  }
  else
  {
    console.log("Custom pizza received by " + name.value)
  }
}
