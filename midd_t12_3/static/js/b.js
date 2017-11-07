var xhr = new XMLHttpRequest();
var btn = document.querySelector('#search');

btn.addEventListener('click', function() {
    /** 获取城市名称，发送*/
    btn.disabled = true;
    var city = document.querySelector('#city');
    xhr.open('GET', '/getWeather?city=' + city.value, true)
    xhr.send();

    // 数据成功获得后，设置disabled为false，显示天气状态
    xhr.addEventListener('load', function() {
        var weatherText = document.querySelector('#weather');
        var weatherImg = document.querySelector('#image');
        if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
            var resultObj = JSON.parse(xhr.responseText)
            weatherText.innerText = resultObj.weather;
            weatherImg.src = resultObj.picture;
            btn.disabled = false
        }
    })
})