document.addEventListener("DOMContentLoaded", function () {
    function errorMassageCheck(text) {
        if (text === "") {
            errorMassage.style.display = "block";
            return true;
        }

        return false;
    }

    function createTodoItem(text) {
        var li = document.createElement("li");

        li.innerHTML = "<span></span><button type='button'>X</button><button type='button'>Redact</button>";

        li.children[0].textContent = text;

        li.children[1].addEventListener("click", function () {
            li.parentNode.removeChild(li);
        });

        li.children[2].addEventListener("click", function () {
            if (isBusy) {
                return;
            }

            isBusy = true;
            var textBeforeRedact = li.children[0].textContent;

            li.innerHTML = "<input type='text'><button type='button'>Cancel</button><button type='button'>Confirm</button>";

            li.children[1].addEventListener("click", function () {
                li.replaceWith(createTodoItem(textBeforeRedact));
                isBusy = false;
            });

            li.children[2].addEventListener("click", function () {
                var newText = li.children[0].value;

                if (!errorMassageCheck(newText)) {
                    li.replaceWith(createTodoItem(li.children[0].value));
                    isBusy = false;
                }
            });
        });

        return li;
    }

    var isBusy = false;
    var todoListPage = document.querySelector(".todo-list-page");
    var errorMassage = todoListPage.querySelector(".error-massage");

    var tasksList = document.getElementById("tasks-list");
    var newTodoTextField = document.getElementById("new-todo");

    var addButton = document.getElementById("add-todo-button");
    addButton.addEventListener("click", function () {
        errorMassage.style.display = "none";

        var text = newTodoTextField.value;

        if (errorMassageCheck(text)) {
            return;
        }

        var li = createTodoItem(text);

        tasksList.appendChild(li);
        newTodoTextField.value = "";
    });
});