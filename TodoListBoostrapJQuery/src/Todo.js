$(document).ready(function () {
    $('body').on('click', '.newJob', function () {
        $('.todo-list').append($('' +
            '<li class="list-group-item list-group-item-action todo">' +
            '<a class="redact">...</a>' +
            '<button type="button" class="close btn-circle">' +
            '<span aria-hidden="true">&times;' +
            '</span>' +
            '</button>' +
            '</li>'));
    }).on('click', '.close', function () {
        this.parentNode.remove();
    }).on('click', '.todo', function () {
        if (!isBusy && this.parentNode !== null) {
            isBusy = true;
            beforeRedact = this;

            $(this).replaceWith('' +
                '<li class="list-group-item list-group-item-action input">' +
                '<input type="text" placeholder="What u want to do?" class="form-control" aria-label="Default" maxlength= 100>' +
                '<button type="button" class="cancel btn btn-outline-danger">' +
                '<span aria-hidden="true">Cancel</span>' +
                '</button>' +
                '<button type="button" class="confirm btn btn-outline-success">' +
                '<span aria-hidden="true">Confirm</span>' +
                '</button>' +
                '</li>');
        }
    }).on('click', '.cancel', function () {
        replace(this, beforeRedact);
        isBusy = false;
    }).on('click', '.confirm', function () {
        // noinspection JSUnresolvedVariable
        beforeRedact.firstChild.textContent = this.parentNode.firstChild.value;

        replace(this, beforeRedact);
        isBusy = false;
    });

    function replace(convertible, convertTo) {
        $(convertible.parentNode).replaceWith(convertTo);
    }

    var beforeRedact;
    var isBusy = false;
});

