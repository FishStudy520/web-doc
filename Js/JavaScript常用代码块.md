#### 前言
* * *
本文主要写的是自己常用的一些javaScript 代码块。记录常用代码，方便查阅。如发现错误，欢迎留言改正。

阅读三连：点赞（👍）、关注（😍）、收藏（📝）。

### 正文
***

#### 1. 将Url参数转换成对象，没有参数时返回空对象
* * *
```
function formatParamsToObject() {
    let search = window.location.search, // 获取url的参数部分
        obj = {};
    if (!search) return obj;
    let params = search.split('?')[1]; // 获取参数
    let paramsArr = params.split('&');
    // 遍历数组
    for (let i of paramsArr) {
        let arr = i.split('=');
        obj[arr[0]] = arr[1] // 设置对象key,value
    }
    return obj
}
```

举个栗子 → 🙌🌰：www.baidu.com?id=1&type=2
```
formatParamsToObject() // {id: "1", type: "2"}
```

#### 2. 将对象转换成Url需要的参数 tag标记是否带问号(?)
* * *
```
function formatObjToParamStr(obj, tag = true) {
    let data = [],
        dStr = '';
    for (let key in obj) {
        data.push(`${key}=${obj[key]}`);
    }
    dStr = tag ? '?' + data.join('&') : data.join('&');
    return dStr
}
```

举个栗子 → 🙌🌰：
```
formatObjToParamStr({id:1,type:2}) // "?id=1&type=2"
formatObjToParamStr({id:1,type:2},false) // "id=1&type=2"
```

#### 3. 通过参数名获取url中的参数值
***
```
function getUrlParam(name,url) {
    let search = url || window.location.search,
        reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'),
        r = search.substr(search.indexOf('\?') + 1).match(reg);
    return r != null ? r[2] : '';
}
```

举个栗子 → 🙌🌰：www.baidu.com?id=1&type=2
```
getUrlParam('id','www.baidu.com?id=1&type=2') // 1
```

#### 4. 设置cookie,设置max-age 属性指定cookie 的有效期（秒）
* * *
```
function setCookie(name, value, expiretime) {
    let cookie = `${name}=${encodeURIComponent(value)}; path=/`;
    if (typeof expiretime === 'number')cookie += `; max-age=${(60*60*24*expiretime)}`;
    document.cookie = cookie;
}
```

举个栗子 → 🙌🌰：
```
setCookie('id',1,1)
document.cookie //"id=1"
```

#### 5. 读取cookie,将设置的cookie值拿到单个key 对应的值
* * *
```
function getCookie(name) {
    let cookie = document.cookie;
    let arrCookie = cookie.split('; ');
    for (let i = 0; i < arrCookie.length; i++) {
        let arr = arrCookie[i].split('=');
        if (arr[0] == name) return arr[1];
    }
}
```
举个栗子 → 🙌🌰
```
getCookie('id') // 1
```

#### 6. 删除对应设置的cookie
max-age为0时，删除cookie
* * *
```
function deleteCookie(name) {
    let currentCookie = getCookie(name);
    if (currentCookie) document.cookie = name + '=' + currentCookie + `; max-age=0}; path=/`;
}
```
举个栗子 → 🙌🌰
```
deleteCookie('id')
document.cookie // ''
```

#### 7. 防抖函数的应用
* * *
在一定的时间内，多次执行同一个函数，只会触发一次
```
function debounce(fn,delay) {
    let timer = null;
    return function () {
        if(timer) clearTimeout(timer);
        timer = setTimeout(fn,delay)
    }
}
```


#### 8. 节流函数的应用
* * *
在一定时间内，多次执行同一个函数，只有第一次执行才会触发。
```
function throttle(fn,delay) {
    let flag = true;
    return function () {
        if(!flag) return false;
        flag = false;
        setTimeout(()=> {
           fn();
           flag = false;
        },delay);
    }
}
```

举个栗子 → 🙌🌰
场景：以一个输入框为例，监听鼠标弹起事件，在1s时间内， 输出时间戳，多次输入，只会执行一次。
```
let ele = document.getElementsByTagName('input')[0];
ele.addEventListener('keyup',throttle(()=>{
    console.log(Date.now());
},1000));
```


#### 9. 正则匹配手机号码
* * *
```
function checkPhone(phone) {
   return /^1[3-9]\d{9}$/.test(phone);
}
```
举个栗子 → 🙌🌰
```
checkPhone(18900008888) // true 此号码随机写的，如可以拨打，告知修改
```

#### 10. 正则匹配固定电话号码
* * *
```
function checkTel (tel) {
   return /^((d{3,4})|d{3,4}-|s)?d{5,14}$/.test(tel)
}
```

举个栗子 → 🙌🌰
```
checkTel('12306')    // true 12306服务热线
checkTel('95105105') // true 12306 订票热线
checkTel('0755-12306') //true
```

