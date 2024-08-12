document.getElementById('disappearButton').addEventListener('click', function() {
    const message = document.getElementById('disappearMessage');
    message.classList.toggle('hidden');
});

document.getElementById('submitVoice').addEventListener('click', function() {
    const userInput = document.getElementById('userInput');
    const voiceList = document.getElementById('voiceList');
    
    if(userInput.value.trim()) {
        const newVoice = document.createElement('li');
        newVoice.textContent = userInput.value;
        voiceList.appendChild(newVoice);
        userInput.value = '';  // Clear the input
    } else {
        alert("理由が空です！書いてくださいね。");
    }
});
