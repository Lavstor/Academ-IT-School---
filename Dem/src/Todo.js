document.addEventListener("DOMContentLoaded", function (evt) {
    var todoListPage = document.querySelector(".todo-list-page");
    var errorMassage = todoListPage.querySelector(".error-massage");

    var tasksList = document.getElementById("tasks-list");
    var newTodoTextField = document.getElementById("new-todo");
    var addButton = document.getElementById("add-todo-button");


    addButton.addEventListener("click", function () {
        errorMassage.style.display = "none";
        var text = newTodoTextField.value;

        if (text === "") {
            errorMassage.style.display = "block";
            return;
        }

        var li = createTodoItem(text);

        tasksList.appendChild(li);

        newTodoTextField.value = "";
    });

    var isBusy = false;

    function createTodoItem(text) {
        var li = document.createElement("li");

        li.innerHTML = "<span></span><button type='button'>X</button><button type='button'>Redact</button>";

        li.children[0].textContent = text;

        li.children[1].addEventListener("click", function () {
            li.remove();
        });

        li.children[2].addEventListener("click", function () {
            if(isBusy){
                return;
            }

            isBusy = true;
            var liBefore = li;


            li.innerHTML = "<input type='text'><button type='button'>Cancel</button><button type='button'>Confirm</button>";
            console.log(liBefore);

            li.children[2].addEventListener("click", function () {
                liBefore[0].textContent = li.children[0].value;
                li = liBefore;
            });

            li.children[1].addEventListener("click", function () {
                li.replaceWith(liBefore);
            });
        });

        return li;
    }
});