document
    .getElementById("surveyForm")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        // 简单的表单验证
        const requiredFields = document.querySelectorAll("[required]");
        let isValid = true;

        requiredFields.forEach((field) => {
            if (!field.value) {
                isValid = false;
                field.style.borderColor = "red";
            } else {
                field.style.borderColor = "#ddd";
            }
        });

        if (!isValid) {
            alert("Please fill in all required fields (fields marked with *).");
            return;
        }

        // 如果验证通过，显示感谢信息
        document.getElementById("surveyForm").style.display = "none";
        document.getElementById("thankYou").style.display = "block";


    });

// 重置输入框的红色边框当用户开始输入时
const inputs = document.querySelectorAll("input, textarea, select");
inputs.forEach((input) => {
    input.addEventListener("input", function () {
        this.style.borderColor = "#ddd";
    });
});