const FireBean = (prop) => {
    return (
        <SDK.Window winName="Mozilla Firebean" winNum="4" defaultStyle={{"height": "350px", "width": "500px", "top": "20vmin", "left": "20vmin",}} includeNavButtons={{"del":true,"max":true,"min":true,}}>
            <div id="browser-topbar">
                <input type="text" id="url" value="https://firebean.com/home"/>
            </div>
            <img id="loading" src="./assets/loading.gif"/>
            <iframe sandbox="allow-scripts allow-popups allow-same-origin allow-forms" id="webview" src="./web/fb/fb-home.html" style={{"height": "calc(100% - 25px)",}} frameBorder="0">games will load here</iframe>
        </SDK.Window>
    )
}