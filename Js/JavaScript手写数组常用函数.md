#### 前言
* * *
   在开发过程中，我们常常使用数组的一些 `api`相关操作，其中包含 `forEach` 函数、`filter` 函数、`find` 函数、`findIndex` 函数、`map` 函数、`some` 函数、`every`函数、`reduce`函数、`reduceRight`函数等方法。
    
   以前一直是只会使用，不清楚具体是怎么实现的，现在自己根据函数的功能，自己实现数组这些常用的方法。为了方便，直接在数组原型上扩展，在原来的方法名my左区分。

   > 阅读三连：点赞（👍）、关注（😍）、收藏（📝）。  
   > 本文 [Githab]() 已上传，更多文章以分类整理。   

#### 目录
***
  * [forEach 函数](#forEach)
  * [filter 函数](#filter)
  * [find 函数](#find)
  * [findIndex 函数](#findIndex) 
  * [fill 函数](#fill)
  * [map 函数](#map)
  * [some 函数](#map)
  * [every 函数](#every) 
  * [reduce 函数](#reduce)
  * [reduceRight 函数](#reduceRight) 

#### 正文
***

#### <span id="forEach">forEach 函数</span>
***
**语法：** `arr.forEach(callbackFn(currentValue [, index [, array]])[, thisArg])`  
**方法功能：** 对数组的每个元素执行一次给定的函数。

**返回：** undefined。  
自定义函数：myForEach。
```
Array.prototype.myForEach = function(callbackFn, thisArg) {
    if (typeof callbackFn !== 'function') throw ('callbackFn参数必须是函数');
    let element = this,
        len = element && element.length || 0;
    if (!thisArg) thisArg = element;
    for (let index = 0; index < len; index++) {
        callbackFn.call(thisArg, element[index], index, element);
    }
};
```


#### <span id="filter">filter 函数 </span>
***
**语法：** `var newArray = arr.filter(callbackFn(element[, index[, array]])[, thisArg])`    
**方法功能：** 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。  

**返回：** 一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。  
自定义函数：myFilter。
```
Array.prototype.myFilter = function(callbackFn, thisArg) {
    if (typeof callbackFn !== 'function') throw ('callbackFn参数必须是函数');
    let element = this,
        len = element && element.length || 0,
        result = [];
    if (!thisArg) thisArg = element;
    for (let index = 0; index < len; index++) {
        if (callbackFn.call(thisArg, element[index], index, element)) result.push(element[index]);
    }
    return result;
};
```

#### <span id="find">find 函数</span>
***
**语法：**`arr.find(callbackFn[, thisArg])`  
**方法功能：** 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。  

**返回：** 数组中第一个满足所提供测试函数的元素的值，否则返回 undefined。    
自定义函数：myFind。
```
Array.prototype.myFind = function(callbackFn, thisArg) {
    if (typeof callbackFn !== 'function') throw ('callbackFn参数必须是函数');
    let element = this,
        len = element && element.length || 0;
    if (!thisArg) thisArg = element;
    for (let index = 0; index < len; index++) {
        if (callbackFn.call(thisArg, element[index], index, element)) {
            return element[index];
        }
    }
    return
}
```

#### <span id="findIndex">findIndex 函数</span>
***
**语法：** `arr.findIndex(callbackFn[, thisArg])`  
**方法功能：** 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。  

**返回：** 数组中通过提供测试函数的第一个元素的索引。否则，返回-1。    
自定义函数：myFindIndex。
```
Array.prototype.myFindIndex = function(callbackFn, thisArg) {
    if (typeof callbackFn !== 'function') throw ('callbackFn参数必须是函数');
    let element = this,
        len = element && element.length || 0;
    if (!thisArg) thisArg = element;
    for (let index = 0; index < len; index++) {
        if (callbackFn.call(thisArg, element[index], index, element)) return index;
    }
    return -1;
}
```

#### <span id="fill">fill 函数</span>
***
**语法：** `arr.fill(value[, start[, end]])`  
**方法功能：** 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

**返回：** 返回替换的值，原数组发生改变。    
自定义函数：myFill。
```
Array.prototype.myFill = function(value, start = 0, end) {
    let element = this,
        len = element && element.length || 0;
    start = start || 0;
    end = end || len;
    let loopStart = start < 0 ? 0 : start, // 设置循环开始值
        loopEnd = end >= len ? len : end; // 设置循环结束值

    for (; loopStart < loopEnd; loopStart++) {
        element[loopStart] = value;
    }
    return element;
}
```

#### <span id="map">map 函数</span>
***
**语法：** `var new_array = arr.map(function callbackFn(currentValue[, index[, array]]) {// Return element for new_array }[, thisArg])`  
**方法功能：** 创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。

**返回：** 测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。 一个由原数组每个元素执行回调函数的结果组成的新数组。    
自定义函数：myMap。

```
Array.prototype.myMap = function(callbackFn, thisArg) {
    if (typeof callbackFn !== 'function') throw ('callbackFn参数必须是函数');
    let element = this,
        len = element && element.length || 0,
        result = [];
    if (!thisArg) thisArg = element;
    for (let index = 0; index < len; index++) {
        result[index] = callbackFn.call(thisArg, element[index], index, element);
    }
    return result;
}
```

#### <span id="some">some 函数</span>
***
**语法：** `arr.some(callbackFn(element[, index[, array]])[, thisArg])`  
**方法功能：** 测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。  

**返回：** 数组中有至少一个元素通过回调函数的测试就会返回true；所有元素都没有通过回调函数的测试返回值才会为false。  
自定义函数：mySome。

```
Array.prototype.mySome = function(callbackFn, thisArg) {
    if (typeof callbackFn !== 'function') throw ('callbackFn参数必须是函数');
    let element = this,
        len = element && element.length || 0;
    if (!thisArg) thisArg = element;
    for (let index = 0; index < len; index++) {
        if (callbackFn.call(thisArg, element[index], index, element)) return true;
    }
    return false;
}
```
#### <span id="every">every 函数</span>
***
**语法：** `arr.every(callbackFn(element[, index[, array]])[, thisArg])`  
**方法功能**：测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。  

**返回：** 如果回调函数的每一次返回都为 true 值，返回 true，否则返回 false。  
自定义函数：myEvery。

```
Array.prototype.myEvery = function(callbackFn, thisArg) {
    if (typeof callbackFn !== 'function') throw ('callbackFn参数必须是函数');
    let element = this,
        len = element && element.length || 0;
    if (!thisArg) thisArg = element;
    for(let index = 0; index < len; index++) {
        if (!callbackFn.call(thisArg, element[index], index, element)) return false;
    }
    return true;
}
```

#### <span id="reduce">reduce 函数</span>
***
**语法：** `arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])`  
**方法功能：**对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。   

**返回：** 函数累计处理的结果。   
自定义函数：myReduce。

```
Array.prototype.myReduce = function(callbackFn, initialValue) {
    if (typeof callbackFn !== 'function') throw ('callbackFn参数必须是函数');
    let element = this,
        len = element.length || 0,
        index = 0,
        result;
    if (arguments.length >= 2) {
        result = arguments[1];
    } else {
        while (index < len && !(index in element)) index++;
        if (index >= len) throw new TypeError('Reduce of empty array ' + 'with no initial value');
        result = element[index++];
    }

    while (index < len) {
        if (index in element) result = callbackFn(result, element[index], index, element);
        index++;
    }
    return result;
}
```

#### <span id="reduceRight">reduceRight 函数</span>
***
**语法：**`arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])`  
**方法功能：** 接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。  

**返回：** 执行之后的返回值。    
自定义函数：myReduceRight。
```
Array.prototype.myReduceRight = function(callbackFn, initialValue) {
    if (typeof callbackFn !== 'function') throw ('callbackFn参数必须是函数');
    let element = this,
        len = element.length || 0,
        index = len - 1,
        result;
    if (arguments.length >= 2) {
        result = arguments[1];
    } else {
        while (index >= 0 && !(index in element)) {
            index--;
        }
        if (index < 0) {
            throw new TypeError('reduceRight of empty array with no initial value');
        }
        result = element[index--];
    }
    for (; index >= 0; index--) {
        if (index in element) {
            result = callbackFn(result, element[index], index, element);
        }
    }
    return result;
}
```

#### 最后
***
如果喜欢那就点个赞呗（👍👍👍）！ (╯ε╰)(╯ε╰)(╯ε╰)