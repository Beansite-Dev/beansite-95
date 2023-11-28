try {

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
      

document.getElementById("runCmd").addEventListener('click', (e) => {
    e.preventDefault();
    let cmd = document.getElementById("cmd");
    let commandInput = document.getElementById("commandInput");
    let command = document.getElementById("commandInput").value;
    if (command.toLowerCase() == "help") {
        cmd.innerHTML = cmd.innerHTML + `<br><br>
        Welcome to MicroBean DOS! <br>
        available commands: <br>
        - help <br>
        - hacker-mode <br>
        - dont-run-me <br>
        `;
        commandInput.value = "";
    } else if (command.toLowerCase() == "hacker-mode") {
        cmd.innerHTML = cmd.innerHTML + `<br><br>
        ~ Hacker Mode: ACTIVATED!!!!!! 
        `;
        cmd.setAttribute('style', `color: #00ff00 !important;`)
        commandInput.value = "";
    } else if (command.toLowerCase() == "dont-run-me") {
        cmd.innerHTML = cmd.innerHTML + `<br><br>
        Your curiosity got the better of you... <br>
        <br>
        <br>
        You will perish for this god forsaken act.
        `;
        cmd.setAttribute('style', `color: #ff0000 !important;`)
        sleep(5000).then(() => { 
            document.getElementById('bsod').setAttribute('style', `
                display: block;
            `);
        });

        commandInput.value = "";
    } else {
        cmd.innerHTML = cmd.innerHTML + `<error><br><br>
        ERROR<br>
        invalid command<br>
        (command "${command}" is not valid)</error>
        `;
        commandInput.value = "";
    }
})

}
catch (e) {
  alert(`Error:\n${e.stack}\n${e.name}\n${e.message}`);
}