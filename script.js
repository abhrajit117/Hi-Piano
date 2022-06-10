
window.addEventListener("keydown", function (e) {
    if (e.repeat) return;
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.keys[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");


    // {
    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        console.log(e.propertyName)
    }
    const keys = this.document.querySelectorAll(".keys");
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
    // }

});









{
    //for using mouse cursor 
    const keys = document.querySelectorAll('.keys')
    keys.forEach(key => {
        key.addEventListener('click', () => playNote(key))

    })
    function playNote(key) {
        const noteAudio = document.getElementById(key.dataset.key)
        noteAudio.currentTime = 0
        noteAudio.play()
        key.classList.add("playing");
        noteAudio.addEventListener('ended', () => {
            key.classList.remove("playing")
        })

        // noteAudio.addEventListener('ended', () => {
        //     key.classList.remove('active')
        // })
    }

}