$(document).ready(function () {
    var inputNodes = [$("#last-name"), $("#first-name"), $("#telephone-number")];
    var lastName = inputNodes[0];
    var firstName = inputNodes[1];
    var phone = inputNodes[2];
    var filter = $("#filter");
    var serialNumber = 1;
    var errorMessage = $("#error-massage");
    var massDeleteCheckBox = $("#mass-delete");
    var activated = false;

    $("#add-button").click(function () {
        if (!isValid(inputNodes)) {
            errorMessage.show();
            errorMessage.text("Заполните все поля!");

            return;
        }

        if (!isValidPhone(phone)) {
            phone.css({
                "background-color": "#FE2C2A"
            });

            errorMessage.show();
            errorMessage.text("Такой номер уже есть!");

            return;
        }

        errorMessage.hide();

        $("#telephone-holder-info").append($("" +
            "<tr class='user-info'>" +
            "<td><label><input type='checkbox' class='check-box'></label></td>" +
            "<td class='current-number'>" + serialNumber + "</td>" +
            "<td class='last-name'>" + lastName.val() + "</td>" +
            "<td class='first-name'>" + firstName.val() + "</td>" +
            "<td class='telephone'>" + phone.val() + "</td>" +
            "<td><button type='button' class='delete-button'>X</button></td>" +
            "</tr>")).on("click", function () {
            confirmDelete($("input:checkbox:checked:enabled"));
        });

        lastName.val("");
        firstName.val("");
        phone.val("");

        serialNumber++;
    });

    $("#delete-all").click(
        confirmDelete()
    );

    function confirmDelete(deleteArray) {
        // noinspection JSUnusedGlobalSymbols,NonAsciiCharacters

        $.confirm({
            title: "Подтвердите удаление!",
            content: "Удалить?",
            buttons: {
                Удалить: function () {
                    serialNumber -= deleteArray.length;

                    $(deleteArray).each(function (index, nodeToDelete) {
                        var trDelete = $(nodeToDelete).closest(".user-info");

                        $(trDelete).remove();
                        $("#mass-delete").prop("checked", false);
                    });

                    serialNumberReforming();

                    if (serialNumber <= 0) {
                        serialNumber = 1;
                    }
                },
                Отмена: function () {
                    this.close;
                }
            }
        });
    }

    massDeleteCheckBox.click(function () {
        if (massDeleteCheckBox.prop("checked")) {
            $("input:checkbox").each(function (index, tr) {
                $(tr).prop("checked", true);
            });
        } else {
            $("input:checkbox").each(function (index, tr) {
                $(tr).prop("checked", false);
            });
        }
    });

    $(".check-box").click(function () {
        if (!$(".check-box").prop("checked")) {
            massDeleteCheckBox.prop("checked", false);
        } else {
            var isMassDelete = true;

            $(".check-box:checkbox").each(function (index, checkBox) {
                if (!$(checkBox).prop("checked")) {
                    isMassDelete = false;
                }
            });

            isMassDelete === true ? massDeleteCheckBox.prop("checked", true) :  massDeleteCheckBox.prop("checked", false);
        }
    });

    $("#confirm-filter-button").click(function () {
        showAllTr();

        $(".user-info:not(.user-info:Contains(" + filter.val() + "))").each(function (index, tr) {
            $(tr).hide();
        });
    });

    $("#cancel-filter-button").click(function () {
        showAllTr();
        filter.val("");
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

        changeableNumber.each(function (index, element) {
            $(element).text(index + 1);
        });
    }

    function isValid(nodes) {
        var isValid = true;

        nodes.forEach(function (node) {
            if (node.val() === "") {
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
        var text = telephoneNode.val();

        var nodes = $(".main-table .telephone").filter(function (index, node) {
            return $(node).text() === text;
        });

        return nodes.length <= 0;
    }
});