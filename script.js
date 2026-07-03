let votes = 0;

const voteCountElement = document.getElementById('voteCount');
const agreeButton = document.getElementById('agreeButton');

agreeButton.addEventListener('click', () => {
    votes++;
    voteCountElement.textContent = `Votes: ${votes}`;
});
