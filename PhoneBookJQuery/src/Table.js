$(document).ready(function () {
    $(".main-container").on('click', '#add-button', function () {
        errorMassage.css("display : none");

        var inputNodes = [$("#last-name"), $("#first-name"), $("#telephone-number")];

        if (!isValid(inputNodes)) {
            errorMassage.css("display : block");
            errorMassage.val("321");
            return;
        }

        if (!isValidPhone(inputNodes[2])) {
            errorMassage.css("display : block");
            console.log(errorMassage);
            errorMassage.text("123");
            return;
        }

        $("#telephone-holder-info").append($("" +
            "<tr>" +
            "<td class='current-number'>" + currentId + "</td>" +
            "<td class='last-name'>" + $(inputNodes[0]).val() + "</td>" +
            "<td class='first-name'>" + $(inputNodes[1]).val() + "</td>" +
            "<td class='telephone'>" + $(inputNodes[2]).val() + "</td>" +
            "<td><button type='button' class='delete-button'>X</button></td>" +
            "</tr>"));

        $(inputNodes[0]).val('');
        $(inputNodes[1]).val('');
        $(inputNodes[2]).val('');

        currentId++;
    }).on("click", ".delete-button", function () {
        var trDelete = $(this).closest("tr");
        var deleteIndex = $(trDelete).find(".current-number").text();

       $.confirm({
            title: 'Confirm!',
            content: 'Delete?!',
            buttons: {
                confirm: function () {
                    $(trDelete).remove();
                    currentId--;

                    idReforming(deleteIndex);
                },
                cancel: function () {
                   this.close();
                }
            }
        });
    });

    function idReforming(startIndex) {
        var toChange = $(".main-table .current-number");

        if (toChange.length > 1) {
            for (var i = startIndex - 1; i < toChange.length; i++) {
                $(toChange[i]).text(i + 1);
            }
        }
    }

    function isValid(nodes) {
        var isValid = true;

        nodes.forEach(function (node) {
            if ($(node).val() === "") {
                node.css({
                    "background-color": "#FE2C2A"
                });

                isValid = false;
            } else {
                node.css({
                    "background-color": "#FEEED6"
                });
            }
        });

        return isValid;
    }

    function isValidPhone(telephoneNode) {
        var text = $(telephoneNode).val();
        var nodes = $(".main-table .telephone").filter(function (index, node) {
            return $(node).text() === text;
        });

        return nodes.length <= 0;
    }

    var currentId = 1;
    var errorMassage = $("#error-massage");
});