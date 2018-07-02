// this is public javascript file 
$(function() {
    // add a burger
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

     var newBurger = {
            burger_name: $("#burger01").val().trim()
        };

        console.log(newBurger.burger_name + "in js file")
//test
$.post("/api/burgers", newBurger, function(data){
    if(data) {
        location.reload();
    }
})
});

        

$(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        // console.log("changed to devour!");

        var newDevour = {
            devoured: true
        };

        $.ajax("/api/burgers/update/" + id, {
            type: "PUT",
            data: newDevour,
        }).then(
            function (data) {
                console.log("YUMMM Eating Burger # ", id);
                location.reload();

            }
        );

    });
    });