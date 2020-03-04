$(document).ready(function () {
    $('body').on('click', '.newJob', function () {
        $('.todo-list').append(newLi("???"));
    }).on('click', '.close', function () {
        $(this.parentNode).remove();
    }).on('click', '.todo', function () {
            $(this).replaceWith(editableLi(this));
    });

    function editableLi(node) {
        var textBefore = node.firstChild.textContent;

        var li = $('<li class="list-group-item list-group-item-action input">' +
            '<input type="text" placeholder="What u want to do?" class="form-control" aria-label="Default" maxlength= 50>' +
            '<button type="button" class="cancel btn btn-outline-danger">' +
            '<span aria-hidden="true">Cancel</span>' +
            '</button>' +
            '<button type="button" class="confirm btn btn-outline-success">' +
            '<span aria-hidden="true">Confirm</span>' +
            '</button>' +
            '</li>');

        var input = li[0].children[0];
        var cancel = li[0].children[1];
        var confirm = li[0].children[2];

        input.value = textBefore;

        cancel.addEventListener("click", function () {
            replace (li[0], newLi(textBefore));
        });

        confirm.addEventListener("click", function () {
            replace(li[0], newLi(textBefore));
        });

        return li[0];
    }

    function newLi(text) {
         return $('<li class="list-group-item list-group-item-action todo">' +
            '<a class="redact">'+ text +'</a>' +
            '<button type="button" class="close btn-circle">' +
            '<span aria-hidden="true">&times;' +
            '</span>' +
            '</button>' +
            '</li>');
    }

    function replace(convertibleParentNode, convertTo) {
        convertibleParentNode.parentNode.parentNode.replaceChild(convertTo, convertibleParentNode.parentNode);
    }
});

