function getbbdata(){
    var bbsurl = bbShortApiUrl

    var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('GET', bbsurl, true);//第二步：打开连接  将请求参数写在url中
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中
    /**
     * 获取数据后的处理程序
     */
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;//获取到json字符串，还需解析
            var obj = eval('(' + json + ')');
            // console.log(obj.data)
            const bbArray = obj.data.map(e => {
                return {
                    'date': e.date,
                    'content': e.content,
                    'from': e.from
                }
            })
            // console.log(fundsArray)
            saveToLocal.set('lxpro-bb', JSON.stringify(bbArray), 5 / (60 * 24))
            const data = saveToLocal.get('lxpro-bb');
            generateBBHtml(JSON.parse(data))
        }
    };
}


var generateBBHtml = array => {
    var $dom = document.querySelector('#bber-talk');
    var result = '';

    // 兼容小屏icon
    var screen_width = window.screen.width;
    var screen_height = window.screen.height;

    if (array.length) {
        // 当前为手机或小屏设备将进行字符串截取
        if(screen_width < 500 && screen_height < 1000){
            for (let i = 0; i < array.length; i++) {
                var itemcontent = array[i].content
                var newitemcontent = itemcontent.replace(/<img\b.*?(?:\>|\/>)/gi,' [图片] ')
                if(newitemcontent.length>26){
                   newitemcontent=newitemcontent.slice(0,25)+"..."
                }
                result += `<div class='li-style swiper-slide'>${newitemcontent}</div>`;
            }
        }else{
            for (let i = 0; i < array.length; i++) {
                 var itemcontent = array[i].content
                 var newitemcontent = itemcontent.replace(/<img\b.*?(?:\>|\/>)/gi,' [图片] ')
                 result += `<div class='li-style swiper-slide'>${newitemcontent}</div>`;
            }
        }
    } else {
        result += '!{_p("aside.card_funds.zero")}';
    }

    var $dom = document.querySelector('#bber-talk');
    $dom.innerHTML = result;
    window.lazyLoadInstance && window.lazyLoadInstance.update();
    window.pjax && window.pjax.refresh($dom);
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
    });
}
var bbInit = () => {
// console.log('运行')
    if (document.querySelector('#bber-talk')) {
        const data = saveToLocal.get('lxpro-bb');
        if (data) {
            generateBBHtml(JSON.parse(data))
        } else {
            getbbdata()
        };
    }
}

bbInit();
document.addEventListener('pjax:complete', bbInit);