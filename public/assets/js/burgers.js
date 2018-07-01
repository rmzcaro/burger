// this is public javascript file 
$(function () {
    $(".add-burger").on("submit", function(event) {
        // var id = $(this).data("id");
        // var newDevour = $(this).data("")

        event.preventDefault();

        var newBurger = {
            name: $("#burger01").val().trim()
        };
        console.log(newBurger.name);


        // send the post 
        $.post("/api/burgers", newBurger, function(data){
            if (data) {
                location.reload();
            }
        })
    });
    // $(".change-devour").on("click", function(event) {
    //     // var id = $(this).data("id");
    //     // var newDevour = $(this).data("")
    //     console.log("changed to devour!");
    // });

});
