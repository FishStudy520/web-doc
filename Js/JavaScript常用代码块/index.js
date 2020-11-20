let utils = {
	// 将Url参数转换成对象，没有参数时返回空对象
	formatParamsToObject() {
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
	},
	// 将对象转换成Url需要的参数 tag标记是否带问号(?)
	formatObjToParamStr(obj, tag = true) {
		let data = [],
			dStr = '';
		for (let key in obj) {
			data.push(`${key}=${obj[key]}`);
		}
		dStr = tag ? '?' + data.join('&') : data.join('&');
		return dStr
	},
	// 通过参数名获取url中的参数值
	getUrlParam(name, url) {
		let search = url || window.location.search,
			reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'),
			r = search.substr(search.indexOf('\?') + 1).match(reg);
		return r != null ? r[2] : '';
	},
	// 设置cookie,设置max-age 属性指定cookie 的有效期（秒）
	setCookie(name, value, expiretime) {
		let cookie = `${name}=${encodeURIComponent(value)}; path=/`;
		if (typeof expiretime === 'number') cookie += `; max-age=${(60*60*24*expiretime)}`;
		document.cookie = cookie;
	},
	// 读取cookie,将设置的cookie值拿到单个key 对应的值
	getCookie(name) {
		let cookie = document.cookie;
		let arrCookie = cookie.split('; ');
		for (let i = 0; i < arrCookie.length; i++) {
			let arr = arrCookie[i].split('=');
			if (arr[0] == name) return arr[1];
		}
	},
	// 删除对应设置的cookie
	deleteCookie(name) {
		let currentCookie = getCookie(name);
		if (currentCookie) document.cookie = name + '=' + currentCookie + `; max-age=0}; path=/`;
	},
   // 防抖函数的应用: 在一定的时间内，多次执行同一个函数，只会触发一次
	debounce(fn, delay) {
		let timer = null;
		return function() {
			if (timer) clearTimeout(timer);
			timer = setTimeout(fn, delay)
		}
	},
	// 节流函数的应用: 在一定时间内，多次执行同一个函数，只有第一次执行才会触发。
	throttle(fn, delay) {
		let flag = true;
		return function() {
			if (!flag) return false;
			flag = false;
			setTimeout(() => {
				fn();
				flag = false;
			}, delay);
		}
	},
	// 正则匹配手机号码
	checkPhone(phone) {
		return /^1[3-9]\d{9}$/.test(phone);
	},
	// 正则匹配固定电话号码
	checkTel(tel) {
		return /^((d{3,4})|d{3,4}-|s)?d{5,14}$/.test(tel);
	},
	// 判断是否是数组 
	isArray(val) {
		return Object.prototype.toString.call(val) === '[object Array]';
	},
	// 是否是对象
	isObject(val) {
		return Object.prototype.toString.call(val) === '[object Object]';
	},
	// 是否是数值
	isNumber(val) {
		return Object.prototype.toString.call(val) === '[object Number]';
	},
	// 检测对象是否含有某个属性
	checkObjHasAtrr(obj, key) {
		return Object.prototype.hasOwnProperty.call(obj, key);
	},
	// 数组最大值
	max(arr) {
		if (!this.isArray(arr) && arr.length) return;
		return Math.max.apply(null, arr);
	},
	// 求数组最小值 
	min(arr) {
		if (!this.isArray(arr) && arr.length) return;
		return Math.min.apply(null, arr);
	},
	// 生成一个新数组，该数组从start 开始，默认值为0
	toArray(list, start) {
		start = start || 0;
		let i = list.length - start;
		let ret = new Array(i);
		while (i--) {
			ret[i] = list[i + start];
		}
		return ret;
	},
	// 生成随机范围的随机数[min,max]
	getRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	// 去除首尾空格
	trim1(str) {
		return str.replace(/(^\s*)|(\s*$)/g, '');
	},
	// 去除字符串所有空格
	trim2(str) {
		return str.replace(/(\s+)/g, '');
	},
	// 阻止默认事件操作
	preventDefault(e) {
		e = e || window.event;
		if (e & e.preventDefault) e.preventDefault();
		else e.returnValue = false; //IE低版本
	},
	// 阻止冒泡事件操作
	stopPropagation(e) {
		e = e || window.event;
		if (e & e.stopPropagation) e.stopPropagation();
		else e.cancelBubble = true;
	},
	// 将对象数据转换需要的数组
	formatObjToArr(obj) {
		if (!this.isObject(obj)) return [];
		let options = [];
		for (let i in obj) options.push({
			name: obj[i],
			key: i
		});
		return options;
	},
	// 删除数组中的某个元素
	removeArr(arr, val) {
	    let index = arr.indexOf(val);
	    if (index > -1) arr.splice(index, 1);
	    return arr;
	},
	// 数组去重
	uniqueArr(arr) {
	    return Array.from(new Set(arr));
	},
	// 下载图片
	downImage(imageSrc, name) {
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
	},
	// Js 深拷贝
	deepCopy(obj, cache) {
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
		let that = this;
	    Object.keys(obj).forEach(function(key) {
	        copy[key] = that.deepCopy(obj[key], cache);
	    });
	    return copy
	},
	// 获取验证码倒计时
	getCode(time) {
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
	},
	// 将手机号码4-7位转换成 *
	replaceMobile(mobile) {
	    return Number.prototype.toString.call(mobile).replace(/1(\d{2})\d{4}(\d{4})/g,'1$1****$2');
	},
	// 封装简易的ajax 请求 
	request(obj) {
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
	},
	// 数值前面加 0
	addZero(val, size) {
	    for (let i = 0, len = size - (val + '').length; i < len; i++) {
	        val = '0' + val;
	    };
	    return val + '';
	}
}
