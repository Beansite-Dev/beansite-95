const rootElement = document.getElementById('root');

// creates new sdk class
const SDK = new BeanSDK();

// creates new appstore class
// const Store = new AppStore(SDK);

const App = () =>{
  const openGame = (game) => {
    document.getElementById("win3").style.display = "block";
    document.getElementById('win3icon').style.display = "flex";
    document.getElementById("gameloader").src = game;
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
//      <SDK.TaskbarIcon winNum='8' winName="App Store" iconPath="../assets/icons/appstore.png" />,
      ]}
      StartMenuIcons={[
        <SDK.StartMenuShortcut winNum='1' winName="Welcome, User!!" iconPath="../assets/icons/smily.webp" />,
        <SDK.StartMenuShortcut winNum='2' winName="Games" iconPath="../assets/icons/game.png" />,
        <SDK.StartMenuShortcut winNum='4' winName="Mozilla FireBean" iconPath="../assets/icons/fb-logo.png" />,
        <SDK.StartMenuShortcut winNum='5' winName="MicroBean DOS" iconPath="../assets/icons/dos.png" />,
        <SDK.StartMenuShortcut winNum='6' winName="Settings" iconPath="../assets/icons/settings.png" />,
        <SDK.StartMenuShortcut winNum='7' winName="Notepad" iconPath="../assets/icons/notepad.png" />,
//      <SDK.StartMenuShortcut winNum='8' winName="App Store" iconPath="../assets/icons/appstore.png" />,
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
            {/* <li class="link" onClick={() => SDK.openWindow('8')}> <u>Download more ppas from the web</u> </li> */}
        </ul>
      </SDK.Window>

      <SDK.Window winName="Games" winNum="2" defaultStyle={{"height": "350px", "width": "500px", "top": "10vmin", "left": "10vmin",}} includeNavButtons={{"del":true,"max":true,"min":true,}}>
        <h1>Top<strong>_Games</strong></h1>
        <ul>
            <li class="link" onClick={() => openGame("https://driftboss.io")}> <u>Drift Boss</u> </li>
            <li class="link" onClick={() => openGame('https://slopegame.io')}> <u>Slope</u> </li>
            <li class="link" onClick={() => openGame('https://1v1.lol')}> <u>1v1.lol</u> </li>
            <li class="link" onClick={() => openGame('https://smashkarts.io')}> <u>Smash Karts</u> </li>
            <li class="link" onClick={() => openGame('https://shellshock.io')}> <u>Shell Shockers</u> </li>
            <li class="link" onClick={() => openGame('https://play2048.co')}> <u>2048</u> </li>
            <li class="link" onClick={() => openGame('https://dos.zone/doom-dec-1993/')}> <u>Doom</u> </li>
            <li class="link" onClick={() => openGame('https://www.ps1fun.com/final-fantasy-vii')}> <u>Final Fanstasy VII</u> </li>
            <li class="link" onClick={() => openGame('https://bloxd.io')}> <u>Bloxd.io</u> </li>
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
        <div id="editor" contentEditable>
        </div>
      </SDK.Window>

      {/* <Store.Homepage /> */}

      <img src="./assets/error.jpg" id="bsod"/>
      <img src="./assets/icons/clippy.png" id="clippy"/>
      <div id="blackScreen"></div>

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

SDK.init();