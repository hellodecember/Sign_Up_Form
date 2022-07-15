/* Written by Autumn Arnold */
/* Javascript File for Sign Up Form */
/* Date Written: 6/12/2022 */

document.addEventListener("DOMContentLoaded", function() {
    // Javascript validation
    var checkPassword = function(str) {
        // at least one number, one lowercase and one uppercase letter
        // at least five characters
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}/;
        return re.test(str);
    };

    var checkForm = function(e) {
        if(this.password.value != "" && this.password.value == this.check_password.value) {
            if(!checkPassword(this.password.value)) {
                alert("The password you have entered is not valid!");
                this.password.focus();
                e.preventDefault();
                return;
            }
        }
        else {
            alert("Error: Please check that you've entered and confirmed your password.");
            this.password.focus();
            e.preventDefault();
            return;
        }
        alert("All fields are valid!");
    };

    var myForm = document.getElementById("signForm");
    myForm.addEventListener("submit", checkForm, true);

    // HTML form validation
    var supports_input_validity = function() {
        var i = document.createElement("input");
        return "setCustomValidity" in i;
    }

    if(supports_input_validity()) {
        var pwdInput = document.getElementById("password");
        pwdInput.setCustomValidity(pwdInput.title);

        var confPwdInput = document.getElementById("confirm_password");

        pwdInput.addEventListener("keyup", function(e) {
            this.setCustomValidity(this.validity.patternMismatch ? pwdInput.title : "");
            if(this.checkValidity()) {
                confPwdInput.pattern = RegExp.escape(this.value);
                confPwdInput.setCustomValidity(confPwdInput.title);
            }
            else {
                confPwdInput.pattern = this.pattern;
                confPwdInput.setCustomValidity("");
            }
        }, false);

        confPwdInput.addEventListener("keyup", function(e) {
            this.setCustomValidity(this.validity.patternMismatch ? confPwdInput.title : "");
        }, false);
    } 
}, false);