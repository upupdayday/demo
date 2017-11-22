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

    var city = document.querySelector('#city');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8080/getWeather?city=' + city.value, true)
    xhr.send();

    // 数据成功获得后，设置disabled为false，显示天气状态
    xhr.addEventListener('load', function() {
        var weatherText = document.querySelector('#weather');
        var weatherImg = document.querySelector('#image');
        if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
            var resultObj = JSON.parse(xhr.responseText)
            weatherText.innerText = resultObj.weather;
            weatherImg.src = resultObj.picture;
            btn.disabled = false;
            isLoading = false;
        }
    })
})