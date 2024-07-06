function startQuiz() {
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = `
        <p>Question 1: What is the name of Valorant's developer?</p>
        <input type="radio" id="riot" name="q1" value="Riot Games">
        <label for="riot">Riot Games</label><br>
        <input type="radio" id="blizzard" name="q1" value="Blizzard">
        <label for="blizzard">Blizzard</label><br>

        <p>Question 2: What is the name of Valorant's in-game currency?</p>
        <input type="radio" id="valorantPoints" name="q2" value="Valorant Points">
        <label for="valorantPoints">Valorant Points</label><br>
        <input type="radio" id="credits" name="q2" value="Credits">
        <label for="credits">Credits</label><br>

        <button onclick="checkAnswers()">Submit</button>
    `;
}

function checkAnswers() {
    const answer1 = document.querySelector('input[name="q1"]:checked').value;
    const answer2 = document.querySelector('input[name="q2"]:checked').value;

    let result = '';

    if (answer1 === 'Riot Games') {
        result += 'Question 1: Correct! Valorant is developed by Riot Games.<br>';
    } else {
        result += 'Question 1: Incorrect. The correct answer is Riot Games.<br>';
    }

    if (answer2 === 'Valorant Points') {
        result += 'Question 2: Correct! The in-game currency is Valorant Points.<br>';
    } else {
        result += 'Question 2: Incorrect. The correct answer is Valorant Points.<br>';
    }

    document.getElementById('quiz-content').innerHTML = result;
}
