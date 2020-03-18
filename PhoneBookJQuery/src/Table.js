$(document).ready(function () {
    var inputNodes = [$("#last-name"), $("#first-name"), $("#telephone-number")];
    var lastName = inputNodes[0];
    var firstName = inputNodes[1];
    var phone = inputNodes[2];
    var filter = $("#filter");
    var serialNumber = 1;
    var errorMessage = $("#error-massage");
    var massDeleteCheckBox = $("#mass-delete");

    $("#add-button").click(function () {
        if (!isValid(inputNodes)) {
            errorMessage.show();
            errorMessage.text("Заполните все поля!");

            return;
        }

        if (!isValidPhone(phone)) {
            phone.addClass("bg-danger");

            errorMessage.show();
            errorMessage.text("Такой номер уже есть!");

            return;
        }

        massDeleteCheckBox.prop("checked", false);
        errorMessage.hide();

        var newTr = $("<tr class='user-info'></tr>");
        var checkBoxLine = $("<td><label><input type='checkbox' class='check-box'></label></td>").click(function () {
            var isMassDelete = true;

            $(".check-box:checkbox").each(function (index, checkBox) {
                if (!$(checkBox).prop("checked")) {
                    isMassDelete = false;

                    return false;
                }
            });

            isMassDelete ? massDeleteCheckBox.prop("checked", true) : massDeleteCheckBox.prop("checked", false);
        });

        var serialNumberLine = $("<td class='current-number can-filter'></td>").text(serialNumber);
        var firstNameLine = $("<td class='first-name can-filter'></td>").text(firstName.val());
        var lastNameLine = $("<td class='last-name can-filter'></td>").text(lastName.val());
        var telephoneNameLine = $("<td class='telephone can-filter'></td>").text(phone.val());
        var deleteButton = $("<td><button type='button' class='delete-button btn btn-danger'>X</button></td>").click(function () {
            confirmDelete($(this).closest("tr"));
        });

        newTr.append(checkBoxLine);
        newTr.append(serialNumberLine);
        newTr.append(firstNameLine);
        newTr.append(lastNameLine);
        newTr.append(telephoneNameLine);
        newTr.append(deleteButton);

        $("#telephone-holder-info").append(newTr);

        lastName.val("");
        firstName.val("");
        phone.val("");

        serialNumber++;
    });

    $("#delete-all").click(function () {
        confirmDelete($("input:checkbox:checked:enabled"));
    });

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
                        massDeleteCheckBox.prop("checked", false);
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
        var checkboxArray = $("input:checkbox");

        massDeleteCheckBox.prop("checked") ? checkboxArray.each(function (index, tr) {
            $(tr).prop("checked", true);
        }) : checkboxArray.each(function (index, tr) {
            $(tr).prop("checked", false);
        });
    });

    $("#cancel-filter-button").click(function () {
        showAllTr();
        filter.val("");
    });

    $("#confirm-filter-button").click(function () {
        showAllTr();

        $(".user-info").each(function (index, row) {
            var hideIt = true;

            // noinspection JSUnresolvedFunction
            $(row).children(".can-filter").each(function (index, section) {
                if ($(section).text().toLowerCase().indexOf(filter.val().toLowerCase()) >= 0) {
                    hideIt = false
                }
            });

            hideIt === true ? $(row).hide() : $(row).show();
        });
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
            if ($(node).val() === "") {
                $(node).addClass("bg-danger");

                isValid = false;
            } else {
                $(node).removeClass("bg-danger");
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