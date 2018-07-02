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
});
        

// $(".change-devour").on("click", function(event) {
    //     // var id = $(this).data("id");
    //     // var newDevour = $(this).data("")
    //     console.log("changed to devour!");
    // });

    // delete
    // $(".delete-burger").on("click", function (event) {
    //     var id = $(this).data("id");

    //     $.ajax("/api/burgers/" + id, {
    //         type: "DELETE"
    //     }).then(
    //         function () {
    //             console.log("hi deleting burger", id);
    //             location.reload();

    //         }
    //     );
    // });


    