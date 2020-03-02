$(document).ready(function () {
    $(".main-container").on('click', '#add-button', function () {
        console.log("123");

        $("#telephone-holder-info").append($("" +
            "<tr>" +
            "<td class='current-number'>" + currentId + "</td>" +
            "<td>" + $("#last-name").val() + "</td>" +
            "<td>" + $("#first-name").val() + "</td>" +
            "<td>" + $("#telephone-number").val() + "</td>" +
            "<td><button type='button' class='delete-button'>X</button></td>" +
            "</tr>"));

        currentId++;
    }).on("click", ".delete-button", function () {
        console.log("delete");
        console.log($(this.parentNode.parentNode .currentNumber));
        $(this.parentNode.parentNode).remove();
        currentId--;
    });

    function idReforming(toDelete) {
    }

    var currentId = 1;
});