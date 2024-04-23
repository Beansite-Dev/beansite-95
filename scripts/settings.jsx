const SettingsMenu = (prop) => {
    const changeBackground = (e) => {
        if (document.getElementById('bgIMode').value != "none") {
            var file = e.target.files[0];
            var reader = new FileReader();
            reader.onloadend = function(){
                document.body.style.backgroundImage = "url(" + reader.result + ")";
            }
            if(file){
                reader.readAsDataURL(file);
            }
        }
    }
    const changeBackgroundImageMode = (e) => {
        e.preventDefault();
        if (e.target.value != "none") document.body.style.backgroundSize = e.target.value;
        else document.body.style.backgroundImage = "none";
    }
    const changeBgRepeat = (e) => {
        e.preventDefault();
        document.body.style.backgroundRepeat = e.target.value;
    }
    const changeTabStyle = (e) => {
        e.preventDefault();
        var navs = document.getElementsByClassName('winnav'); // get all elements
	    for(var i = 0; i < navs.length; i++){
	    	navs[i].style.background = e.target.value;
            // alert(`changed ${navs[i].id}'s bg to ${e.target.value}`)
	    }
    }
    const changeBgColor = (e) => {
        document.body.style.backgroundColor = e.target.value;
    };
    const changeTitlebarColor = (e) => {
        document.querySelector(":root").style.setProperty('--tb-clr', e.target.value);
    };
    const setDarkmode = (e) => {
        e.preventDefault();
        const dmc=document.getElementById('darkMode').checked;
        console.log(`got value ${dmc} (type:${typeof(dmc)})`)
        if(dmc){
            console.log("enabling dark mode");
            const dmStyle=document.createElement("link");
            dmStyle.id="dmStyle";
            dmStyle.href="./style/dmstyle.css";
            dmStyle.rel="stylesheet";
            document.head.append(dmStyle);
            console.log("attaching stylesheet");
        }else if(!dmc){
            console.log("disabling dark mode");
            document.getElementById("dmStyle").remove();
        }else {console.error("unkown state");}
    }
    return (
        <SDK.Window winName="Settings Menu" winNum="6" defaultStyle={{"height": "350px", "width": "500px", "top": "30vmin", "left": "30vmin",}} includeNavButtons={{"del":true,"max":true,"min":true,}}>
            <h1>Appearance</h1>
            <label for="bgimg">Background Image:</label>
            <input name="bgimg" type="file" id="bgImg" onInput={() => changeBackground(event)} accept="image/png, image/jpeg, image/jpg, image/webp"/><br/>
            <label for="bgimode">Background Image Mode:</label>
            <select name="bgimode" className="settingsDropdown" id="bgIMode" onChange={() => changeBackgroundImageMode(event)}>
                <option selected value="cover">Cover</option>
                <option value="contain">Contain</option>
                <option value="none">Hide</option>
            </select><br/>
            <label for="bgRepeat">Background Image Repeat:</label>
            <select name="bgRepeat" className="settingsDropdown" type="color" id="bgRepeat" onChange={() => changeBgRepeat(event)}>
                <option selected value="repeat">Repeat</option>
                <option value="no-repeat">No Repeat</option>
            </select><br/>
            <label for="bgclr">Background Color:</label>
            <input name="bgclr" type="color" id="bgClr" defaultValue="#008080" onInput={() => changeBgColor(event)} /><br/>
            <label for="tbStyle">Window Titlebar Style:</label>
            <select name="tbStyle" className="settingsDropdown" type="color" id="tbStyle" onChange={() => changeTabStyle(event)}>
                <option value="var(--tb-clr)">Solid</option>
                <option selected value="linear-gradient(90deg, navy 0%, lightblue 100%)">Gradient</option>
            </select><br/>
            <label for="tbClr">Titlebar Color:</label>
            <input name="tbClr" type="color" id="tbClr" defaultValue="#00008b" onInput={() => changeTitlebarColor(event)} /><br/>
            <label for="tbClr">Dark Mode (EXPERIMENTAL!!!!!!)</label>
            <input name="darkMode" type="checkbox" id="darkMode" onInput={() => setDarkmode(event)} /><br/>
        </SDK.Window>
    )
}