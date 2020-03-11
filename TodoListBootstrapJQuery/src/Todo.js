$(document).ready(function () {
    $("#add-new-job").on("click", function () {
        $('.todo-list').append(newLi(""));
    });

    function inputForm(textBefore) {
        var input = $('<input type="text" placeholder="What u want to do?" class="form-control d-inline-block w-100" ' +
            'aria-label="Default" maxlength="50">').on("click", function () {
            $(this).css("color", "#000000");
            $(this).select();
        });

        $(input).val(textBefore);

        var cancel = $('<button type="button" class="cancel btn btn-outline-danger ml-2 mb-1 mt-2">' +
            '<span aria-hidden="true">Cancel</span>' +
            '</button>').on("click", function () {
            $(newTodoLi).replaceWith(newLi(textBefore));
        });

        var confirm = $('<button type="button" class="confirm btn btn-outline-success ml-3 mb-1 mt-2">' +
            '<span aria-hidden="true">Confirm</span>' +
            '</button>').on("click", function () {
            if ($(input).val() === "") {
                $(input).val("Error! Submit some work!");
                $(input).css("color", "#F20E20");

                return;
            }

            $(newTodoLi).replaceWith(newLi($(input).val()));
        });

        var newTodoLi = $('<li class="list-group-item list-group-item-action input"></li>');
        $(newTodoLi).append(input);
        $(newTodoLi).append(cancel);
        $(newTodoLi).append(confirm);

        return $(newTodoLi);
    }

    function newLi(todoText) {
        return $('<li class="list-group-item list-group-item-action todo">' +
            '<a class="redact">' + todoText + '</a>' +
            '<button type="button" class="close btn-circle">' +
            '<span aria-hidden="true" class="h6">Удалить</span>' +
            '</button>' +
            '</li>').on("click", ".close", function () {
            $(this).parent().remove();
        }).on("click", function () {
            $(this).replaceWith(inputForm(todoText));
        });
    }
});

