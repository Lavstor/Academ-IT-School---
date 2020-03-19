$(document).ready(function () {
    var newJobInput = $("#newJobInput");

    $("#add-new-job").click(function () {
        if (isEmpty(newJobInput)) {
            return;
        }

        $(".todo-list").append(createNewLi(newJobInput.val()));
        newJobInput.val("");
    });

    function inputForm(textBefore) {
        var input = $('<input type="text" placeholder="What u want to do?" class="text-dark form-control" ' +
            'aria-label="Default" maxlength="50">').click(function () {
            $(this).addClass("text-dark");
        });

        input.val(textBefore);

        var cancel = $('<button type="button" class="cancel btn btn-outline-danger btn-outline-secondary">' +
            '<span aria-hidden="true">Cancel</span>' +
            '</button>').click(function () {
            newTodoLi.replaceWith(createNewLi(textBefore));
        });

        var confirm = $('<button type="button" class="confirm btn btn-outline-success btn-outline-secondary">' +
            '<span aria-hidden="true">Confirm</span>' +
            '</button>').click(function () {
            if (isEmpty(input)) {
                return;
            }

            newTodoLi.replaceWith(createNewLi($(input).val()));
        });

        var invalid = $(" <div class='invalid-feedback'>Please sumbit some.</div>");

        var buttonsDiv = $("<div class='input-group-append'></div>");
        buttonsDiv.append(cancel);
        buttonsDiv.append(confirm);

        var inputDiv = $("<div class='input-group mb-3'></div>");
        inputDiv.append(input);
        inputDiv.append(buttonsDiv);
        inputDiv.append(invalid);

        var newTodoLi = $('<li class="list-group-item list-group-item-action input p-0"></li>');
        newTodoLi.append(inputDiv);

        return newTodoLi;
    }

    function isEmpty(input) {
        if (input.val() === "") {
            input.addClass("is-invalid");
            return true;
        }

        input.removeClass("is-invalid");
        return false;
    }

    function createNewLi(todoText) {
        var newLi = $('<li class="list-group-item list-group-item-action todo"></li>');
        var newA = $('<a class="redact"></a>').text(todoText);
        var deleteButton = $('<button type="button" class="close btn-circle">' +
            '<span aria-hidden="true" class="h6">Delete</span>' +
            '</button>').click(function () {
            $(this).parent().remove();
        });

        newLi.append(newA);
        newLi.append(deleteButton);
        newLi.click(function () {
            $(this).replaceWith(inputForm(todoText));
        });

        return newLi;
    }
});

