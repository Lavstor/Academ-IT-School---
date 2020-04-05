document.addEventListener("DOMContentLoaded", function () {
    Vue.component('todo-item', {
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
        methods: {
            redactTodo: function () {
                this.$emit('redact-todo', this.todo);
                this.todo.isEditing = false;
            },
            deleteTodo: function () {
                this.$emit("delete-todo", this.todo);
            },
            confirm: function (newTitle) {
                this.isInvalid = false;

                if (this.newTitle === "") {
                    this.isInvalid = true;

                    return;
                }

                this.todo.title = newTitle;
                this.todo.isEditing = true;
            },
            cancel: function () {
                this.todo.isEditing = true;
            }
        },
        template: '#todo-item-template',
        data: function () {
            return {
                newTitle: this.todo.title,
                isInvalid: false
            }
        }
    });

    new Vue({
        el: "#todo-list",
        data: {
            newTodoText: "",
            todoItems: [],
            nextTodoId: 1,
            isInvalid: false
        },
        methods: {
            addNewTodo: function () {
                this.isInvalid = false;

                if (this.newTodoText === "") {
                    this.isInvalid = true;
                    return;
                }

                this.todoItems.push({
                    id: this.nextTodoId++,
                    title: this.newTodoText,
                    isEditing: true
                });

                this.newTodoText = "";
            },
            deleteTodo: function (todo) {
                this.todoItems = this.todoItems.filter(function (x) {
                    return x !== todo;
                });
            }
        }
    })
});