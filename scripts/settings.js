try {


document.getElementById('bgImg').addEventListener('input', (e) => {
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
})
document.getElementById('bgClr').addEventListener('input', (e) => {
    document.body.style.backgroundColor = e.target.value;
})
document.getElementById('bgIMode').addEventListener('change', (e) => {
    e.preventDefault();
    if (e.target.value != "none") document.body.style.backgroundSize = e.target.value;
    else document.body.style.backgroundImage = "none";
})
document.getElementById('tbClr').addEventListener('input', (e) => {
    document.querySelector(":root").style.setProperty('--tb-clr', e.target.value)
})
document.getElementById('bgRepeat').addEventListener('change', (e) => {
    e.preventDefault();
    document.body.style.backgroundRepeat = e.target.value;
})


document.getElementById('tbStyle').addEventListener('change', (e) => {
    e.preventDefault();
    var navs = document.getElementsByClassName('winnav'); // get all elements
	for(var i = 0; i < navs.length; i++){
		navs[i].style.background = e.target.value;
        // alert(`changed ${navs[i].id}'s bg to ${e.target.value}`)
	}
})

}
catch (e) {
    try {
      
      document.getElementById('win1del').click();
      document.getElementById('win2del').click();
      document.getElementById('win3del').click();
      document.getElementById('win4del').click();
      document.getElementById('win5del').click();
      document.getElementById('win6del').click();
      document.getElementById('win7del').click();
      document.getElementById('winerrordel').click();
  
      let errorwin = document.getElementById('winerror')
      errorwin.setAttribute("style", "display: block !important;");
      document.getElementById('errorBlock').innerHTML = `Error:\n${e.stack}\n${e.name}\n${e.message}`;
    
    } catch (e) {
      alert(`Failed to display ErrorWin\nError:\n${e.stack}\n${e.name}\n${e.message}`);
    }
  }