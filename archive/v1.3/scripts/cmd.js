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
        - run -file <br>
        - echo -msg -type:optional <br>
        - cls
        `;
        commandInput.value = "";
    } else if (command.toLowerCase() == "help me") {
        cmd.innerHTML = cmd.innerHTML + `<br><br>
        I can't help you with that...
        `;
        commandInput.value = "";
    } else if (command.toLowerCase() == "cls") {
        cmd.innerHTML = ``;
        commandInput.value = "";
    } else if (command.toLowerCase().includes("echo")) {
        commandInput.value = "";
        try {
        let split = command.match(/(?:[^\s"]+|"[^"]*")+/g);
            if (!split[2]) {
                cmd.innerHTML = cmd.innerHTML + `<br><br>
                ${split[1]}
                `;
            } else {
                let parse = (string) => {
                    if (string.includes("error")) return "error";
                    if (string.includes("success")) return "success";
                    if (string.includes("warn")) return "warn";
                    if (string.includes("rainbow")) return "rainbow";
                    else throw "parse error";
                }
                cmd.innerHTML = cmd.innerHTML + `<${parse(split[2])}><br><br>
                ${split[1]}
                </${parse(split[2])}}>
                `;
            }
        }
        catch (e) {
            cmd.innerHTML = cmd.innerHTML + `<error><br><br>
            ERROR<br>
            invalid syntax<br>
            (command "echo" was not utilized properly)<br>
            error code 205
            </error>
            `;
        }
    } else if (command.toLowerCase().includes("mkdir")) {
        cmd.innerHTML = cmd.innerHTML + `<error><br><br>
        ERROR<br>
        read-only error<br>
        (system file mode: read-only)<br>
        error code 1001
        </error>
        `;
        commandInput.value = "";
    } else if (command.toLowerCase().includes("run")) {
        commandInput.value = "";
        try {
            if (command.split(" ")[1]=="clippy.exe") {
                cmd.innerHTML = cmd.innerHTML + `<error><br><br>
                ERROR<br>
                clippy is coming<br>
                (we will perish)<br>
                error code 69420
                </error>
                `;
                sleep(3500).then(() => {
                    document.getElementById('win1del').click();
                    document.getElementById('win2del').click();
                    document.getElementById('win3del').click();
                    document.getElementById('win4del').click();
                    document.getElementById('win5del').click();
                    document.getElementById('win6del').click();
                    document.body.setAttribute('style', `background: darkred;`)
                    for (let i = 1; i < 200; i++) {
                        sleep(50).then(() => {
                            document.getElementById('clippy').setAttribute('style', `
                                display: block;
                                height: ${i}%;
                            `)
                        })
                    }
                    sleep(2500).then(() => {
                        document.getElementById('bsod').setAttribute('style', `
                            display: block;
                        `)
                    })
                    document.getElementById('clippy').setAttribute('style', `display: none; height: 1%;`)
                })
            } else if (command.split(" ")[1] == "dontrun.exe") {
                commandInput.value = "";
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
            }
        }
        catch (e) {
            cmd.innerHTML = cmd.innerHTML + `<error><br><br>
            ERROR<br>
            invalid syntax<br>
            (command "run" was not utilized properly)<br>
            error code 205
            </error>
            `;
        }
    } else if (command.toLowerCase().includes("rmdir")) {
        cmd.innerHTML = cmd.innerHTML + `<error><br><br>
        ERROR<br>
        read-only error<br>
        (system file mode: read-only)<br>
        error code 1001
        </error>
        `;
        commandInput.value = "";
    } else if (command.toLowerCase().includes("rmdir")) {
        cmd.innerHTML = cmd.innerHTML + `<error><br><br>
        ERROR<br>
        read-only error<br>
        (system file mode: read-only)<br>
        error code 1001
        </error>
        `;
        commandInput.value = "";
    } else if (command.toLowerCase() == "hacker-mode") {
        cmd.innerHTML = cmd.innerHTML + `<br><br>
        ~ Hacker Mode: ACTIVATED!!!!!! s
        `;
        cmd.setAttribute('style', `color: #00ff00 !important;`)
        commandInput.value = "";
    } else {
        cmd.innerHTML = cmd.innerHTML + `<error><br><br>
        ERROR<br>
        invalid command<br>
        (command "${command}" is not valid)<br>
        error code 512
        </error>
        `;
        commandInput.value = "";
    }
})

}
catch (e) {
    try {
      
      document.getElementById('win1del').click();
      document.getElementById('win2del').click();
      document.getElementById('win3del').click();
      document.getElementById('win4del').click();
      document.getElementById('win5del').click();
      document.getElementById('win6del').click();
      document.getElementById('win7del').click();
      document.getElementById('winerrordel').click();
  
      let errorwin = document.getElementById('winerror')
      errorwin.setAttribute("style", "display: block !important;");
      document.getElementById('errorBlock').innerHTML = `Error:\n${e.stack}\n${e.name}\n${e.message}`;
    
    } catch (e) {
      alert(`Failed to display ErrorWin\nError:\n${e.stack}\n${e.name}\n${e.message}`);
    }
  }