#### 11. 是否是数组
* * *
```
function isArray (val) {
   return Object.prototype.toString.call(val) === '[object Array]';
}
```
举个栗子 → 🙌🌰
```
isArray([]) // true
isArray({}) // false
```

#### 12. 是否是对象
* * *
```
function isObject(val) {
   return Object.prototype.toString.call(val) === '[object Object]';
}
```

举个栗子 → 🙌🌰
```
isObject([]) // false
isObject({}) // true
```

#### 13. 是否是数值
* * *
```
function isNumber(val) {
   return Object.prototype.toString.call(val) === '[object Number]';
}
```

举个栗子 → 🙌🌰
```
isNumber(12) // true
isNumber({}) // false
```

#### 14. 检测对象是否含有某个属性
* * *
```
function checkObjHasAtrr(obj, key) {
   return Object.prototype.hasOwnProperty.call(obj, key);
}
```
举个栗子 → 🙌🌰
```
checkObjHasAtrr({id: 1, type: 2}, 'id') // true
```

#### 15.数组最大值
* * *
```
function max (arr) {
   if (!isArray(arr) && arr.length) return;
   return Math.max.apply(null,arr);
}
```
举个栗子 → 🙌🌰
```
max([1,2,3,4,5,6])  // 6
```

#### 16. 求数组最小值 
* * *
```
function min(arr) {
   if (!isArray(arr) && arr.length) return;
   return Math.min.apply(null, arr);
}
```

举个栗子 → 🙌🌰
```
min([1,2,3,4,5,6])  // 1
```


#### 17. 生成一个新数组，该数组从start 开始，默认值为0
* * *
```
function toArray (list, start) {
    start = start || 0;
    let i = list.length - start;
    let ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret;
}
```

举个栗子 → 🙌🌰
```
toArray([1,2,3,4,5,6], 2) // [3, 4, 5, 6]
```

