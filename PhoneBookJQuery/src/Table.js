$(document).ready(function () {
    $(".main-container").on('click', '#add-button', function () {
        var inputNodes = [$("#last-name"), $("#first-name"), $("#telephone-number")];

        var lastName = inputNodes[0];
        var firstName = inputNodes[1];
        var phone = inputNodes[2];

        if (!isValid(inputNodes)) {
            $(errorMassage).css("display", "block");
            $(errorMassage).text("Заполните все поля!");

            return;
        }

        if (!isValidPhone(inputNodes[2])) {
            phone.css({
                "background-color": "#FE2C2A"
            });

            $(errorMassage).css("display", "block");
            $(errorMassage).text("Такой номер уже есть!");
            return;
        }

        $(errorMassage).css("display", "none");

        $("#telephone-holder-info").append($("" +
            "<tr>" +
            "<td class='check-box'><label><input type='checkbox'></label></td>" +
            "<td class='current-number'>" + currentId + "</td>" +
            "<td class='last-name'>" + $(lastName).val() + "</td>" +
            "<td class='first-name'>" + $(firstName).val() + "</td>" +
            "<td class='telephone'>" + $(phone).val() + "</td>" +
            "<td><button type='button' class='delete-button'>X</button></td>" +
            "</tr>"));

        $(lastName).val('');
        $(firstName).val('');
        $(phone).val('');

        currentId++;
    }).on("click", ".delete-button", function () {
        $(this).closest("input:checkbox").attr('checked', "true");
        console.log($(this).parent('tr').children('input:checkbox'));

        $.confirm({
            title: 'Confirm!',
            content: 'Delete?!',
            buttons: {
                confirm: function () {
                    $("input:checkbox:checked:enabled").each(function (index, trToDelete) {
                        var trDelete = $(trToDelete).closest("tr");
                        var deleteIndex = $(trDelete).find(".current-number").text();
                        $(trDelete).remove();
                        currentId--;

                        idReforming(deleteIndex);
                    });
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