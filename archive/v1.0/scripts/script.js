try {

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
  let navbtn = {
    "close": document.getElementById(`win${num}del`),
    "max": document.getElementById(`win${num}max`),
  };
  if (document.getElementById(`win${num}min`)) {
    navbtn["min"] = document.getElementById(`win${num}min`);
  }
  new ResizeObserver(() => {
    // alert('resize detected!')
    win.setAttribute('style', `${win.getAttribute('style')} transition: 0s !important;`);
  }).observe(win);
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
          width:${Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)}px; 
          height:${Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - 45}px;
        `);
        content.setAttribute("style", `
          resize: none;
        `)
        ismaxmixed.content="true";  
      }
    }
  });
  navbtn["close"].addEventListener("click", (e) => {
    e.preventDefault();
    win.setAttribute("style",`
      display: none;
      top: ${Number(num)*5}vmin;
      left: ${Number(num)*5}vmin;
      width: 35dvw; 
      height: 50dvh;
      resize: both;
      box-shadow: 4px 4px 3px #000000, 0 0 4px #00000050;
    `);
    document.getElementById(`win${num}icon`).style.display="none";
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
        ismaxmixed.content="false";  
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

document.getElementById('startmenu').setAttribute('style', `left: -22dvw;`);

document.getElementById("start").addEventListener('click', (e) => {
  e.preventDefault();
  // alert("clicked")
  let startmenu = document.getElementById('startmenu');
  let isHidden = document.getElementById('startmenuishidden');
  if (isHidden.content=="true") {
    startmenu.setAttribute('style', `left: 0;`);
    isHidden.content="false";
  } else if (isHidden.content=="false") {
    startmenu.setAttribute('style', `left:-22dvw;`);
    isHidden.content="true";
  }
});

function addStartMenuFunctionality(num) {
  document.getElementById(`win${num}-startmenushortcut`).addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById(`win${num}`).style.display='block';
    document.getElementById(`win${num}icon`).style.display='flex';
  })
}

dragElement(document.getElementById("win1"));
dragElement(document.getElementById("win2"));
dragElement(document.getElementById("win3"));
dragElement(document.getElementById("win4"));
dragElement(document.getElementById("win5"));
dragElement(document.getElementById("win6"));
addFunctionalityToNavbarButtons('1');
addFunctionalityToNavbarButtons('2');
addFunctionalityToNavbarButtons('3');
addFunctionalityToNavbarButtons('4');
addFunctionalityToNavbarButtons('5');
addFunctionalityToNavbarButtons('6');
addStartMenuFunctionality('1');
addStartMenuFunctionality('2');
addStartMenuFunctionality('4');
addStartMenuFunctionality('5');
addStartMenuFunctionality('6');

}
catch (e) {
  alert(`Error:\n${e.stack}\n${e.name}\n${e.message}`);
}