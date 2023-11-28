class ArchiveLoader {
    constructor(SDK) {
        this.SDK=SDK;
    }
    loadOlderVersion = (e, v) =>  {
        e.preventDefault();
        window.location.href = `/archive/${v}/index.html`;
    }
    Window = (prop) => {
        return (
            <SDK.Window winName="Version Loader" winNum="9" defaultStyle={{"height": "350px", "width": "500px", "top": "30vmin", "left": "30vmin",}} includeNavButtons={{"del":true,"max":true,"min":true,}}>
                <h1>Loader Older Versions</h1>
                <ul>
                    <li class="link" onClick={() => this.loadOlderVersion(event, "v1.0")}> <u>Version 1.0</u> </li>
                    <li class="link" onClick={() => this.loadOlderVersion(event, "v1.2")}> <u>Version 1.2</u> </li>
                    <li class="link" onClick={() => this.loadOlderVersion(event, "v1.3")}> <u>Version 1.3</u> </li>
                    <li class="link" onClick={() => this.loadOlderVersion(event, "v1.4")}> <u>Version 1.4</u> </li>
                </ul>
            </SDK.Window>
        )
    }
}