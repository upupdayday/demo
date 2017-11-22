var btn = document.querySelector('#search');
var isLoading = false //状态锁，用于判断是否在加载数据

btn.addEventListener('click', function() {
    btn.disabled = true;
    /** 获取城市名称，发送*/
    if (isLoading) {
        target.disabled = false;
        return;
    }

    isLoading = true;

    var script = document.createElement('script');
    script.src = 'http://127.0.0.1:8080/getWeather?callback=show&city=' + city.value;
    document.head.appendChild(script);
    document.head.removeChild(script);
})

function show(ret) {
    console.log(ret)
    var weatherText = document.querySelector('#weather');
    var weatherImg = document.querySelector('#image');
    // var resultObj = JSON.parse(ret)
    weatherText.innerText = ret.weather;
    weatherImg.src = ret.picture;
    btn.disabled = false;
    isLoading = false;
}