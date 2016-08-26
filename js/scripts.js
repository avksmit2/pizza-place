//Back-end
function Customer(custName, phone) {
this.custName = custName;
this.phone = phone;
}
function Pizza(size) {
this.toppings = getToppings();
this.size = size;
this.price = getPizzaPrice();
}
function Store(custName) {
this.custName = custName;
this.pizzaNum = 0;
// this.size = "";
// this.toppings = [];
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
//Front-end
$(document).ready(function() {
  var store;
  var num = num++

  var toppings = ["Pepperoni", "Hamburger", "Sausage", "Olives", "Onions", "Jalapenos", "Pineapple"];
  var getToppings = function() {
    toppings.forEach(function(toppings) {
      if ($("#" + topping + ".val()").checked) {
        pizza1.toppings.push(topping);
      }
    });
  }

  $("form#orderForm").submit(function(event) {
    var custName = $("#custName").val();
    var phone = $("#phone").val();
    var size = $("#size").val();
    if (!pizza1) {
      newCustomer = new Customer(custName, phone);
      store = new Store(custName);
      pizza1 = new Pizza(size);
    }
    $("#priceSum #size").text("Size selected: " + store.size)
    store.toppings.forEach(function(topping) {
      $("#priceSum #toppings").append("<li>" + topping);
    })
    $("#priceSum #price").text("Total Price: " + store.price);
    event.preventDefault();
  });
});
