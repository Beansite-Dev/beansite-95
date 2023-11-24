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
    const changeBgColor = (e) => document.body.style.backgroundColor = e.target.value;
    const changeTitlebarColor = (e) => document.querySelector(":root").style.setProperty('--tb-clr', e.target.value);
    return (
        <SDK.Window winName="Settings Menu" winNum="6" defaultStyle={{"height": "350px", "width": "500px", "top": "30vmin", "left": "30vmin",}} includeNavButtons={{"del":true,"max":true,"min":true,}}>
            <h1>Appearance</h1>
            <label for="bgimg">Background Image:</label>
            <input name="bgimg" type="file" id="bgImg" onInput={() => changeBackground(event)} accept="image/png, image/jpeg, image/jpg, image/webp"/><br/>
            <label for="bgimode">Background Image Mode:</label>
            <select name="bgimode" id="bgIMode" onChange={() => changeBackgroundImageMode(event)}>
                <option selected value="cover">Cover</option>
                <option value="contain">Contain</option>
                <option value="none">Hide</option>
            </select><br/>
            <label for="bgRepeat" onChange={() => changeBgRepeat(event)} >Background Image Repeat:</label>
            <select name="bgRepeat" type="color" id="bgRepeat">
                <option selected value="repeat">Repeat</option>
                <option value="no-repeat">No Repeat</option>
            </select><br/>
            <label for="bgclr">Background Color:</label>
            <input name="bgclr" type="color" id="bgClr" value="#008080" onInput={() => changeBgColor(event)} /><br/>
            <label for="tbStyle">Background Image Mode:</label>
            <select name="tbStyle" type="color" id="tbStyle" onChange={() => changeTabStyle(event)}>
                <option value="var(--tb-clr)">Solid</option>
                <option selected value="linear-gradient(90deg, navy 0%, lightblue 100%)">Gradient</option>
            </select><br/>
            <label for="tbClr">Titlebar Color:</label>
            <input name="tbClr" type="color" id="tbClr" value="#00008b" onInput={() => changeTitlebarColor(event)} /><br/><br/>
        </SDK.Window>
    )
}