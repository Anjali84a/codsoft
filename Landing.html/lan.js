document.getElementById('ask-button').addEventListener('click', function() {
    const questionInput = document.getElementById('question-input');
    const questionText = questionInput.value.trim();

    if (questionText) {
        addQuestion(questionText);
        questionInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a question.');
    }
});

function addQuestion(question) {
    const questionList = document.getElementById('question-list');

    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.textContent = question;

    questionList.appendChild(questionDiv);
}