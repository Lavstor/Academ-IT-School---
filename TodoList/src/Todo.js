$('.newLi').on('click', function () {
    console.log("add");
    var newElem = $('<li class="list-group-item list-group-item-action"><a class="redact">asdasd</a>\n' +
        '                <button type="button" class="close btn-circle" data-dismiss="alert" aria-label="Close">\n' +
        '                    <span aria-hidden="true">&times;</span>\n' +
        '                </button>\n' +
        '            </li><script ></script>');
    $('.todo-list').append(newElem);
});

$('.close').on('click', function (e) {
    console.log("delete");
    $(e.currentTarget.parentNode).remove();
});

$('.list-group-item-action').on('click', function (e) {
    console.log("edit");
    e.currentTarget.firstChild.nextSibling.innerText = "123";
});

