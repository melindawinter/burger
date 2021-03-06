// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-eat").on("click", function (event) {
    var id = $(this).data("id");
    var newEat = $(this).data("neweat");
    console.log("devour button");
    var newEatState = {
      devoured: newEat,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState,
    }).then(function () {
      console.log("changed eat to", newEat);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("Form is working");

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      // devoured: false,
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
