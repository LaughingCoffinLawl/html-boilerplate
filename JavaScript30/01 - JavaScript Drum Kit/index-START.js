function removeTransition(e) {
    if(e.propertyName !== 'transform') return //skip if it's not a transform
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = this.document.querySelector(`audio[data-key=${e.code}] `);
    const key = this.document.querySelector(`div[data-key="${e.code}"]`);
    if (!audio) return //stops the function from running
    key.classList.add("playing");
    audio.currentTime = 0; //rewind the audio to the start
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
