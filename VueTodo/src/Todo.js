document.addEventListener("DOMContentLoaded", function () {
    var inpDiv = new Vue({
        el: "#inpDiv",
        data: {
            message: "Привет, Vue!"
        },
        methods: {
            showAlert: function() {
                this.message = this.message.indexOf("Привет") >= 0
                    ? "Пока, Vue!" : "Привет, Vue!";
            }
        }
    });
});