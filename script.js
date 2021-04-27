function loop() {
    if (document.querySelector('.tw-button--success')) {
        document.querySelector('.tw-button--success').click();
        console.log("Added 50 points!");
    }
    console.log("Tick");
    setTimeout(loop, 1000); 
}

loop();
