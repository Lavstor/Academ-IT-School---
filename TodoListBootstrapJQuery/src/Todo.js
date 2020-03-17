$(document).ready(function () {
    var newJobInput = $("#newJobInput");

    $("#add-new-job").click(function () {
        if (isEmpty(newJobInput)) {
            return;
        }

        $('.todo-list').append(createNewLi(newJobInput.val()));
        newJobInput.val("");
    });

    function inputForm(textBefore) {
        var input = $('<input type="text" placeholder="What u want to do?" class="form-control d-inline-block w-100 text-dark" ' +
            'aria-label="Default" maxlength="50">').click(function () {
            $(this).addClass("text-dark");
            $(this).select();
        });

        input.val(textBefore);

        var cancel = $('<button type="button" class="cancel btn btn-outline-danger mb-1 mt-2">' +
            '<span aria-hidden="true">Cancel</span>' +
            '</button>').click(function () {
            newTodoLi.replaceWith(createNewLi(textBefore));
        });

        var confirm = $('<button type="button" class="confirm btn btn-outline-success ml-3 mb-1 mt-2">' +
            '<span aria-hidden="true">Confirm</span>' +
            '</button>').click(function () {
            if (isEmpty(input)) {
                return;
            }

            newTodoLi.replaceWith(createNewLi($(input).val()));
        });

        var newTodoLi = $('<li class="list-group-item list-group-item-action input p-0"></li>');
        newTodoLi.append(input);
        newTodoLi.append(cancel);
        newTodoLi.append(confirm);

        return newTodoLi;
    }

    function isEmpty(input) {
        if (input.val() === "") {
            input.val("Error! Submit some work!");
            input.removeClass("text-dark");
            input.addClass("text-danger");

            return true;
        }

        input.addClass("text-dark");
        return false;
    }

    function createNewLi(todoText) {
        return $('<li class="list-group-item list-group-item-action todo">' +
            '<a class="redact">' + todoText + '</a>' +
            '<button type="button" class="close btn-circle">' +
            '<span aria-hidden="true" class="h6">Удалить</span>' +
            '</button>' +
            '</li>').on("click", ".close", function () {
            $(this).parent().remove();
        }).click(function () {
            $(this).replaceWith(inputForm(todoText));
        });
    }
});

