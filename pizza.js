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
  var pep = document.getElementById("checkPepperoni").checked;
  var sausage = document.getElementById("checkSausage").checked;

  if(veg == true && pep == true && sausage == true)
  {
    console.log("Order received by " + name.value);
    console.log("Order is a supreme pizza");
  }
  else if (pep == true && sausage == true)
  {
    console.log("Order received by " + name.value);
    console.log("Order is a meatlovers pizza");
  }

  else if(veg == false && pep == false && sausage == false)
  {
    console.log("Order received by " + name.value);
    console.log("Order is a cheese pizza");
  }
}
