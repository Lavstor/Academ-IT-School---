document.addEventListener("DOMContentLoaded", function () {
    Vue.component('todo-item', {
        template: '<li class="list-group-item list-group-item-action p-0 pt-1 mt-3" @click="$emit(\'redact\')">' +
            '{{ title }} <button @click="$emit(\'remove\')" class="btn btn-info ml-1 float-right">Delete</button></li>',
        props: ['title']
    });

    Vue.component('redact-item', {
        template:
            '<li class="list-group-item list-group-item-action input p-0 pt-1">' +
            '<div class="input-group">' +
            '<input v-model="title" type="text" placeholder="What u want to do?" class="text-dark form-control" :class="{\'is-invalid\' : invalid}"' +
            'aria-label="Default" maxlength="50">' +
            '<div class="input-group-append">' +
            '<button type="button" class="cancel btn btn-outline-danger btn-outline-secondary" @click="cancel(job)">' +
            '<span aria-hidden="true">Cancel</span>' +
            '</button>' +
            '<button type="button" class="confirm btn btn-outline-success btn-outline-secondary" @click= "confirm(title, job)">' +
            '<span aria-hidden="true">Confirm</span>' +
            '</button>' +
            '</div>' +
            '<div class="invalid-feedback">Please submit some.</div>' +
            '</div>' +
            '</li>',
        data: function () {
            return {
                title: "",
                invalid: false
            }
        },
        props: ["job"],
        methods: {
            confirm: function (title, job) {
                this.invalid = false;

                if (title === "") {
                    this.invalid = true;
                    return;
                }

                job.isActive = true;
                job.title = title;
            }, cancel: function (job) {
                job.isActive = true;
            }
        }
    });

    new Vue({
        el: "#todo-list",
        data: {
            newTodoText: "",
            todo: [],
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

                this.todo.push({
                    id: this.nextTodoId++,
                    title: this.newTodoText,
                    isActive: true
                });

                this.newTodoText = "";
            },
            deleteJob: function (index) {
                this.todo.splice(index, 1);
            },
            redactJob: function (index) {
                this.todo[index].isActive = false;
            }
        }
    })
});