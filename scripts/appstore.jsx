class AppStore {
    constructor(SDKClass) {
        this.SDK = SDKClass;
        this.AppList = [
            {
                "name": "Doom",
                "win#": "90",
                "installed?": false,
            }
        ]
    }
    InstallApp = (app) => {

    }
    Item = (prop) => {
        let initialText="Install Now!";
        const anim = {
            "onMouseEnter": (e) => {
                let button = document.getElementById(`install${prop.AppName}button`);
                if (prop.AppData["installed?"]) {
                    button.style.background="linear-gradient(180deg, rgba(207,24,24,1) 0%, rgba(255,126,126,1) 50%, rgba(255,75,75,1) 50%, rgba(173,0,0,1) 100%";
                    initialText=button.innerHTML;
                    button.innerHTML="Uninstall?";
                } else if (!prop.AppData["installed?"]) {
                    return null;
                }
            },
            "onMouseLeave": (e) => {
                let button = document.getElementById(`install${prop.AppName}button`);
                button.style.background="linear-gradient(180deg, rgba(19,170,62,1) 0%, rgba(96,255,166,1) 50%, rgba(58,232,133,1) 50%, rgba(0,143,62,1) 100%)";
                button.innerHTML=initialText;
            }
        }
        const installApp = (e) => {
            e.preventDefault();
            if (prop.AppData["installed?"]) {
                let verifyUninstall = confirm('Do you want to uninstall this app?');
                if (verifyUninstall) {
                    e.target.innerHTML = 'Install Now!';
                    initialText=e.target.innerHTML;
                    prop.AppData["installed?"]=false;
                } else {
                    return null;
                }
            } else if (!prop.AppData["installed?"]) {
                e.target.innerHTML = 'Installed!';
                initialText=e.target.innerHTML;
                this.InstallApp(prop.AppName);
                prop.AppData["installed?"]=true;
                anim.onMouseEnter(e);
            }
        }
        return (
            <div className="item" id={`install${prop.AppName}`} style={{"backgroundImage": `url('../assets/bg/${prop.AppName.toLowerCase()}.jpg')`}} >
                <div className="left">
                    <h1>{prop.AppName}</h1>
                    <button id={`install${prop.AppName}button`} onClick={() => installApp(event)} onMouseEnter={() => anim.onMouseEnter(event)} onMouseLeave={() => anim.onMouseLeave(event)}>Install Now</button>
                </div>
            </div>
        )
    }
    Homepage = (prop) => {
        return (
            <this.SDK.Window winName="App Store" winNum="8" defaultStyle={{"height": "350px", "width": "500px", "top": "35vmin", "left": "35vmin",}} includeNavButtons={{"del":true,"max":true,"min":true,}}>
                <this.Item AppName="Doom" AppData={this.AppList[0]} />
            </this.SDK.Window>
        )
    }
}