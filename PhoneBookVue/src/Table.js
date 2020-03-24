document.addEventListener("DOMContentLoaded", function () {
    Vue.component('contact-item', {
        template: "<tr class='user-info'>" +
            "<td><label><input type='checkbox' class='check-box' :checked='contact.checked'></label></td>" +
            "<td class='current-number can-filter'>{{ index + 1 }}</td>" +
            "<td class='last-name can-filter'>{{ contact.lastName }}</td>" +
            "<td class='first-name can-filter'>{{ contact.firstName }}</td>" +
            "<td class='telephone can-filter'>{{ contact.phone }}</td>" +
            "<td><button type='button' class='delete-button btn btn-danger' @click='$emit(\"delete-contact\")'>X</button></td></tr>",
        props: ['contact', 'index']
    });

    new Vue({
        el: "#contacts-list",
        data: {
            newPhone: "",
            newFirstName: "",
            newLastName: "",
            contacts: [],
            nextContactId: 1,
            isEmptyFirstName: false,
            isEmptyLastName: false,
            isEmptyPhone: false,
            isInvalidPhone: false,
            massDelete: false
        },
        methods: {
            newContact: function () {
                if (this.newFirstName === "") {
                    this.isEmptyFirstName = true;

                    return;
                }

                this.isEmptyFirstName = false;

                if (this.newLastName === "") {
                    this.isEmptyLastName = true;

                    return;
                }

                this.isEmptyLastName = false;

                if (this.newPhone === "") {
                    this.isEmptyPhone = true;

                    return;
                }

                this.isEmptyPhone = false;

                var newPhone = this.newPhone;

                _.findIndex(this.contacts, function (contact) {
                    return contact.phone === newPhone;
                }) !== -1 ? this.isInvalidPhone = true : this.isInvalidPhone = false;

                if (this.isInvalidPhone) {
                    return;
                }

                this.contacts.push({
                    id: this.nextContactId++,
                    firstName: this.newFirstName,
                    lastName: this.newLastName,
                    phone: this.newPhone,
                    checked: false
                });

                this.massDelete = false;
                this.massDeletePush();

                this.newPhone = "";
                this.newFirstName = "";
                this.newLastName = "";
            },
            deleteContact: function (index) {
                this.contacts.splice(index, 1);
            },
            massDeletePush: function () {
                console.log("123");

                var isMassDelete = this.massDelete;

                _.each(this.contacts, function (contact) {
                    contact.checked = isMassDelete;
                })
            }
        }
    });
});