const BeanPaint = (prop) => {
    return (
        <SDK.Window winName="Bean Paint" winNum="8" defaultStyle={{"height": "350px", "width": "500px", "top": "30vmin", "left": "30vmin",}} includeNavButtons={{"del":true,"max":true,"min":true,}}>
            <iframe src="https://jspaint.app/"/>
        </SDK.Window>
    )
}