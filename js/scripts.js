//Back-end
function Customer(custName, phone) {
this.custName = custName;
this.phone = phone;
}

function Pizza(size, toppings) {
this.toppings = toppings;
this.size = size;
this.price = 0;
}

Pizza.prototype.getPizzaPrice = function() {
  if (this.size === "Small") {
    this.price = 7.00;
  } else if (this.size === "Medium") {
    this.price = 9.00;
  } else if (this.size === "Large") {
    this.price = 11.00;
  } else {
    this.price = 0;
  }
  return this.price += this.toppings.length * 1.50;
  store.price += this.price;
}
var getToppings = function() {
  var selectedToppings = []
  var toppings = document.getElementsByClassName('toppings');
  for (var i=0;i<toppings.length;i++) {
    if (toppings[i].checked) {
      selectedToppings.push(toppings[i].id);
    }
  };
  return selectedToppings;
}

//Front-end
$(document).ready(function() {
  var pizza;

  $("form#orderForm").submit(function(event) {
    var custName = $("#custName").val();
    var phone = $("#phone").val();
    var size = $("#selectSize #size").val();
    var toppings = getToppings();
    event.preventDefault();

    newCustomer = new Customer(custName, phone);
    pizza = new Pizza(size, getToppings());

    var price = pizza.getPizzaPrice();
    $("#priceSum #price").text("Total Price: " + pizza.getPizzaPrice());
    $(".share").show();
  });
});
