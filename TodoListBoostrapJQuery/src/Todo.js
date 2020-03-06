$(document).ready(function () {
    $("body").on("click", ".newJob", function () {
        $('.todo-list').append(newLi("???"));
    }).on("click", ".close", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
    }).on("click", ".todo", function () {
        $(this).replaceWith(inputForm(this));
    });

    function inputForm(node) {
        var li = $('<li class="list-group-item list-group-item-action input">' +
            '<input type="text" placeholder="What u want to do?" class="form-control" aria-label="Default" maxlength= 50>' +
            '<button type="button" class="cancel btn btn-outline-danger">' +
            '<span aria-hidden="true">Cancel</span>' +
            '</button>' +
            '<button type="button" class="confirm btn btn-outline-success">' +
            '<span aria-hidden="true">Confirm</span>' +
            '</button>' +
            '</li>');

        var textBefore = node.firstChild.textContent;
        var input = li[0].children[0];
        var cancel = li[0].children[1];
        var confirm = li[0].children[2];

        input.value = textBefore;

        cancel.addEventListener("click", function () {
            $(input).css("color", "#000000");

            li[0].replaceWith(newLi(textBefore)[0])
        });

        confirm.addEventListener("click", function () {
            $(input).css("color", "#000000");

            if (input.value === "") {
                input.value = "Error! Submit some work!";
                $(input).css("color", "#F20E20");

                return;
            }

            li[0].replaceWith(newLi(input.value)[0])
        });

        return li[0];
    }

    function newLi(text) {
        return $('<li class="list-group-item list-group-item-action todo">' +
            '<a class="redact">' + text + '</a>' +
            '<button type="button" class="close btn-circle">' +
            '<span aria-hidden="true">&times;' +
            '</span>' +
            '</button>' +
            '</li>');
    }
});

