document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit-btn');
    const resultDiv = document.getElementById('result');

    const correctAnswers = {
        q1: 'A',
        q2: 'false',
        q3: 'Merlion Statue',
        q4: 'C',
        q5: 'true',
        q6: 'Sim Lim Square',
        q7: 'C',
        q8: 'true',
        q9: 'VivoCity',
        q10: 'C'
    };

    submitBtn.addEventListener('click', function() {
        let score = 0;
        const totalQuestions = 10;

        for (let i = 1; i <= 10; i++) {
            const questionId = 'q' + i;
            const feedback = document.getElementById('fb' + i);

            if (i === 3 || i === 6 || i === 9) {
                const answer = document.getElementById('a' + i).value.trim();
                const isCorrect = answer === correctAnswers[questionId];

                if (isCorrect) {
                    score++;
                    feedback.textContent = "✓ Correct answer!";
                    feedback.classList.add('correct');
                    feedback.classList.remove('incorrect');
                } else {
                    feedback.textContent = `✗ Correct answer: ${correctAnswers[questionId]}`;
                    feedback.classList.add('incorrect');
                    feedback.classList.remove('correct');
                }
            } else {
                const selectedOption = document.querySelector(`input[name="${questionId}"]:checked`);

                if (selectedOption) {
                    const userAnswer = selectedOption.value;
                    const isCorrect = userAnswer === correctAnswers[questionId];

                    if (isCorrect) {
                        score++;
                        feedback.textContent = "✓ Correct answer!";
                        feedback.classList.add('correct');
                        feedback.classList.remove('incorrect');
                    } else {
                        feedback.textContent = `✗ Correct answer: ${getFullAnswerText(questionId, correctAnswers[questionId])}`;
                        feedback.classList.add('incorrect');
                        feedback.classList.remove('correct');
                    }
                } else {
                    feedback.textContent = `✗ Correct answer: ${getFullAnswerText(questionId, correctAnswers[questionId])}`;
                    feedback.classList.add('incorrect');
                    feedback.classList.remove('correct');
                }
            }

            feedback.style.display = 'block';
        }

        const percentage = (score / totalQuestions) * 100;
        resultDiv.textContent = `Your score: ${score}/${totalQuestions} (${percentage}%)`;
        resultDiv.style.display = 'block';

        resultDiv.scrollIntoView({ behavior: 'smooth' });
    });

    function getFullAnswerText(questionId, correctValue) {
        const questionElement = document.getElementById(questionId);
        const options = questionElement.querySelectorAll('.option');

        for (const option of options) {
            const input = option.querySelector('input');
            if (input.value === correctValue) {
                return option.textContent.trim();
            }
        }
        return correctValue;
    }
});