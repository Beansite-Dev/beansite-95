const rootElement = document.getElementById('root');

// creates new sdk class
const SDK = new BeanSDK();
const LoaderUI = new ArchiveLoader(SDK);
// creates new appstore class
// const Store = new AppStore(SDK);

const App = () =>{
  const vnum = "2.12.4";
  const vnum_rdate = "6/8/24";
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
    } else if (type=="NewTab"){ window.open(game,'_blank');
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
    );
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
  const games={
    "Slope": {
      "url": "https://kdata1.com/2020/05/slope/",
      "id": "slope",
      "type": "OpenInGL",
    }, 
    "Slope 2": {
      "url": "https://slope2.github.io/a6/slope-2/",
      "id": "slope2",
      "type": "OpenInGL",
    }, 
    "1v1.lol": {
      "url": "https://1v1.lol",
      "id": "1v1lol",
      "type": "OpenInGL",
    },
    "Smash Karts": {
      "url": "https://smashkarts.io",
      "id": "smashk",
      "type": "OpenInGL",
    },
    "Shell Shocker": {
      "url": "https://shellshock.io",
      "id": "shells",
      "type": "OpenInGL",
    },
    "2048 ": {
      "url": "https://play2048.co",
      "id": "2048",
      "type": "OpenInGL",
    },
    "Eaglercraft 1.5.2": {
      "url": "/games/07ed39eb95c1ce7e451192d7c7517c6c3382a59cb40702d8bab86dc61e3b555d.html",
      "id": "eag",
      "type": "NewTab",
    },
    "Final Fantasy VII": {
      "url": "https://www.retrogames.cc/embed/43658-final-fantasy-vii-usa-disc-1.html",
      "id": "ffvii",
      "type": "OpenInGL",
    },
    "Bloxd.io": {
      "url": "https://bloxd.io",
      "id": "bloxd",
      "type": "OpenInGL",
    },
    "X-Trench Run": {
      "url": "https://html5.gamedistribution.com/24d6db9a49d94cc28cf6c5b0073adb28/",
      "id": "xtr",
      "type": "OpenInGL",
    },
    "Armed Forces": {
      "url": "https://armedforces.io",
      "id": "armedf",
      "type": "OpenInGL",
    },
    "Ocarina of Time": {
      "url": "https://www.retrogames.cc/embed/44169-ocarina-of-time-redux.html",
      "id": "ocarinaot",
      "type": "OpenInGL",
    },
    "Super Mario": {
      "url": "https://www.retrogames.cc/embed/43806-super-mario-bros-simplified.html",
      "id": "mario",
      "type": "OpenInGL",
    },
    "Mini Golf Club": {
      "url": "https://minigolfclub.io",
      "id": "mgclub",
      "type": "OpenInGL",
    },
    "Hole.io": {
      "url": "https://hole-io.com",
      "id": "hole",
      "type": "OpenInGL",
    },
    "OvO": {
      "url": "https://html5.gamedistribution.com/rvvASMiM/1377b99c10284c229423118a941af3b1/index.html?gd_sdk_referrer_url=https%3A%2F%2Fdinosaur-game.io%2Fovo&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2Rpbm9zYXVyLWdhbWUuaW8vb3ZvIiwicGFyZW50RG9tYWluIjoiZGlub3NhdXItZ2FtZS5pbyIsInRvcERvbWFpbiI6ImRpbm9zYXVyLWdhbWUuaW8iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xNyJ9",
      "id": "ovo",
      "type": "OpenInGL",
    },
    "OvO 2": {
      "url": "https://dedragames.com/games/ovo2/0.2alpha/",
      "id": "ovo2",
      "type": "OpenInGL",
    },
    "Retro Bowl": {
      "url": "https://game316009.konggames.com/gamez/0031/6009/live/index.html",
      "id": "retrob",
      "type": "OpenInGL",
    },
    "Subway Surfers": {
      "url": "https://subwaysurfersgame.io/subway-surfers-game.embed?d=20240530",
      "id": "subways",
      "type": "OpenInGL",
    },
    "Deathrun 3D": {
      "url": "https://deathrun3d.io",
      "id": "dr3d",
      "type": "OpenInGL",
    },
    "Fridy Night Funkin'": {
      "url": "https://friday-nightfunkin.io/friday-night-funkin",
      "id": "funkin",
      "type": "OpenInGL",
    },
    "Tomb Runner": {
      "url": "https://lagged.com/en/g/tomb-runner",
      "id": "tombr",
      "type": "OpenInGL",
    },
    "Fallout 1": {
      "url": "https://playclassic.games/games/role-playing-dos-games-online/play-fallout-online/play/",
      "id": "fallout1",
      "type": "OpenInGL",
    },
    "Burrito Bison: Launcha Libre": {
      "url": "https://tybsi.com/games/burrito-bison-launcha-libre/",
      "id": "burritobll",
      "type": "OpenInGL",
    },
    "Tomb of the Mask": {
      "url": "https://mountain658.github.io/tombofthemask.html",
      "id": "totm",
      "type": "OpenInGL",
    },
    "Drive Mad": {
      "url": "https://mountain658.github.io/drivemad.html",
      "id": "drivem",
      "type": "OpenInGL",
    },
    "Run 3": {
      "url": "https://mountain658.glitch.me/run3.html",
      "id": "run3",
      "type": "OpenInGL",
    },
    "Celeste": {
      "url": "https://mountain658.glitch.me/celeste.html",
      "id": "celeste",
      "type": "OpenInGL",
    },
    "Jetpack Joyride": {
      "url": "https://www.miniplay.com/embed/jetpack-joyride",
      "id": "jpjr",
      "type": "OpenInGL",
    },
    "Fruit Ninja": {
      "url": "https://funhtml5games.com?embed=fruitninja",
      "id": "frnin",
      "type": "OpenInGL",
    },
    "Flappy Bird": {
      "url": "https://playcanv.as/p/2OlkUaxF/",
      "id": "flappy",
      "type": "OpenInGL",
    },
    "Pokemon Red": {
      "url": "https://static.arcadespot.com/retroemulator.php?system=gboy&game=2016/07/pokemon-red.zip",
      "id": "pokered",
      "type": "OpenInGL",
    },
    "Pokemon Blue": {
      "url": "https://static.arcadespot.com/retroemulator.php?system=gboy&game=2016/07/pokemon-blue.zip",
      "id": "pokeblue",
      "type": "OpenInGL",
    },
    "Street Fighter": {
      "url": "https://static.arcadespot.com/retroemulator.php?system=snes&game=2017/10/street-fighter-5.smc",
      "id": "streetftr",
      "type": "OpenInGL",
    },
    "Fancade": {
      "url": "https://play.fancade.com",
      "id": "fancade",
      "type": "OpenInGL",
    },
    "Doom": {
      "url": "https://dos.zone/doom-dec-1993/",
      "id": "doom",
      "type": "OpenInGL",
    },
    "Doom II": {
      "url": "https://dos.zone/doom-ii-oct-10-1994/",
      "id": "doom2",
      "type": "OpenInGL",
    },
    "Doom 64": {
      "url": "https://static.arcadespot.com/retroemulator.php?system=n64&game=2017/06/doom-64.zip",
      "id": "doom64",
      "type": "OpenInGL",
    },
    "Doom 3": {
      "url": "https://wasm.continuation-labs.com/d3demo/",
      "id": "doom3",
      "type": "OpenInGL",
    },
    "Baldi's Basics": {
      "url": "https://igroutka.ru/loader/game/26471/",
      "id": "baldis",
      "type": "OpenInGL",
    },
    "Krunker.io": {
      "url": "https://krunker.io",
      "id": "krunker",
      "type": "OpenInGL",
    },
    "Snake.io": {
      "url": "https://snakeio.org/snake-io.embed",
      "id": "snakeio",
      "type": "OpenInGL",
    },
    "Portal": {
      "url": "https://w8.snokido.com/games/flash/ruffle.html?g=portal&v=140524",
      "id": "portal",
      "type": "OpenInGL",
    },
    "Yohoho.io": {
      "url": "https://yohoho.io",
      "id": "yohohoio",
      "type": "OpenInGL",
    },
    "Ships 3D": {
      "url": "https://games.crazygames.com/en_US/ships-3d/index.html?v=1.288",
      "id": "ships3d",
      "type": "OpenInGL",
    },
    "GunSpin": {
      "url": "https://gun-spin.github.io/file/",
      "id": "gunspin",
      "type": "OpenInGL",
    },
    "FNaF 1": {
      "url": "https://fnafgame.io/fnaf.embed?ez_iframe=1",
      "id": "fnaf1",
      "type": "OpenInGL",
    },
    "FNaF 2": {
      "url": "https://fnafgame.io/fnaf-2.embed?ez_iframe=1",
      "id": "fnaf2",
      "type": "OpenInGL",
    },
    "FNaF 3": {
      "url": "https://fnafgame.io/fnaf-3.embed?ez_iframe=1",
      "id": "fnaf3",
      "type": "OpenInGL",
    },
    "FNaF 4": {
      "url": "https://fnafgame.io/fnaf-4.embed?ez_iframe=1",
      "id": "fnaf4",
      "type": "OpenInGL",
    },
    "FNaF World": {
      "url": "https://turbowarp.org/96095372/embed?autoplay&addons=remove-curved-stage-border%2Cpause%2Cgamepad",
      "id": "fnafworld",
      "type": "OpenInGL",
    },
    "Highway Traffic": {
      "url": "https://app-97317.games.s3.yandex.net/97317/zr27uqx4qauq31fg2ud41a7oye9c4dki/index.html?sdk=%2Fsdk%2F_%2Fv2.6cafcb80ad19287b13a2.js#origin=https%3A%2F%2Fplayhop.com&app-id=97317&device-type=desktop",
      "id": "hwtraffic",
      "type": "OpenInGL",
    },
    "Fractal Combat X": {
      "url": "https://play.gamepix.com/fractal-combat-x/embed?sid=e4515",
      "id": "fcx",
      "type": "OpenInGL",
    },
    "Snow Rider 3D": {
      "url": "https://html5.gamedistribution.com/3b79a8537ebc414fb4f9672a9b8c68c8/?gd_sdk_referrer_url=https://gamedistribution.com/games/snow-rider-3d/",
      "id": "sr3d",
      "type": "OpenInGL",
    },
    "The Last Man": {
      "url": "https://html5.gamedistribution.com/63c7be58e25e4b37bef7e01d3fa20894/?gd_sdk_referrer_url=https://kevin.games/the-last-man",
      "id": "tlm",
      "type": "OpenInGL",
    },
    "Half Life": {
      "url": "https://pixelsuft.github.io/hl/xash.html#150",
      "id": "hl",
      "type": "OpenInGL",
    },
    "Mario 64": {
      "url": "https://static.arcadespot.com/retroemulator.php?system=n64&game=2017/06/super-mario-64.zip",
      "id": "m64",
      "type": "OpenInGL",
    },
    "Among Us": {
      "url": "https://amongusio.io/among-us.embed",
      "id": "amongus",
      "type": "OpenInGL",
    },
    "Pizza Tower": {
      "url": "https://kdata1.com/2021/03/3527391/2.1/",
      "id": "pizzatower",
      "type": "OpenInGL",
    },
    // template
    // "": {
    //   "url": "",
    //   "id": "",
    //   "type": "OpenInGL",
    // },
  }; 

  var results=[];
  const bp_searchgame=(q)=>{
    function trimString(s) {
      var l=0, r=s.length -1;
      while(l < s.length && s[l] == ' ') l++;
      while(r > l && s[r] == ' ') r-=1;
      return s.substring(l, r+1);
    }
    function compareObjects(o1, o2) {
      var k = '';
      for(k in o1) if(o1[k] != o2[k]) return false;
      for(k in o2) if(o1[k] != o2[k]) return false;
      return true;
    }
    function itemExists(haystack, needle) {
      for(var i=0; i<haystack.length; i++) if(compareObjects(haystack[i], needle)) return true;
      return false;
    }
    // console.log(q);
    const resultselm=document.getElementById("bp_s_results");
    const resultselmul=document.getElementById("bg_s_res_ul");
    // resultselm.style.display="block";
    var toSearch=(trimString(q)).toLowerCase();
    results=[];
    for(var key in games) {
      var keyf=key.toLowerCase();
      if(keyf.indexOf(toSearch)!=-1) {
        if(!itemExists(results, games)) results.push(key);
      }
    }
    // console.log(results);
    // var s="";
    // for(var i=0;i<results.length;i++){
    //   s=`${s}<li class="bp_s_qres" onclick="document.getElementById("g_${results[i]}").scrollIntoView()">${results[i]}</li>`;
    // }
    // console.log(s);
    // resultselmul.innerHTML=s;
    // console.log(results);
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
        {/* <h1>Check out the Kandy Krew!</h1>
        <p>Gum can be expensive and hard to get as a middle schooler. We fix that, with deals 25%-50% cheaper than walgreens.</p>
        <a href="https://snackcentral.vercel.app">Official Website</a>
        <hr/> */}
        <h1>Webcache has Returned!</h1>
        <p>Mackin and Webcache has been blocked, but recently I found a way to bring it back.</p>
        <a href="https://mwcnd.vercel.app">Official Website</a>
      </SDK.Window>

      <SDK.Window winName="Changelog" winNum="-973" defaultStyle={{"height": "40vmin", "width": "65vmin", "top": "calc(10vmin + 40vmin)","right": "5vmin",}} includeNavButtons={{"del":true,"max":false,"min":false,}}>
        <h1>Changelog: {vnum} - {vnum_rdate}</h1>
        {/* <p></p> */}
        <ul>
          <li>INSANELY Optimised Script</li>
          <li>Made Website Reload on BSoD</li>
          <li>Started work on search function for BeanPowered (it's gonna take some time)</li>
          <li>Created/Updated Beansite local clients:</li>
          <ul>
            <li>None</li>
          </ul>
          <li>Added Games: </li>
          <ul>
            <li>None :(</li>
          </ul>
          <li>Removed Games:</li>
          <ul>
            <li>None :)</li>
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
        <br/><br/>
        <h1>Alternate URLS:</h1>
        <p>All of these are just incase our primary URL got blocked</p>
        <ul>
          <Alt URL="https://mb95.vercel.app"/>
          <Alt URL="https://dontblockbeansite.vercel.app"/>
          <Alt URL="https://beanabc.vercel.app"/>
          <Alt URL="https://ilovebeans.vercel.app"/>
          <Alt URL="https://iluvbeans.vercel.app"/>
          <Alt URL="https://beans4lyfe.vercel.app"/>
          <Alt URL="https://beans4life.vercel.app"/>
        </ul>
        <p>Version {vnum}
        <br/>M1dnightDev (c) 2024
        <br/>Developed with {`<3`} since 2023
        <br/>Socials: <a href="https://youtube.com/@m1dnightdev">Youtube</a> | <a href="https://twitter.com/@m1dnightdev">Twitter</a> | <a href="https://github.com/m1dnight-ofcl">Github</a>
        </p>
      </SDK.Window>

      <SDK.Window winName="Beanpowered" winNum="2" defaultStyle={{"height": "65vmin", "width": "100vmin", "top": "10vmin", "left": "10vmin",}} includeNavButtons={{"del":true,"max":true,"min":true,}}>
        <div className="BeanpoweredMWindow">
          <div className="bp_nav">
            <div id="bp_logo"></div>
            {/* <div
            onFocus={(e)=>{document.getElementById("bp_s_results").style.display="block";}}
            onBlur={(e)=>{
              if (!event.currentTarget.contains(event.relatedTarget)) {
                document.getElementById("bp_s_results").style.display="none";}}}>
            <input 
              type="text" 
              id="bp_search" 
              name="bp_search"
              autocomplete="off"
              onInput={(e)=>bp_searchgame(e.target.value)}
              ></input>
            <div id="bp_s_results" style={{"display":"none"}}>
              <ul id="bg_s_res_ul">
                {results.map((name,i) => <li key={`res_${name}`}>{name}</li>)}
              </ul>
            </div>
            </div> */}
          </div>
          <div id="bp_cwrap">
            <div className="card_trendinggame">
              <div id="bp_tg_rs">
                <h2>Trending Now</h2>
                <h1>Drift Boss</h1>
                <button onClick={()=>{openGame("https://www.hoodamath.com/mobile/games/drift-boss/game.html","OpenInGL")}}>Play Now</button>
              </div>
              <div id="bp_tg_preview"></div>
            </div>
            <div className="bp_gameWrapper">
              {Object.keys(games).map((name)=>
                <Game name={name} url={games[name].url} gID={games[name].id} type={games[name].type} />)}
              <p className="bp_reqtxt">Don't see a game you like? You can request <a style={{"textDecoration":"none"}} href="https://docs.google.com/forms/d/1Eb-gJCBDtla2tv04k7sdyefMoeVf0ENYy30x_UOFdBU/edit">here</a></p>
            </div>
          </div>
        </div>
      </SDK.Window>


      <SDK.Window winName="c:/bean_os/bean32/gameloader.exe" winNum="3" defaultStyle={{"height": "75dvh", "width": "75dvw", "top": "calc(50% - (75dvh / 2))", "left": "calc(50% - (75dvw / 2))",}} includeNavButtons={{"del":true,"max":true,"min":false,}} beforeClose={() => document.getElementById('gameloader').src=""} >
        <img id="loading" src="./assets/loading.gif" />
        <iframe 
          id="gameloader" 
          src="" 
          frameBorder="0"
          sandbox = "allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation">
            games will load here</iframe>
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
          <li>NetV: Canela - <a href="https://drive.google.com/uc?export=download&id=10F2oIobD4RVuLWsHe1mI1F4VuD91vFeC">Download</a></li>
          <li>NetV + BeanCloak v1.1: Pinto - <a href="https://drive.google.com/uc?export=download&id=1wU2ASX9uMMJNlC92Cm65cU6hISBioRXC">Download</a></li>
        </ul>
      </SDK.Window>

      <BeanPaint />

      <LoaderUI.Window />

      {/* <Store.Homepage /> */}

      <img src="./assets/error.jpg" id="bsod" draggable="false" onClick={(e)=>{
        e.preventDefault();
        location.reload();
      }}/>
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