document.addEventListener("DOMContentLoaded", function () {
    Vue.component('contact-item', {
        template: "<tr class='user-info'>" +
            "<td><label><input type='checkbox' class='check-box'></label></td>" +
            "<td class='current-number can-filter'></td>" +
            "<td class='last-name can-filter'>{{ lastName }}</td>" +
            "<td class='first-name can-filter'>{{ firstName }}</td>" +
            "<td class='telephone can-filter'>{{ phone }}</td>" +
            "<td><button type='button' class='delete-button btn btn-danger'>X</button></td></tr>",
        props: ['phone', 'first-name', 'last-name']
    });

    new Vue({
        el: "#contacts-list",
        data: {
            newPhone: "",
            newFirstName: "",
            newLastName: "",
            contacts: [],
            nextContactId: 1,
            isEmptyInput: false,
            isInvalidPhone: false
        },
        methods: {
            newContact: function () {
                if (this.newFirstName === "" || this.newLastName === "" || this.newPhone === "") {
                    this.isEmptyInput = true;

                    return;
                }

                this.isEmptyInput = false;

                this.contacts.push({
                    id: this.nextContactId++,
                    firstName: this.newFirstName,
                    lastName: this.newLastName,
                    phone: this.newPhone
                });

                this.newPhone = "";
                this.newFirstName = "";
                this.newLastName = "";
            }
        }
    });
});