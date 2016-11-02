var cheesePizzas = 0;
var meatPizzas = 0;
var veggiePizzas = 0;
var customPizzas = 0;

function checkTopping(topping)
{
  var order = document.getElementById("pizzaText").value;
  order = order.toLowerCase();
  topping = topping.toLowerCase();
  return order.search(topping) >= 0;
}

function order()
{

  var hasCheese = checkTopping("cheese");
  var hasPepperoni = checkTopping("pepperoni");
  var hasSausage = checkTopping("sausage");
  var hasOnion = checkTopping("ONION");
  var hasOlive = checkTopping("olive");
  var hasMushroom = checkTopping("Mushroom");

  console.log(order);
  if( hasCheese && !hasPepperoni && !hasSausage && !hasOnion
      && !hasOlive && !hasMushroom )
  {
      window.alert("Cheese Pizza has been ordered!");
      cheesePizzas++;
  }
  else if( hasCheese && hasPepperoni && hasSausage && !hasOnion
      && !hasOlive && !hasMushroom )
  {
      window.alert("Meat Lovers Pizza has been ordered!");
      meatPizzas++;
  }
  else if( hasCheese && !hasPepperoni && !hasSausage && hasOnion
      && hasOlive && hasMushroom )
  {
      window.alert("Veggie Pizza has been ordered!");
      veggiePizzas++;
  }
  else
  {
      customPizzas++;
  }
  setCookie("cheese",cheesePizzas);
  setCookie("meatlover",meatPizzas);
  setCookie("veggie",veggiePizzas);
  setCookie("custom",customPizzas);
}

// put the info in:
/*
<p id="cheeseCount"></p>
<p id="meatCount"></p>
<p id="vegCount"></p>
<p id="customCount"></p>
*/
function checkoutOrders()
{
  var numCheese = getCookie("cheese");
  var numMeat = getCookie("meatlover");
  var numVeg = getCookie("veggie");
  var numCustom = getCookie("custom");

  document.getElementById("cheeseCount").innerHTML = numCheese + " Cheese pizzas";
  document.getElementById("meatCount").innerHTML = numMeat + " Meat Lovers pizzas";
  document.getElementById("vegCount").innerHTML = numVeg + " Veggie pizzas";
  document.getElementById("customCount").innerHTML = numCustom + " Custom pizzas";



}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
