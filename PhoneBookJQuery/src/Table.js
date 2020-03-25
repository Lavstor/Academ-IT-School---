$(document).ready(function () {
    var lastName = $("#last-name");
    var firstName = $("#first-name");
    var phone = $("#telephone-number");
    var filter = $("#filter");
    var serialNumber = 1;
    var errorMessage = $("#error-massage");
    var massDeleteCheckBox = $("#mass-delete");

    $("#add-button").click(function () {
        if (!isValid($(".input-validation"))) {
            errorMessage.show();
            errorMessage.text("Заполните поля!");

            return;
        }

        if (!isValidPhone(phone)) {
            phone.addClass("is-invalid");
            errorMessage.show();
            errorMessage.text("Телефон уже есть такой!");

            return;
        }

        errorMessage.hide();
        massDeleteCheckBox.prop("checked", false);

        var newTr = $("<tr class='user-info'></tr>");
        var checkBoxLine = $("<td><label><input type='checkbox' class='check-box'></label></td>")
            .click(function () {
                checkMassDelete(massDeleteCheckBox.prop("checked"));
            });

        var serialNumberLine = $("<td class='current-number can-filter'></td>").text(serialNumber);
        var firstNameLine = $("<td class='first-name can-filter'></td>").text(firstName.val());
        var lastNameLine = $("<td class='last-name can-filter'></td>").text(lastName.val());
        var telephoneNameLine = $("<td class='telephone can-filter'></td>").text(phone.val());
        var deleteButton = $("<td class='text-center'><button type='button' class='delete-button btn btn-danger'>X</button></td>").click(function () {
            confirmDelete($(this).closest("tr"));
        });

        newTr.append(checkBoxLine);
        newTr.append(serialNumberLine);
        newTr.append(lastNameLine);
        newTr.append(firstNameLine);
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

    function checkMassDelete() {
        var isMassDelete = true;

        $(".check-box:checkbox").each(function (index, checkBox) {
            if (!$(checkBox).prop("checked")) {
                isMassDelete = false;

                return false;
            }
        });

        massDeleteCheckBox.prop("checked", isMassDelete);
    }

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
                        checkMassDelete(massDeleteCheckBox.prop("checked"));
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

        checkboxArray.each(function (index, tr) {
            $(tr).prop("checked", massDeleteCheckBox.prop("checked"));
        });
    });

    $("#cancel-filter-button").click(function () {
        $("tr").show();
        filter.val("");
    });

    $("#confirm-filter-button").click(function () {
        $("tr").show();

        $(".user-info").each(function (index, row) {
            var toHide = false;

            // noinspection JSUnresolvedFunction
            $(row).children(".can-filter").each(function (index, section) {
                if ($(section).text().toLowerCase().indexOf(filter.val().toLowerCase()) >= 0) {
                    toHide = true
                }
            });

            $(row).toggle(toHide)
        });
    });

    function serialNumberReforming() {
        var changeableNumber = $(".main-table .current-number");

        changeableNumber.each(function (index, element) {
            $(element).text(index + 1);
        });
    }

    function isValid(nodes) {
        var isValid = true;

        nodes.each(function (index, node) {
            if ($(node).val() === "") {
                $(node).addClass("is-invalid");

                isValid = false;
            } else {
                $(node).removeClass("is-invalid");
            }
        });

        return isValid;
    }

    function isValidPhone(telephoneNode) {
        var text = telephoneNode.val();

        var nodes = $(".main-table .telephone").filter(function (index, node) {
            return $(node).text().toLowerCase() === text.toLowerCase();
        });

        return nodes.length <= 0;
    }
});