#### 18. 生成随机范围的随机数[min,max]
* * *
说明：
Math.floor：下取整
Math.random：生成0~1 的随机数
```
function getRandom(min,max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

举个栗子 → 🙌🌰
```
getRandom(1,2) // 1 随机生成[1,2]
```

#### 19. 去除字符串空格
* * *
去除首尾空格
```
function trim1(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
}
```
去除字符串所有空格
```
function trim2(str) {
    return str.replace(/(\s+)/g, ''); 
}
```

举个栗子 → 🙌🌰
```
trim1(' web api ') // 'web api'
trim2(' web api ') // 'webapi'
```

#### 20. 阻止默认事件操作
* * *
preventDefault用于取消一个目标元素的默认行为。默认事件，比如a标签，点击默认跳转。
```
function preventDefault(e) {
    e = e || window.event;
    if (e & e.preventDefault) e.preventDefault();
    else e.returnValue  = false; //IE低版本
}
```

举个栗子 → 🙌🌰
鼠标点击右键，阻止默认事件（oncontextmenu）弹起
```
document.oncontextmenu  = function (e) {
    preventDefault(e);
}
```

#### 21. 阻止冒泡事件操作
***
事件冒泡：如在一个按钮是绑定一个”click”事件，那么”click”事件会依次在它的父级元素中被触发 。
```
function stopPropagation(e) {
    e = e || window.event;
    if (e & e.stopPropagation) e.stopPropagation();
    else e.cancelBubble = true;
}
```

举个栗子 → 🙌🌰
已input，body为栗：

```
let btn = document.querySelector('input');
let oBody = document.querySelector('body');
btn.onclick = function (e) {
    stopPropagation(e); // 1
    // stopPropagation(e); // 1,2
    console.log(1)
}
oBody.onclick = function () {
    console.log(2);
}
```

#### 22. 将对象数据转换需要的数组
***
```
function formatObjToArr(obj) {
    if (!isObject(obj)) return [];
    let options = [];
    for (let i in obj) options.push({
        name: obj[i],
        key: i
    });
    return options;
}
```

举个栗子 → 🙌🌰
```
formatObjToArr({1: 'Jack', 2: 'Tom'}) // [{name: "Jack", key: "1"},{name: "Tom", key: "2"}
```

#### 23. 删除数组中的某个元素
***
```
function removeArr(arr, val) {
    let index = arr.indexOf(val);
    if (index > -1) arr.splice(index, 1);
    return arr;
}
```

举个栗子 → 🙌🌰
```
removeArr([1,2,3,4,5,6,7,8],4) //  [1, 2, 3, 5, 6, 7, 8]
```

#### 24. 数组去重
***
```
function uniqueArr(arr) {
    return Array.from(new Set(arr));
}
```

举个栗子 → 🙌🌰
```
uniqueArr([1, 2, 1, 3]) //[1, 2, 3]
```


#### 25. 图片下载
***
注： 在微信自带的游览器中不支持，微信会拦截，可以使用微信的JS-SDK。 服务器端需要设置允许跨域：access-control-allow-origin: *  
```
function downImage(imageSrc, name) {
    let image = new Image();
    // 处理canvas 跨域问题 
    image.setAttribute('crossOrigin', 'anonymous');
    image.onload = function() {
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, image.width, image.height);
        let url = canvas.toDataURL('image/png'); // 图片编码数据
        let a = document.createElement('a');
        let event = new MouseEvent('click'); // 创建一个单击事件
        a.download = name || 'image'; // 设置图片名称
        a.href = url; // 将生成的URL设置为a.href属性
        a.dispatchEvent(event); // 触发a的单击事件
        a = null,canvas = null;
    }
    image.src = imageSrc;
}
```

举个栗子 → 🙌🌰
```
downImage('https://bkimg.cdn.bcebos.com/pic/94cad1c8a786c9179e80a80cc23d70cf3bc75700?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5')
```

#### 26. js 深度拷贝
***
```
function deepCopy(obj, cache) {
    if (cache === void 0) cache = [];
    if (obj === null || typeof obj !== 'object') {
        return obj
    }
    let copy = Array.isArray(obj) ? [] : {};
    // 设置缓存，用于下面递归引用
    cache.push({
        original: obj,
        copy: copy
    });
    Object.keys(obj).forEach(function(key) {
        copy[key] = deepCopy(obj[key], cache);
    });
    return copy
}
```

举个栗子 → 🙌🌰
```
let obj = {
    id: 1,
    name: 'fishStudy520',
    data: [],
    getName: function() {
        return this.name
    }
}
deepCopy(obj); 
```

#### 27. 获取验证码倒计时
***
```
function getCode(time) {
    let setInter = null,
        codeText = '';
    setInter = setInterval(() => {
        if (time < 1) {
            clearInterval(setInter);
            codeText = '获取验证码';
        } else {
            codeText = `已发送${ time }s`;
            time--;
        }       
    }, 1000);	
}
```
举个栗子 → 🙌🌰
```
getCode(5)
```

#### 28. 将手机号码4-7位转换成 *
***
```
function replaceMobile(mobile) {
    return Number.prototype.toString.call(mobile).replace(/1(\d{2})\d{4}(\d{4})/g,'1$1****$2');
}
```

举个栗子 → 🙌🌰
```
replaceMobile(18000009999) //"180****9999"
```

#### 29. 封装简易的ajax 请求
****
```
function request(obj) {
    return new Promise(function(resolve, reject) {
        let { url, method = 'GET', params = {}, isAsync = true } = obj;
        method = method.toUpperCase();
        let xhr = new XMLHttpRequest(); // 创建一个 XMLHttpRequest对象
        if (method === "POST") {
            xhr.open(method, url, isAsync);
            xhr.setRequestHeader('Content-type', 'application/json'); // json 数据格式（已json数据格式为例）
            xhr.send(JSON.stringify(params)); // json 字符串
        } else {
            let paramsStr = formateObjToParamStr(params);
            xhr.open(method, url + paramsStr, isAsync); //参数已url 方式传递
            xhr.send();
        }
        xhr.onreadystatechange = function() {
            if (xhr.status === 200 && xhr.readyState === 4) {
                let response = JSON.parse(xhr.responseText);
                resolve(response)
            } else if (xhr.readyState === 4) {
                reject({
                    code: xhr.status,
                    message: xhr.statusText
                })
            }
        }
    }).catch((e) => console.log(e))
}
```

举个栗子 → 🙌🌰
```
// 当前项目里创建 data.json 文件
{
	"code": 200,
	"data": [{
			"id": 1,
			"name": "JavaScript 高级程序设计第三版"
		},
		{
			"id": 2,
			"name": "JavaScript 权威指南"
		},
		{
			"id": 3,
			"name": "你不知道的JavaScript《上》"
		},
		{
			"id": 4,
			"name": "你不知道的JavaScript《中》"
		},
		{
			"id": 5,
			"name": "你不知道的JavaScript《下》"
		}
	]
}

// 函数调用
(async function getRequestList() {
    let res = await request({
        url: 'data.json',
        method: 'GET',
    });
    console.log(res);
})();

// 直接调用
request({ url: 'data.json', method: 'GET',}).then(res=> {
    console.log(res)
})
```

#### 30. 数值前面加 0
***
val:  数字
size:  长度
```
function addZero(val, size) {
    for (let i = 0, len = size - (val + '').length; i < len; i++) {
        val = '0' + val;
    };
    return val + '';
}
```

举个栗子 → 🙌🌰
```
addZero(20,5) // "00020"
```

#### 最后
***

如果喜欢那就点个赞呗（👍👍👍）！ (╯ε╰)(╯ε╰)(╯ε╰)