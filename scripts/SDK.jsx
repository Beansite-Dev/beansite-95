class BeanSDK {
  constructor(){
    this.allWins = [];
  }
  Window = (prop) => {
    const minimize = (e) => {
      e.preventDefault();
      prop.beforeMinimize ? prop.beforeMinimize() : null;
      let win = document.getElementById(`win${prop.winNum}`);
      let ismaxmized = document.getElementById(`win${prop.winNum}ismaximized`);
      let max = document.getElementById(`win${prop.winNum}max`);
      let isminimized = document.getElementById(`win${prop.winNum}isminimized`);
      let content = document.getElementById(`win${prop.winNum}contentHolder`);
      if (isminimized.content=="false") {
        content.style.display = "none";
        if (ismaxmized.value=="true") {
          win.style.top = prop.defaultStyle.top || 0;
          win.style.left = prop.defaultStyle.left || 0;
          win.style.width = prop.defaultStyle.width || 0;
          ismaxmized="false";
          if (prop.includeNavButtons.max) max.innerHTML = "🗖";
        }
        win.style.resize = "horizontal";
        win.style.minHeight = "24px";
        win.style.height = "30.5px";
        isminimized.content = "true";
      } else if (isminimized.content=="true") {
        content.style.display = "block";
        win.style.resize = "both";
        win.style.minHeight = "10dvh";
        win.style.height = prop.defaultStyle.height || 0;
        isminimized.content = "false";
      }
    }
    const maximize = (e) => {
      e.preventDefault();
      prop.beforeMaximize ? prop.beforeMaximize() : null;
      let win = document.getElementById(`win${prop.winNum}`)
      let content = document.getElementById(`win${prop.winNum}contentHolder`)
      let ismaxmized = document.getElementById(`win${prop.winNum}ismaximized`);
      if (document.getElementById(`win${prop.winNum}isminimized`).content=="false") {
        if (ismaxmized.content=="true") {
          win.style.top = prop.defaultStyle.top || 0;
          win.style.left = prop.defaultStyle.left || 0;
          win.style.width = prop.defaultStyle.width || 0;
          win.style.height = prop.defaultStyle.height || 0;
          win.style.boxShadow = "4px 4px 3px #000000, 0 0 4px #00000050";
          win.style.resize = "both";
  
          document.getElementById(`win${prop.winNum}max`).innerHTML = "🗖";
          content.style.resize="none";
          ismaxmized.content="false";  
        } else if (ismaxmized.content=="false") {
          win.style.top = 0;
          win.style.left = 0;
          win.style.width = "100dvw";
          win.style.height = "calc(100dvh - 45px)";
          win.style.boxShadow = "0 0 0 #00000000";
          win.style.resize = "none";
          document.getElementById(`win${prop.winNum}max`).innerHTML = "🗗";
          content.setAttribute("style", `
            resize: none;
          `)
          content.style.resize="both";
          ismaxmized.content="true";  
        }
      }
    }
    const close = (e) => {
      e.preventDefault();
      prop.beforeClose ? prop.beforeClose() : null;
      let win = document.getElementById(`win${prop.winNum}`)
      win.style.display = "none";
      win.style.width = prop.defaultStyle.width || 0;
      win.style.height = prop.defaultStyle.height || 0;
      win.style.top = prop.defaultStyle.top || 0;
      win.style.left = prop.defaultStyle.left || 0;
      win.style.resize = "both";
      win.style.boxShadow= "4px 4px 3px #000000, 0 0 4px #0000005";
      if (prop.includeNavButtons.max) document.getElementById(`win${prop.winNum}max`).innerHTML = "🗖";
      if (document.getElementById(`win${prop.winNum}icon`)) document.getElementById(`win${prop.winNum}icon`).style.display="none";
      document.getElementById(`win${prop.winNum}ismaximized`).content="false"; 
    }
    this.allWins.push(prop.winNum);
    return (
      <div class="window" id={`win${prop.winNum}`} style={prop.defaultStyle}>
          <nav id={`win${prop.winNum}header`} class="winnav">
              <wintitle>{prop.winName}</wintitle>
              { prop.includeNavButtons["del"] ? <button id={`win${prop.winNum}del`} onClick={() => close(event)}>🗙</button> : undefined}
              { prop.includeNavButtons["max"] ? <button id={`win${prop.winNum}max`} onClick={() => maximize(event)}>🗖</button> : undefined}
              { prop.includeNavButtons["min"] ? <button id={`win${prop.winNum}min`} onClick={() => minimize(event)}>🗕</button> : undefined}
          </nav>
          <meta id={`win${prop.winNum}ismaximized`} name={`win${prop.winNum}ismaximized`} content="false"/>
          <meta id={`win${prop.winNum}isminimized`} name={`win${prop.winNum}isminimized`} content="false"/>
          <div class="contentHolder" id={`win${prop.winNum}contentHolder`}>
            {prop.children}
          </div>
      </div>
    )
  }
  Taskbar = (prop) => {
    return (
      <div id="taskbar">
        <button id="start">
          <img id="startBtnBean" src="./assets/bean-icon.png"/>
          Start
        </button>
        {prop.children}
      </div>
    )
  }
  StartMenu = (prop) => {
    return (
      <div id="startmenu">
        <meta id="startmenuishidden" name="startmenuishidden" content="true"/>
        <div class="sidebar">
            <h1>Bean Site 95</h1>
        </div>
        <div class="main" id="sm-contents">
          {prop.children}
        </div>
      </div>
    )
  }
  DesktopShortcut = (prop) => {
    return (
      <button class="desktopshortcut" id={`win${prop.winNum}-desktopshortcut`} onClick={() => this.openWindow(prop.winNum)}>
          <img src={prop.iconPath} />
          <h1>{prop.winName}</h1>
      </button>
    )
  }
  StartMenuShortcut = (prop) => {
    const handleClick = (e) => {
      e.preventDefault();
      document.getElementById(`win${prop.winNum}`).style.display='block';
      document.getElementById(`win${prop.winNum}icon`).style.display='flex';
    }
    return (
      <div class="application" id={`win${prop.winNum}-startmenushortcut`} onClick={() => handleClick(event)}>
          <img src={prop.iconPath} />
          <h1>{prop.winName}</h1>
      </div>
    )
  }
  TaskbarIcon = (prop) => {
    return (
      <div class="icon" id={`win${prop.winNum}icon`}>
        <img src={prop.iconPath}/>
        <h1>{prop.winName}</h1>
      </div>
    )
  }
  
  dragElement = (elmnt) => {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
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
  
  TemplateUI = (prop) => {
    return (
      <div id="templateuiwrapper">
        <div id="desktopwrapper">
        {prop.DesktopShortcuts}
        </div>
        {prop.children}

        <SDK.StartMenu>
            {prop.StartMenuIcons}
        </SDK.StartMenu>

        <SDK.Taskbar>
            {prop.TaskBarIcons}
        </SDK.Taskbar>
      </div>
    )
  }
  closeWindow=(winNum)=>{if(document.getElementById(`win${winNum}del`)) document.getElementById(`win${winNum}del`).click();}
  openWindow=(winNum)=>{if(document.getElementById(`win${winNum}-startmenushortcut`)) document.getElementById(`win${winNum}-startmenushortcut`).click();}
  init = () => {
    document.getElementById("startmenu").style.left = `-350px`;
    document.getElementById("start").addEventListener('click', (e) => {
      e.preventDefault();
      // alert("clicked")
      let startmenu = document.getElementById('startmenu');
      let isHidden = document.getElementById('startmenuishidden');
      if (isHidden.content=="true") {
        startmenu.style.left = "0px";
        isHidden.content="false";
      } else if (isHidden.content=="false") {
        startmenu.style.left = `-350px`;
        isHidden.content="true";
      }
    });
    // let buttons = document.getElementsByTagName('button')
    // for (let i = 0; i < buttons.length; i++) {
    //   buttons[i].addEventListener('click', () => {
    //     new Audio('/assets/audio/click.wav').play();
    //   })
    // }
    for(let i=0;i<this.allWins.length;i++){
      let element = document.getElementById(`win${this.allWins[i]}`);
      new ResizeObserver(() => {
        // console.log('resizing');
        element.style.transition = "0s";
      }).observe(element);
      // element.addEventListener('mouseup', (e) => {
      //   e.preventDefault();
      //   element.style.transition = ".35s";
      // })s
      this.dragElement(element)
    }
  }
}