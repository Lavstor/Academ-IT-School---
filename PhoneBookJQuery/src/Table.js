$(document).ready(function () {
    $(".main-container").on('click', '#add-button', function () {
        if (!isValid(inputNodes)) {
            $(errorMassage).css("display", "block");
            $(errorMassage).text("Заполните все поля!");

            return;
        }

        if (!isValidPhone(phone)) {
            phone.css({
                "background-color": "#FE2C2A"
            });

            $(errorMassage).css("display", "block");
            $(errorMassage).text("Такой номер уже есть!");

            return;
        }

        $(errorMassage).css("display", "none");

        $("#telephone-holder-info").append($("" +
            "<tr class='user-info'>" +
            "<td><label><input type='checkbox' class='check-box'></label></td>" +
            "<td class='current-number'>" + serialNumber + "</td>" +
            "<td class='last-name'>" + $(lastName).val() + "</td>" +
            "<td class='first-name'>" + $(firstName).val() + "</td>" +
            "<td class='telephone'>" + $(phone).val() + "</td>" +
            "<td><button type='button' class='delete-button'>X</button></td>" +
            "</tr>"));

        $(lastName).val('');
        $(firstName).val('');
        $(phone).val('');

        serialNumber++;
    }).on("click", ".delete-button", function () {
        var clickedButton = this;

        $.confirm({
            title: 'Confirm!',
            content: 'Delete?!',
            buttons: {
                confirm: function () {
                    $(clickedButton).closest("tr").remove();

                    var deleteRows = $("input:checkbox:checked:enabled");
                    console.log(deleteRows.length);

                    serialNumber -= deleteRows.length;

                    $(deleteRows).each(function (index, nodeToDelete) {
                        var trDelete = $(nodeToDelete).closest(".user-info");

                        $(trDelete).remove();
                        $("#mass-delete").prop("checked", false);
                    });

                    serialNumberReforming();
                },
                cancel: function () {
                    this.close();
                }
            }
        });
    }).on("click", "#mass-delete", function () {
        if ($("#mass-delete").prop("checked")) {
            $("input:checkbox").each(function (index, tr) {
                $(tr).prop("checked", true);
            });
        } else {
            $("input:checkbox").each(function (index, tr) {
                $(tr).prop("checked", false);
            });
        }
    }).on("click", ".check-box", function () {
        if (!$(".check-box").prop("checked")) {
            $("#mass-delete").prop("checked", false);
        } else {
            var isMassDelete = true;

            $(".check-box:checkbox").each(function (index, checkBox) {
                if (!$(checkBox).prop("checked")) {
                    isMassDelete = false;
                }
            });

            if (isMassDelete) {
                $("#mass-delete").prop("checked", true);
            } else {
                $("#mass-delete").prop("checked", false);
            }
        }
    }).on("click", "#confirm-filter-button", function () {
        showAllTr();

        $(".user-info:not(.user-info:Contains(" + $(filter).val() + "))").each(function (index, tr) {
            $(tr).hide();
        });
    }).on("click", "#cancel-filter-button", function () {
        showAllTr();
    });

    $.expr[":"].Contains = $.expr.createPseudo(function (arg) {
        return function (elem) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });

    function showAllTr() {
        $(".user-info").each(function (index, tr) {
            $(tr).show();
        });
    }

    function serialNumberReforming() {
            var changeableNumber = $(".main-table .current-number");

            $(changeableNumber).each(function (index, element) {
                $(element).text(index + 1);
            });
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

    var inputNodes = [$("#last-name"), $("#first-name"), $("#telephone-number")];
    var lastName = inputNodes[0];
    var firstName = inputNodes[1];
    var phone = inputNodes[2];
    var filter = $("#filter");
    var serialNumber = 1;
    var errorMassage = $("#error-massage");
});