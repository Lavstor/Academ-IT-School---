document.addEventListener("DOMContentLoaded", function () {
    Vue.component('contact-item', {
        template: "<tr class='user-info'>" +
            "<td><label><input type='checkbox' class='check-box' " +
            ":checked='contact.checked' " +
            "@click='checkBoxPush(contact), $emit(\"check-mass-delete\")'></label></td>" +
            "<td class='current-number can-filter'>{{ index + 1 }}</td>" +
            "<td class='last-name can-filter'>{{ contact.lastName }}</td>" +
            "<td class='first-name can-filter'>{{ contact.firstName }}</td>" +
            "<td class='telephone can-filter'>{{ contact.phone }}</td>" +
            "<td class=\"text-center\"><button type='button' class='delete-button btn btn-danger' @click='$emit(\"delete-contact\")'>X</button></td></tr>",
        props: ['contact', 'index'],
        methods: {
            checkBoxPush: function (contact) {
                contact.checked ? contact.checked = false : contact.checked = true;
            }
        }
    });

    var vm = new Vue({
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
            massDelete: false,
            displayError: false,
            errorMessage: "",
            filterInput: ""
        },
        methods: {
            newContact: function () {
                this.displayError = false;
                this.errorMessage = "Ошибка! Пустая(ые) строки!";
                this.isEmptyFirstName = false;
                this.isEmptyLastName = false;
                this.isEmptyPhone = false;

                if (this.newFirstName === "") {
                    this.isEmptyFirstName = true;
                }

                if (this.newLastName === "") {
                    this.isEmptyLastName = true;
                }

                if (this.newPhone === "") {
                    this.isEmptyPhone = true;
                }

                if (this.isEmptyPhone || this.isEmptyFirstName || this.isEmptyLastName) {
                    this.displayError = true;

                    return;
                }

                var newPhone = this.newPhone;

                _.findIndex(this.contacts, function (contact) {
                    return contact.phone.toLowerCase() === newPhone.toLowerCase();
                }) !== -1 ? this.isInvalidPhone = true : this.isInvalidPhone = false;

                if (this.isInvalidPhone) {
                    this.isEmptyPhone = true;
                    this.displayError = true;
                    this.errorMessage = "Ошибка! Такой телефон уже есть!";
                    return;
                }

                this.contacts.push({
                    id: this.nextContactId++,
                    firstName: this.newFirstName,
                    lastName: this.newLastName,
                    phone: this.newPhone,
                    checked: false,
                    isHidden: false
                });

                this.massDelete = false;
                this.newPhone = "";
                this.newFirstName = "";
                this.newLastName = "";
            },
            deleteContact: function (index) {
                summonDeleteWindow(function () {
                    vm.contacts.splice(index, 1);
                    vm.checkMassDelete();
                });
            },
            massDeletePush: function () {
                this.massDelete ? this.massDelete = false : this.massDelete = true;
                var isChecked = this.massDelete;

                _.each(this.contacts, function (contact) {
                    contact.checked = isChecked;
                });
            },
            checkMassDelete: function () {
                if (this.contacts.length === 0) {
                    this.massDelete = false;

                    return;
                }

                var isMassDelete = true;

                _.each(this.contacts, function (contact) {
                    if (contact.checked === false) {
                        isMassDelete = false;
                    }
                });

                this.massDelete = isMassDelete;
            },
            deleteAllSelected: function () {
                // noinspection JSUnusedGlobalSymbols,NonAsciiCharacters
                summonDeleteWindow(function deleteFunc() {
                    var deleteIndex = findIndex(vm.contacts);

                    while (deleteIndex >= 0) {
                        vm.contacts.splice(deleteIndex, 1);
                        deleteIndex = findIndex(vm.contacts);
                    }

                    function findIndex(contacts) {
                        return _.findIndex(contacts, ["checked", true]);
                    }

                    vm.checkMassDelete();
                });
            },
            confirmFilter: function () {
                var checkLine = this.filterInput.toLowerCase();

                _.each(this.contacts, function (contact) {
                    contact.isHidden = !(contact.firstName.toLowerCase().indexOf(checkLine) >= 0
                        || contact.lastName.toLowerCase().indexOf(checkLine) >= 0
                        || contact.phone.toLowerCase().indexOf(checkLine) >= 0);
                });
            },
            cancelFilter: function () {
                _.each(this.contacts, function (contact) {
                    contact.isHidden = false;
                });

                this.filterInput = "";
            }
        }
    });

    function summonDeleteWindow(deleteFunc) {
        // noinspection NonAsciiCharacters
        $.confirm({
            title: "Подтвердите удаление!",
            content: "Удалить?",
            buttons: {
                Удалить: function () {
                    deleteFunc();
                },
                Отмена: function () {
                }
            }
        });
    }
});