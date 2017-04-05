function checkoutOrders()
{
  var checkoutName = getCookie("name");
  console.log(checkoutName);
}

function getCustomerName(){

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
  setCookie("name",name.value, 1);
  window.location.href="checkout.html";
}

//setCookie and getCookie are courtesy of w3schools
//https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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
