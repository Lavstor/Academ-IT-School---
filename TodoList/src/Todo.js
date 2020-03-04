document.addEventListener("DOMContentLoaded", function () {
    function createTodoItem(text) {
        var li = document.createElement("li");
        li.innerHTML = "<span></span><button type='button'>X</button><button type='button'>Изменить</button>";

        var liSpan = li.children[0];
        var liDelete = li.children[1];
        var liChange = li.children[2];

        liSpan.textContent = text;

        liDelete.addEventListener("click", function () {
            li.parentNode.removeChild(li);
        });

        liChange.addEventListener("click", function () {
            var textBeforeEditing = liSpan.textContent;

            li.innerHTML = "<input type='text'><button type='button'>Отмена</button><button type='button'>Принять</button>" +
                "<div style='display:none' class='error-message'>Ошибка, надо больше букв!</div>";
            var liInput = li.children[0];
            var liCancel = li.children[1];
            var liConfirm = li.children[2];
            var liErrorMessage = li.children[3];

            liInput.value = textBeforeEditing;

            liCancel.addEventListener("click", function () {
                li.parentNode.replaceChild(createTodoItem(textBeforeEditing), li);
            });

            liConfirm.addEventListener("click", function () {
                var newText = liInput.value;

                if (newText !== "") {
                    li.parentNode.replaceChild(createTodoItem(liInput.value), li);
                } else {
                    liErrorMessage.style.display = "inline-block";
                }
            });
        });

        return li;
    }

    var todoListPage = document.querySelector(".todo-list-page");
    var errorMessage = todoListPage.querySelector(".error-message");

    var tasksList = document.getElementById("tasks-list");
    var newTodoTextField = document.getElementById("new-todo");

    var addButton = document.getElementById("add-todo-button");
    addButton.addEventListener("click", function () {
        errorMessage.style.display = "none";

        var text = newTodoTextField.value;

        if (text === "") {
            errorMessage.style.display = "inline-block";
            return;
        }

        var li = createTodoItem(text);

        tasksList.appendChild(li);
        newTodoTextField.value = "";
    });
});