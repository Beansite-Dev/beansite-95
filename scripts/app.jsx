const rootElement = document.getElementById('root');

// creates new sdk class
const SDK = new BeanSDK();
const LoaderUI = new ArchiveLoader(SDK);
// creates new appstore class
// const Store = new AppStore(SDK);

const App = () =>{
  const openGame = (game) => {
    document.getElementById("win3").style.display = "block";
    document.getElementById('win3icon').style.display = "flex";
    document.getElementById("gameloader").src = game;
  }
  const notepadKeyDown = (e) => {
    if(e.key=="Tab"){
      e.preventDefault();
      var editor = e.target;
      var doc = editor.ownerDocument.defaultView;
      var sel = doc.getSelection();
      var range = sel.getRangeAt(0);
      var tabNode = document.createTextNode("\u00a0\u00a0\u00a0\u00a0");
      range.insertNode(tabNode);
      range.setStartAfter(tabNode);
      range.setEndAfter(tabNode); 
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
  return (
    <SDK.TemplateUI 
      TaskBarIcons={[
        <SDK.TaskbarIcon winNum='1' winName="Welcome, User!!" iconPath="../assets/icons/smily.webp" />,
        <SDK.TaskbarIcon winNum='2' winName="Games" iconPath="../assets/icons/game.png" />,
        <SDK.TaskbarIcon winNum='3' winName="c:/bean_os/bean32/ga..." iconPath="../assets/icons/cd.png" />,
        <SDK.TaskbarIcon winNum='4' winName="Mozilla FireBean" iconPath="../assets/icons/fb-logo.png" />,
        <SDK.TaskbarIcon winNum='5' winName="MicroBean DOS" iconPath="../assets/icons/dos.png" />,
        <SDK.TaskbarIcon winNum='6' winName="Settings" iconPath="../assets/icons/settings.png" />,
        <SDK.TaskbarIcon winNum='7' winName="Notepad" iconPath="../assets/icons/notepad.png" />,
        <SDK.TaskbarIcon winNum='9' winName="Version Loader" iconPath="../assets/icons/cd.png" />,
//      <SDK.TaskbarIcon winNum='8' winName="App Store" iconPath="../assets/icons/appstore.png" />,
      ]}
      StartMenuIcons={[
        <SDK.StartMenuShortcut winNum='1' winName="Welcome, User!!" iconPath="../assets/icons/smily.webp" />,
        <SDK.StartMenuShortcut winNum='2' winName="Games" iconPath="../assets/icons/game.png" />,
        <SDK.StartMenuShortcut winNum='4' winName="Mozilla FireBean" iconPath="../assets/icons/fb-logo.png" />,
        <SDK.StartMenuShortcut winNum='5' winName="MicroBean DOS" iconPath="../assets/icons/dos.png" />,
        <SDK.StartMenuShortcut winNum='6' winName="Settings" iconPath="../assets/icons/settings.png" />,
        <SDK.StartMenuShortcut winNum='7' winName="Notepad" iconPath="../assets/icons/notepad.png" />,
        <SDK.StartMenuShortcut winNum='9' winName="Version Loader" iconPath="../assets/icons/cd.png" />,
//      <SDK.StartMenuShortcut winNum='8' winName="App Store" iconPath="../assets/icons/appstore.png" />,
      ]}
      DesktopShortcuts={[
        <SDK.DesktopShortcut winNum='1' winName="Welcome, User!!" iconPath="../assets/icons/smily.webp" />,
        <SDK.DesktopShortcut winNum='2' winName="Games" iconPath="../assets/icons/game.png" />,
        <SDK.DesktopShortcut winNum='4' winName="Mozilla FireBean" iconPath="../assets/icons/fb-logo.png" />,
        <SDK.DesktopShortcut winNum='5' winName="MicroBean DOS" iconPath="../assets/icons/dos.png" />,
        <SDK.DesktopShortcut winNum='6' winName="Settings" iconPath="../assets/icons/settings.png" />,
        <SDK.DesktopShortcut winNum='7' winName="Notepad" iconPath="../assets/icons/notepad.png" />,
        <SDK.DesktopShortcut winNum='9' winName="Version Loader" iconPath="../assets/icons/cd.png" />,
      ]}
    >

      <SDK.Window winName="Welcome, User!!" winNum="1" defaultStyle={{"height": "350px", "width": "500px", "top": "5vmin", "left": "5vmin",}} includeNavButtons={{"del":true,"max":true,"min":true,}}>
        <h1 class="ph1">Welcome To <h1 class="logo">Bean Site <sup>95</sup></h1></h1>
        <h1>It's the <strong>ultimate</strong> playground for bean enjoyers!</h1>
        <ul>
            <li class="link" onClick={() => SDK.openWindow('2')}> <u>Check out games!</u> </li>
            <li class="link" onClick={() => SDK.openWindow('4')}> <u>Browse the web in Mozilla FireBean</u> </li>
            <li class="link" onClick={() => SDK.openWindow('5')}> <u>Look like a hacker in MicroBean DOS</u> </li>
            <li class="link" onClick={() => SDK.openWindow('6')}> <u>Tweak your experience to perfection</u> </li>
            <li class="link" onClick={() => SDK.openWindow('7')}> <u>Write to your heart's content</u> </li>
            <li class="link" onClick={() => SDK.openWindow('9')}> <u>Check out old versions</u> </li>
            {/* <li class="link" onClick={() => SDK.openWindow('8')}> <u>Download more ppas from the web</u> </li> */}
        </ul>
      </SDK.Window>

      <SDK.Window winName="Games" winNum="2" defaultStyle={{"height": "350px", "width": "500px", "top": "10vmin", "left": "10vmin",}} includeNavButtons={{"del":true,"max":true,"min":true,}}>
        <h1>Top<strong>_Games</strong></h1>
        <ul>
            <li class="link" onClick={() => openGame("https://www.mathplayground.com/drift-boss-v3/index.html")}> <u>Drift Boss</u> </li>
            <li class="link" onClick={() => openGame('https://slope2.github.io/')}> <u>Slope</u> </li>
            <li class="link" onClick={() => openGame('https://1v1.lol')}> <u>1v1.lol</u> </li>
            <li class="link" onClick={() => openGame('https://smashkarts.io')}> <u>Smash Karts</u> </li>
            <li class="link" onClick={() => openGame('https://shellshock.io')}> <u>Shell Shockers</u> </li>
            <li class="link" onClick={() => openGame('https://play2048.co')}> <u>2048</u> </li>
            <li class="link" onClick={() => openGame('https://dos.zone/doom-dec-1993/')}> <u>Doom</u> </li>
            <li class="link" onClick={() => window.open('./web/eag/eag.html', '_blank') }> <u>Eaglercraft</u> </li>
            <li class="link" onClick={() => openGame('https://www.ps1fun.com/final-fantasy-vii')}> <u>Final Fanstasy VII</u> </li>
            <li class="link" onClick={() => openGame('https://bloxd.io')}> <u>Bloxd.io</u> </li>
            <li class="link" onClick={() => openGame('https://www.mathplayground.com/x-trench-run/index.html')}> <u>X-Trench Run</u> </li>
            <li class="link" onClick={() => openGame('https://armedforces.io')}> <u>Armed Forces</u> </li>
            <li class="link" onClick={() => openGame('https://www.retrogames.cc/embed/44169-ocarina-of-time-redux.html')}> <u>Zelda: Ocarina of Time</u> </li>
            <li class="link" onClick={() => openGame('https://www.retrogames.cc/embed/43806-super-mario-bros-simplified.html')}> <u>Super Mario</u> </li>
        </ul>
      </SDK.Window>

      <SDK.Window winName="c:/bean_os/bean32/gameloader.exe" winNum="3" defaultStyle={{"height": "75dvh", "width": "75dvw", "top": "calc(50% - (75dvh / 2))", "left": "calc(50% - (75dvw / 2))",}} includeNavButtons={{"del":true,"max":true,"min":false,}} beforeClose={() => document.getElementById('gameloader').src=""} >
        <img id="loading" src="./assets/loading.gif" />
        <iframe id="gameloader" src="" frameBorder="0">games will load here</iframe>
      </SDK.Window>

      <CMD />
      <FireBean />
      <SettingsMenu />

      <SDK.Window winName="Notepad" winNum="7" defaultStyle={{"height": "350px", "width": "500px", "top": "25vmin", "left": "25vmin",}} includeNavButtons={{"del":true,"max":true,"min":true,}}>
        <div id="topbar">
          <a id="fileTabButton">File</a>
        </div>
        <div id="editor" contentEditable onKeyDown={() => notepadKeyDown(event)}>
        </div>
      </SDK.Window>

      <SDK.Window winName="Shameless Advertisment" winNum="99" defaultStyle={{"height": "350px", "width": "500px", "top": "5vmin","right": "5vmin",}} includeNavButtons={{"del":true,"max":true,"min":true,}}>
        <h1>Check out Snack Central!</h1>
        <p>You like gum, me too. Get a good deal on your gum.</p>
        <a href="https://snackcentral.vercel.app">Official Website</a>
      </SDK.Window>

      <LoaderUI.Window />

      {/* <Store.Homepage /> */}

      <img src="./assets/error.jpg" id="bsod" draggable="false"/>
      <img src="./assets/icons/clippy.png" id="clippy" draggable="false"/>
      {/* <div id="blackScreen"></div> */}

    </SDK.TemplateUI>
  );
}
  
ReactDOM.render(
  <App />,
  rootElement
);

SDK.closeWindow('2');
SDK.closeWindow('3');
SDK.closeWindow('4');
SDK.closeWindow('5');
SDK.closeWindow('6');
SDK.closeWindow('7');
SDK.closeWindow('9');
// SDK.closeWindow('99'); // special: ad

SDK.init();