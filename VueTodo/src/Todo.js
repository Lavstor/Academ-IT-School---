document.addEventListener("DOMContentLoaded", function () {
    Vue.component('todo-item', {
        template: '<li> {{ title }} <button @click="$emit(\'remove\')">Удалить</button></li>',
        props: ['title']
    });

    new Vue({
        el: "#todo-list",
        data: {
            newTodoText: "",
            todo: [],
            nextTodoId: 1
        },
        methods: {
            addNewTodo: function () {
                if (this.newTodoText === "") {
                    return;
                }

                this.todo.push({
                    id: this.nextTodoId++,
                    title: this.newTodoText
                });

                this.newTodoText = "";
            },
            deleteJob: function (index) {
                this.todo.splice(index, 1);
            }
        }
    })
});