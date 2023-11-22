// import { initWin } from './script';

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e.preventDefault();
      // initial maximization check
      let ismaxmixed = document.getElementById(elmnt.id + "ismaximized");
      if (ismaxmixed.content=="true") {
        elmnt.setAttribute("style",`
          top: ${e.clientY};
          left: ${e.clientX};
          width: 35dvw; 
          height: 50dvh;
          resize: both;
          box-shadow: 4px 4px 3px #000000, 0 0 4px #00000050;
        `);
        ismaxmixed.content="false";
        document.getElementById(`${elmnt.id}max`).innerHTML = "🗖";
      }
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.transition = "0s";
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
      elmnt.style.transition = ".35s";
    }
  }
  
  function addFunctionalityToNavbarButtons(num) {
    let win = document.getElementById(`win${num}`)
    let oldzIndex;
    let navbtn = {
      "close": document.getElementById(`win${num}del`),
    };
    if (document.getElementById(`win${num}min`)) navbtn["min"] = document.getElementById(`win${num}min`);
    if (document.getElementById(`win${num}max`)) navbtn["max"] = document.getElementById(`win${num}max`);
    new ResizeObserver(() => {
      // alert('resize detected!')
      win.setAttribute('style', `${win.getAttribute('style')} transition: 0s !important;`);
    }).observe(win);
    if (navbtn["max"]) {
      navbtn["max"].addEventListener("click", (e) => {
        // alert('maximizing')
        e.preventDefault();
        let content = document.getElementById(`win${num}contentHolder`)
        let ismaxmixed = document.getElementById(`win${num}ismaximized`);
        if (document.getElementById(`win${num}isminimized`).content=="false") {
          if (ismaxmixed.content=="true") {
            win.setAttribute("style",`
              top: ${Number(num)*5}vmin;
              left: ${Number(num)*5}vmin;
              width: 35dvw; 
              height: 50dvh;
              resize: both;
              box-shadow: 4px 4px 3px #000000, 0 0 4px #00000050;
            `);
            document.getElementById(`win${num}max`).innerHTML = "🗖";
            content.setAttribute("style", `
              resize: both;
            `)
            ismaxmixed.content="false";  
          } else if (ismaxmixed.content=="false") {
            win.setAttribute("style",`
              top: 0; 
              left: 0; 
              box-shadow: none;
              resize: none;
              width: 100dvw; 
              height: calc(100dvh - 45px);
            `);
            document.getElementById(`win${num}max`).innerHTML = "🗗";
            content.setAttribute("style", `
              resize: none;
            `)
            ismaxmixed.content="true";  
          }
        }
      });
    }
    navbtn["close"].addEventListener("click", (e) => {
      e.preventDefault();
      win.setAttribute("style",`
        display: none;
        ${ () => { 
          if (num!="error") {
            return (`
              top: ${Number(num)*5}vmin;
              left: ${Number(num)*5}vmin;
            `);
          } else {
            return (`
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            `)
          }
        }}
        width: 35dvw; 
        height: 50dvh;
        resize: both;
        box-shadow: 4px 4px 3px #000000, 0 0 4px #00000050;
      `);
      if (navbtn["max"]) navbtn["max"].innerHTML = "🗖";
      if (document.getElementById(`win${num}icon`)) document.getElementById(`win${num}icon`).style.display="none";
      document.getElementById(`win${num}ismaximized`).content="false";  
    });
    if (navbtn["min"]) {
      navbtn["min"].addEventListener("click", (e) => {
        e.preventDefault();
        let ismaxmixed = document.getElementById(`win${num}ismaximized`);
        let isminimized = document.getElementById(`win${num}isminimized`);
        let content = document.getElementById(`win${num}contentHolder`);
        if (isminimized.content=="false") {
          content.style.display = "none";
          win.setAttribute("style",`
            resize: horizontal;
            min-height: 24px;
            height: 30.5px;
          `);
          ismaxmixed.content="false"
          if (navbtn["max"]) navbtn["max"].innerHTML = "🗖";
          isminimized.content = "true";
        } else if (isminimized.content=="true") {
          content.style.display = "block";
          win.setAttribute("style",`
            resize: both;
            min-height: 10dvw;
            height: 50dvh;
          `);
          isminimized.content = "false";
        }
      });
    }
}
function addStartMenuFunctionality(num) {
    document.getElementById(`win${num}-startmenushortcut`).addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById(`win${num}`).style.display='block';
        document.getElementById(`win${num}icon`).style.display='flex';
  })
}

let initWin = (num, hasStartShortcut=true) => {
  dragElement(document.getElementById(`win${num}`));
  addFunctionalityToNavbarButtons(num);
  if (hasStartShortcut) addStartMenuFunctionality(num);
}

let setupAppInstallButton = (game, iconpath, gameName) => {
    let elements = {
        "gameItem": document.getElementById(game),
        "gameButton": document.getElementById(`${game}-installbutton`),
        "isInstalled": document.getElementById(`${game}-isinstalled`),
    }
    elements["gameButton"].addEventListener('click', (e) => {
        e.preventDefault();
        if (elements["isInstalled"].content=="false"){
            let newSMS = document.createElement('div')
            newSMS.id=`win${game}-startmenushortcut`
            newSMS.classList.add('application')
            newSMS.innerHTML = `
            <img src="${iconpath}">
            <h1>${gameName}</h1>`
            document.getElementById('sm-contents').appendChild(newSMS);
            document.getElementById('taskbar').innerHTML = `
            ${document.getElementById('taskbar').innerHTML}
            <div class="icon" id="win${game}icon">
                <img src="${iconpath}">
                <h1>${gameName}</h1>
            </div>`
            let newWin = document.createElement('div')
            newWin.id=`win${game}`;
            newWin.classList.add('window');
            newWin.innerHTML = `
            <nav id="win${game}header" class="winnav">
                <wintitle>${gameName}</wintitle>
                <button id="win${game}del">🗙</button>
                <button id="win${game}max">🗖</button>
                <button id="win${game}min">🗕</button>
            </nav>
            <meta id="win${game}ismaximized" name="win${game}ismaximized" content="false"/>
            <meta id="win${game}isminimized" name="win${game}isminimized" content="false"/>
            <div class="contentHolder" id="win${game}contentHolder">
                <h1>doom goes here</h1>
            </div>`
            document.getElementById("body").appendChild(newWin);
            elements["gameButton"].innerHTML = "Installed!"
            elements["isInstalled"].content="true";
            initWin(game)
        } else if (elements["isInstalled"].content=="true") {

        }
    });
}

setupAppInstallButton("doom", "../assets/icons/gameicons/doom.webp", "Doom")