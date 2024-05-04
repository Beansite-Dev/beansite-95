const rootElement = document.getElementById('root');

// creates new sdk class
const SDK = new BeanSDK();
const LoaderUI = new ArchiveLoader(SDK);
// creates new appstore class
// const Store = new AppStore(SDK);

const App = () =>{
  const vnum = "2.9.2";
  const vnum_rdate = "5/4/24";
  function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
  }
  const openGame = (game,type) => {
    if (type=="OpenInGL"){
      document.getElementById("win3").style.display = "block";
      document.getElementById('win3icon').style.display = "flex";
      document.getElementById("gameloader").src = game;
    } else if (type=="NewTab"){
      window.open(game,'_blank')
    } else { console.error('Invalid Open Type'); }
  }
  const Game = (prop) => {
    return (
      <div className="bp_gcard">
        <h1>{prop.name}</h1>
        <button onClick={()=>openGame(prop.url,prop.type)}>
        Play</button>
        <div className="bp_gcard_preview" id={`g_${prop.gID}`}></div>
      </div>
    )
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
  const Alt=(prop)=>{return(<li><a href={prop.URL}>{prop.URL}</a></li>)};
  return (
    <SDK.TemplateUI 
      TaskBarIcons={[
        <SDK.TaskbarIcon winNum='1' winName="Welcome, User!!" iconPath="../assets/icons/smily.webp" />,
        <SDK.TaskbarIcon winNum='2' winName="Beanpowered" iconPath="../assets/icons/bp.png" />,
        <SDK.TaskbarIcon winNum='3' winName="c:/bean_os/bean32/ga..." iconPath="../assets/icons/cd.png" />,
        <SDK.TaskbarIcon winNum='4' winName="Mozzarella FireBean" iconPath="../assets/icons/fb-logo.png" />,
        <SDK.TaskbarIcon winNum='5' winName="MicroBean DOS" iconPath="../assets/icons/dos.png" />,
        <SDK.TaskbarIcon winNum='6' winName="Settings" iconPath="../assets/icons/settings.png" />,
        <SDK.TaskbarIcon winNum='7' winName="Notepad" iconPath="../assets/icons/notepad.png" />,
        <SDK.TaskbarIcon winNum='8' winName="Bean Paint" iconPath="../assets/icons/bpaint.webp" />,
        <SDK.TaskbarIcon winNum='9' winName="Version Loader" iconPath="../assets/icons/cd.png" />,
        <SDK.TaskbarIcon winNum='10' winName="Local Client Download" iconPath="../assets/icons/cd.png" />,
      ]}
      StartMenuIcons={[
        <SDK.StartMenuShortcut winNum='1' winName="Welcome, User!!" iconPath="../assets/icons/smily.webp" />,
        <SDK.StartMenuShortcut winNum='2' winName="Beanpowered" iconPath="../assets/icons/bp.png" />,
        <SDK.StartMenuShortcut winNum='4' winName="Mozzarella FireBean" iconPath="../assets/icons/fb-logo.png" />,
        <SDK.StartMenuShortcut winNum='5' winName="MicroBean DOS" iconPath="../assets/icons/dos.png" />,
        <SDK.StartMenuShortcut winNum='6' winName="Settings" iconPath="../assets/icons/settings.png" />,
        <SDK.StartMenuShortcut winNum='7' winName="Notepad" iconPath="../assets/icons/notepad.png" />,
        <SDK.StartMenuShortcut winNum='8' winName="Bean Paint" iconPath="../assets/icons/bpaint.webp" />,
        <SDK.StartMenuShortcut winNum='9' winName="Version Loader" iconPath="../assets/icons/cd.png" />,
        <SDK.StartMenuShortcut winNum='10' winName="Local Client Download" iconPath="../assets/icons/cd.png" />,
      ]}
      DesktopShortcuts={[
        <SDK.DesktopShortcut winNum='1' winName="Welcome, User!!" iconPath="../assets/icons/smily.webp" />,
        <SDK.DesktopShortcut winNum='2' winName="Bean Powered" iconPath="../assets/icons/bp.png" />,
        <SDK.DesktopShortcut winNum='4' winName="Mozzarella FireBean" iconPath="../assets/icons/fb-logo.png" />,
        <SDK.DesktopShortcut winNum='5' winName="MicroBean DOS" iconPath="../assets/icons/dos.png" />,
        <SDK.DesktopShortcut winNum='6' winName="Settings" iconPath="../assets/icons/settings.png" />,
        <SDK.DesktopShortcut winNum='7' winName="Notepad" iconPath="../assets/icons/notepad.png" />,
        <SDK.DesktopShortcut winNum='8' winName="Bean Paint" iconPath="../assets/icons/bpaint.webp" />,
        <SDK.DesktopShortcut winNum='9' winName="Version Loader" iconPath="../assets/icons/cd.png" />,
        <SDK.DesktopShortcut winNum='10' winName="Local Client Download" iconPath="../assets/icons/cd.png" />,
      ]}
    >

      {/* Special ------------------------------------------------------ */}
      <SDK.Window winName="Shameless Advertisment" winNum="-99" defaultStyle={{"height": "40vmin", "width": "65vmin", "top": "5vmin","right": "5vmin",}} includeNavButtons={{"del":true,"max":true,"min":true,}}>
        <h1>Check out the Kandy Krew!</h1>
        <p>Gum can be expensive and hard to get as a middle schooler. We fix that, with deals 25%-50% cheaper than walgreens.</p>
        <a href="https://snackcentral.vercel.app">Official Website</a>
        <hr/>
        <h1>Webcache has Returned!</h1>
        <p>Mackin and Webcache has been blocked, but recently I found a way to bring it back.</p>
        <a href="https://mwcnd.vercel.app">Official Website</a>
      </SDK.Window>

      <SDK.Window winName="Changelog" winNum="-973" defaultStyle={{"height": "40vmin", "width": "65vmin", "top": "calc(10vmin + 40vmin)","right": "5vmin",}} includeNavButtons={{"del":true,"max":false,"min":false,}}>
        <h1>Changelog: {vnum} - {vnum_rdate}</h1>
        <p>yall better appreciate this one cuz i had to write it on my mom's netflix ipad thats slow as s**t since im grounded</p>
        <ul>
          <li>Fixed Layering Isssue</li>
          <li>Made BeanPowered Window Larger</li>
          <li>Fixed Mislabel in Settings</li>
          <li>Added Dark Mode (check settings)</li>
          <li>GREATLY improved loading times</li>
          <li>Fixed Darkmode CMD Input Bug</li>
          <li>Added Beansite local clients</li>
          <li>Added Games: </li>
          <ul>
            <li>Burrito Bison: Launcha Libre (broken/will update)</li>
            <li>Tomb of the Mask</li>
            <li>Drive Mad</li>
          </ul>
        </ul>
      </SDK.Window>
      {/* -------------------------------------------------------------- */}

      <SDK.Window winName="Welcome, User!!" winNum="1" defaultStyle={{"height": "40vmin", "width": "65vmin", "top": "5vmin", "left": "5vmin",}} includeNavButtons={{"del":true,"max":true,"min":true,}}>
        <h1 class="ph1">Welcome To <h1 class="logo">Bean Site 95</h1></h1>
        <h1>It's the <strong>ultimate</strong> playground for bean enjoyers!</h1>
        <ul>
            <li class="link" onClick={() => SDK.openWindow('2')}> <u>Check out games on Beanpowered</u> </li>
            <li class="link" onClick={() => SDK.openWindow('4')}> <u>Browse the web in Mozzarella FireBean</u> </li>
            <li class="link" onClick={() => SDK.openWindow('5')}> <u>Look like a hacker in MicroBean DOS</u> </li>
            <li class="link" onClick={() => SDK.openWindow('6')}> <u>Tweak your experience to perfection</u> </li>
            <li class="link" onClick={() => SDK.openWindow('7')}> <u>Write to your heart's content</u> </li>
            <li class="link" onClick={() => SDK.openWindow('8')}> <u>Paint some artworks!</u> </li>
            <li class="link" onClick={() => SDK.openWindow('9')}> <u>Check out old versions</u> </li>
            {/* <li class="link" onClick={() => SDK.openWindow('8')}> <u>Download more ppas from the web</u> </li> */}
        </ul>
        <h1>Beansite needs YOUR help!!</h1>
        <p>
          Beansite, being an unblocked game website, will be 
          blocked at some point. If you want to contineu using 
          beansite, download our locals clients
        </p>
        <button onClick={(e)=>{e.preventDefault();SDK.openWindow('10')}}>Download Here</button>
        <h1>Alternate URLS:</h1>
        <p>All of these are just incase our primary URL got blocked</p>
        <ul>
          <Alt URL="https://mb95.vercel.app"/>
          <Alt URL="https://dontblockbeansire.vercel.app"/>
          <Alt URL="https://beanabc.vercel.app"/>
          <Alt URL="https://ilovebeans.vercel.app"/>
          <Alt URL="https://iluvbeans.vercel.app"/>
          <Alt URL="https://beans4lyfe.vercel.app"/>
          <Alt URL="https://beans4life.vercel.app"/>
        </ul>
        <p>Version {vnum}
        <br/>M1dnightDev (c) 2023
        <br/>Socials: <a href="https://youtube.com/@m1dnightdev">Youtube</a> | <a href="https://twitter.com/@m1dnightdev">Twitter</a> | <a href="https://github.com/m1dnight-ofcl">Github</a>
        </p>
      </SDK.Window>

      <SDK.Window winName="Beanpowered" winNum="2" defaultStyle={{"height": "65vmin", "width": "100vmin", "top": "10vmin", "left": "10vmin",}} includeNavButtons={{"del":true,"max":true,"min":true,}}>
        <div className="BeanpoweredMWindow">
          <div className="bp_nav">
            <div id="bp_logo"></div>
          </div>
          <div id="bp_cwrap">
            <div className="card_trendinggame">
              <div id="bp_tg_rs">
                <h2>Trending Now</h2>
                <h1>Drift Boss</h1>
                <button onClick={()=>{openGame("https://www.mathplayground.com/drift-boss-v3/index.html","OpenInGL")}}>Play Now</button>
              </div>
              <div id="bp_tg_preview"></div>
            </div>
            <div className="bp_gameWrapper">

              <Game name="Slope" url="https://slopegame.io/" type="OpenInGL" gID="slope" />
              <Game name="Slope 2" url="https://slope2.github.io/" type="OpenInGL" gID="slope2" />
              <Game name="1v1.lol" url="https://1v1.lol" type="OpenInGL" gID="1v1lol" />
              <Game name="Smash Karts" url="https://smashkarts.io" type="OpenInGL" gID="smashk" />
              <Game name="Shell Shockers" url="https://shellshock.io" type="OpenInGL" gID="shells" />
              <Game name="2048" url="https://play2048.co" type="OpenInGL" gID="2048" />
              <Game name="Doom" url="https://dos.zone/doom-dec-1993/" type="OpenInGL" gID="doom" />
              <Game name="Eaglercraft" url="/games/07ed39eb95c1ce7e451192d7c7517c6c3382a59cb40702d8bab86dc61e3b555d.html" type="NewTab" gID="eag" />
              <Game name="Final Fanstasy VII" url="https://www.ps1fun.com/final-fantasy-vii" type="OpenInGL" gID="ffvii" />
              <Game name="Bloxd.io" url="https://bloxd.io" type="OpenInGL" gID="bloxd" />
              <Game name="X-Trench Run" url="https://www.mathplayground.com/x-trench-run/index.html" type="OpenInGL" gID="xtr" />
              <Game name="Armed Forces" url="https://armedforces.io" type="OpenInGL" gID="armedf" />
              <Game name="Ocarina of Time" url="https://www.retrogames.cc/embed/44169-ocarina-of-time-redux.html" type="OpenInGL" gID="ocarinaot" />
              <Game name="Super Mario" url="https://www.retrogames.cc/embed/43806-super-mario-bros-simplified.html" type="OpenInGL" gID="mario" />
              <Game name="Mini Golf Club" url="https://minigolfclub.io" type="OpenInGL" gID="mgclub" />
              <Game name="Infinite Craft" url="https://neal.fun/infinite-craft/" type="OpenInGL" gID="infinitec" />
              <Game name="Password Game" url="https://neal.fun/password-game/" type="OpenInGL" gID="password" />
              <Game name="Fnaf 1" url="https://fnafgame.io/fnaf" type="OpenInGL" gID="fnaf1" />
              <Game name="Hole.io" url="https://hole-io.com" type="OpenInGL" gID="hole" />
              <Game name="OvO" url="https://html5.gamedistribution.com/rvvASMiM/1377b99c10284c229423118a941af3b1/index.html?gd_sdk_referrer_url=https%3A%2F%2Fdinosaur-game.io%2Fovo&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2Rpbm9zYXVyLWdhbWUuaW8vb3ZvIiwicGFyZW50RG9tYWluIjoiZGlub3NhdXItZ2FtZS5pbyIsInRvcERvbWFpbiI6ImRpbm9zYXVyLWdhbWUuaW8iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xNyJ9" type="OpenInGL" gID="ovo" />
              <Game name="OvO 2" url="https://dedragames.com/games/ovo2/0.2alpha/" type="OpenInGL" gID="ovo2" />
              <Game name="Retro Bowl" url="https://game316009.konggames.com/gamez/0031/6009/live/index.html" type="OpenInGL" gID="retrob" />
              <Game name="Doom II" url="https://dos.zone/doom-ii-oct-10-1994/" type="OpenInGL" gID="doom2" />
              <Game name="Subway Surfers" url="https://subwaysurfersgame.io" type="OpenInGL" gID="subways" />
              <Game name="Deathrun 3D" url="https://deathrun3d.io" type="OpenInGL" gID="dr3d" />
              <Game name="Helix Jump" url="https://helixjump2.com" type="OpenInGL" gID="helix" />
              <Game name="Fridy Night Funkin'" url="https://friday-nightfunkin.io/friday-night-funkin" type="OpenInGL" gID="funkin" />
              <Game name="Dumb Ways to Die" url="https://dumbwaystodie.io" type="OpenInGL" gID="dwtd" />
              <Game name="Tomb Runner" url="https://lagged.com/en/g/tomb-runner" type="OpenInGL" gID="tombr" />
              <Game name="Fallout 1" url="https://playclassic.games/games/role-playing-dos-games-online/play-fallout-online/play/" type="OpenInGL" gID="fallout1" />
              <Game name="Burrito Bison: Launcha Libre" url="https://en.gameslol.net/burrito-bison-launcha-libre-1382.html" type="OpenInGL" gID="burritobll" />
              <Game name="Tomb of the Mask" url="https://mountain658.github.io/tombofthemask.html" type="OpenInGL" gID="totm"/>
              <Game name="Drive Mad" url="https://mountain658.github.io/drivemad.html" type="OpenInGL" gID="drivem" />

            </div>
          </div>
        </div>
      </SDK.Window>


      <SDK.Window winName="c:/bean_os/bean32/gameloader.exe" winNum="3" defaultStyle={{"height": "75dvh", "width": "75dvw", "top": "calc(50% - (75dvh / 2))", "left": "calc(50% - (75dvw / 2))",}} includeNavButtons={{"del":true,"max":true,"min":false,}} beforeClose={() => document.getElementById('gameloader').src=""} >
        <img id="loading" src="./assets/loading.gif" />
        <iframe id="gameloader" src="" frameBorder="0">games will load here</iframe>
      </SDK.Window>

      <CMD />
      <FireBean />
      <SettingsMenu />

      <SDK.Window winName="Notepad" winNum="7" defaultStyle={{"height": "40vmin", "width": "65vmin", "top": "25vmin", "left": "25vmin",}} includeNavButtons={{"del":true,"max":true,"min":true,}}>
        <div id="topbar">
          <a id="fileTabButton" onClick={()=>{
            const editor = document.getElementById('editor');
            console.log(editor.innerHTML);
            download(editor.innerHTML,"file","txt");
          }}>Save</a>
        </div>
        <div id="editor" contentEditable onKeyDown={() => notepadKeyDown(event)}>
        </div>
      </SDK.Window>
      
      <SDK.Window winName="Bean Paint" winNum="10" defaultStyle={{"height": "350px", "width": "500px", "top": "35vmin", "left": "35vmin",}} includeNavButtons={{"del":true,"max":true,"min":true,}}>
        <h1>Beansite Local Client download</h1>
        <p>
          Beansite need YOUR help! Beansite, being a website 
          that holds games, is probably going to be blocked.
          If you want to have a local version of beansite for
          when that happens, download our local clients!
        </p>
        <h4>Why Local Clients?</h4>
        <p>
          You should download a local client, as they can't
          be blocked by go-guardian. They are local files, 
          meaning your teacher can't url block them in class 
          and the school cant block the url either. 
        </p>
        <h2>Current Versions:</h2>
        <ul>
          <li>NetV: Canela - <a 
          href="https://drive.google.com/uc?export=download&id=10F2oIobD4RVuLWsHe1mI1F4VuD91vFeC">
            Download (Google Drive Mirror)</a></li>
        </ul>
      </SDK.Window>

      <BeanPaint />

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
SDK.closeWindow('8'); 
SDK.closeWindow('9');
SDK.closeWindow('10');
// SDK.closeWindow('-973'); // special: changelog
// SDK.closeWindow('-99'); // special: ad

SDK.init();