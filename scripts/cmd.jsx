
let lastCommand;
let directory = "c:"
let directoryMap = {
    "c:": `
        🗁 root<br>
        ┣ clippy.exe<br>
        ┣ null.exe<br>
        ┣ 🖳 bean_os<br>
        ┣ 🗀 users<br>
        ┗ 🖴 programs
    `,
    "c:/users": `
        🗁 root/users<br>
        ┣ 🗀 guest<br>
        ┗ ⛨ admin
    `,
    "c:/users/admin": `
        🗁 root/users<br>
        ┣ 🖴 programs<br>
        ┣ 🗐 documents<br>
        ┗ 🖪 downloads
    `,
    "c:/users/admin/downloads": `
        🗁 root/users/admin/downloads<br>
        ┗ empty...
    `,
    "c:/users/admin/programs": `
        🗁 root/users/admin/programs<br>
        ┗ empty...
    `,
    "c:/users/admin/documents": `
        🗁 root/users/admin/documents<br>
        ┗ empty...
    `,
    "c:/users/guest": `
        🗁 root/guest<br>
        ┣ 🖴 programs<br>
        ┣ 🗐 documents<br>
        ┗ 🖪 downloads
    `,
    "c:/users/guest/downloads": `
        🗁 root/users/guest/downloads<br>
        ┗ empty...
    `,
    "c:/users/guest/programs": `
        🗁 root/users/guest/programs<br>
        ┗ empty...
    `,
    "c:/users/guest/documents": `
        🗁 root/users/guest/documents<br>
        ┗ empty...
    `,
    "c:/bean_os": `
        🗁 root/bean_os<br>
        ┣ explorer.exe<br>
        ┣ textedit.exe<br>
        ┣ windloader.exe<br>
        ┣ dos.exe<br>
        ┣ kill.exe<br>
        ┣ b95.sys<br>
        ┗ 🖴 bean32
    `,
    "c:/bean_os/bean32": `
        🗁 root/bean_os/bean32<br>
        ┣ gameloader.exe<br>
        ┣ jjd88w.dll<br>
        ┣ oqiiw.sys<br>
        ┣ oqwd7162.dll<br>
        ┣ kjw77wd.dll<br>
        ┣ winljs.dll<br>
        ┣ b95core.sys<br>
        ┣ b95sc.dll<br>
        ┣ usr.sam<br>
        ┣ scrCompiler.cpp<br>
        ┣ core.cpp<br>
        ┗ skjc97.dll
    `,
    "c:/programs": `
        🗁 root/programs<br>
        ┗ 🗀 firebean
    `,
    "c:/programs/firebean": `
        🗁 root/programs/firebean<br>
        ┣ firebean.exe<br>
        ┣ ac14d5.dll<br>
        ┗ 🗀 cache
    `,
    "c:/programs/firebean/cache": `
        🗁 root/programs/firebean/cache<br>
        ┗ empty...
    `,
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
      

let cmdScript = (e) => { 
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
    } else if (command.toLowerCase().includes("dir")) {
        cmd.innerHTML = cmd.innerHTML + `<br><br>
        current directory: ${directory}<br>
        ${directoryMap[directory]}
        `;
        commandInput.value = "";
    } else if (command.toLowerCase().includes("cd")) {
        commandInput.value = "";
        try {
            if (command.split(" ")[1]==".." || command=="cd..") {
                directorySplit = directory.split('/')
                directorySplit[directorySplit.length - 1]="";
                directory = directorySplit.join('/').slice(0, -1)
                if (directoryMap[directory] == undefined) {
                    cmd.innerHTML = cmd.innerHTML + `<error><br><br>
                        ERROR<br>
                        path does not exist<br>
                        (the directory "${directory}" is not valid)<br>
                        error code 404
                        </error>
                    `;
                    directory = "c:";
                } else {
                    cmd.innerHTML = cmd.innerHTML + `<br><br>
                        entered directory: ${directory}
                    `
                }
            } else {
                if (directoryMap[directory + '/' + command.split(" ")[1].replace('/', '')] == undefined) {
                    cmd.innerHTML = cmd.innerHTML + `<error><br><br>
                        ERROR<br>
                        path does not exist<br>
                        (the directory "${directory}" is not valid)<br>
                        error code 404
                        </error>
                    `;
                } else {
                    if (directory == 'c:/') directory = directory.slice(0, -1);
                    directory = directory + '/' + command.split(" ")[1].replace('/', '')
                    cmd.innerHTML = cmd.innerHTML + `<br><br>
                        entered directory: ${directory}
                    `
                }
            }
        }
        catch (e) {
            cmd.innerHTML = cmd.innerHTML + `<error><br><br>
            ERROR<br>
            invalid syntax<br>
            (command "cd" was not utilized properly)<br>
            error code 205
            </error>
            `;
        }
    } else if (command.toLowerCase().includes("help me")) {
        cmd.innerHTML = cmd.innerHTML + `<br><br>
        I can't help you with that...
        `;
        commandInput.value = "";
    } else if (command.toLowerCase().includes("cls")) {
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
            } else if (command.split(" ")[1] == "null.exe") {
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
            } else if (command.split(" ")[1]=="firebean.exe") { 
                document.getElementById('win4-startmenushortcut').click()
            } else if (command.split(" ")[1]=="dos.exe") { 
                document.getElementById('win5-startmenushortcut').click()
            } else if (command.split(" ")[1]=="textedit.exe") { 
                document.getElementById('win7-startmenushortcut').click()
            } else if (command.split(" ")[1]=="gameloader.exe") {
                if (!command.split(" ")[2]) {
                    cmd.innerHTML = cmd.innerHTML + `<error><br><br>
                        ERROR<br>
                        argv[1] not found<br>
                        (file needs argument but none was given)<br>
                        error code 502
                        </error>
                    `;
                } else {
                    try {
                        document.getElementById(`g-${command.split(" ")[2]}`).dispatchEvent(new Event('click'));
                    } catch (e) {
                        cmd.innerHTML = cmd.innerHTML + `<error><br><br>
                            ERROR<br>
                            argv[1] invalid<br>
                            (file arguement is invalid)<br>
                            error code 502
                            </error>
                        `;
                    }
                }
            } else {
                cmd.innerHTML = cmd.innerHTML + `<error><br><br>
                    ERROR<br>
                    application not found<br>
                    (there may be a typo in the name)<br>
                    error code 404
                    </error>
                `;
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
    } else if (command.toLowerCase().includes("hacker-mode")) {
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
    cmd.scrollTop = cmd.scrollHeight;
    lastCommand = command;
}

const CMD = () => {
    let run = (e) => cmdScript(e);
    let keybind = (e) => {
        if (e.key == 'Enter') {
          cmdScript(e)
        }
        if (e.key == "ArrowUp") {
            // alert(lastCommand)
            if (lastCommand) commandInput.value = lastCommand;
        }
    };
    return (
        <SDK.Window winName="MicroBean DOS" winNum="5" defaultStyle={{"height": "350px", "width": "500px", "top": "15vmin", "left": "15vmin",}} includeNavButtons={{"del":true,"max":true,"min":true,}}>
            <div id="cmd">
                Welcome to MicroBean Dos <br/>
                MicroBean (c) 1995
            </div>
            <input type="text" id="commandInput" onKeyDown={() => keybind(event)} />
            <button id="runCmd" onClick={() => run(event)}>Run</button>
        </SDK.Window>
    );
}

