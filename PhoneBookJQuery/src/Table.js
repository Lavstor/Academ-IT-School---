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
        console.log($(this.closest("tr")));

        $(this.closest("tr")).remove();
        currentId--;

        idReforming();
    });

    function idReforming() {
        var toChange = $(".main-table .current-number");

        if (toChange.length > 1) {
            for(var i = currentId - 2; i >= 0; i--){
                $(toChange[i]).val(i + 1);
                console.log(toChange[i])
            }
        }
    }

    var currentId = 1;
});