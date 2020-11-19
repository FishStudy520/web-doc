常见的css样式操作
### **单行文本溢出掩藏**
* * *
###### 语法：white-space: nowrap| pre | pre-wrap | pre-line | inherit
1. nowrap：单行文本不换行，文本显示一行；
2. pre: 保留空白(**在游览器显示时，保留空格**)；
3. pre-wrap: 保留空白序列，正常换行；
4. pre-line: 合并空白符序列，但是保留换行符;
5. inherit: 继承父级元素white-space 属性的值；

###### 语法：text-overflow：clip | ellipsis | string
1. clip: 裁剪文本；
2. ellipsis：省略号的形式替代被裁剪的文本；
3. string: 使用制定的字符来替代被裁剪的字符(**且支持火狐浏览器**)；
```
div {
    white-space: 'nowrap'; 
    overflow: hidden; 
    text-overflow: ellipsis;
}
```
### **多行文本溢出掩藏**
* * *
###### 语法：display: -webkit-box ，将对象作为弹性伸缩盒子模型显示；
###### 语法：-webkit-line-clamp：number
-webkit-line-clamp：限制一个块元素显示文本的行数(number)
###### 语法：-webkit-box-orient：horizontal | vertical | inline-axis | block-axis
设置或检索伸缩盒对象的子元素的排列方式：
1. horizontal： 盒子水平布局其内容；
2. vertical：盒子垂直布局其内容；
3. inline-axis：盒子沿内联轴展示其子元素；
4. block-axis：盒子沿块轴展示其子元素；
```
div {
    overflow: hidden;  
    text-overflow: ellipsis;  
    display: -webkit-box;  
    -webkit-line-clamp: 2;  
    -webkit-box-orient: vertical;
}
```
### ** 实现三角形的效果(向上)**
* * *
###### transparent：表示设置为透明
```
.triangle {  
    width: 0;  
    height: 0;  
    border-right: 20px solid transparent;  
    border-left: 20px solid transparent;  
    border-bottom: 20px solid red;  
}
```
### **兼容性较好垂直居中（不限宽高）**
* * *
```
<div class="parent">
    <div class="child"></div>
</div>
```
```
<style>
.parent{
    position: relative;
    width: 100%;
    height: 300px;
    background: #F1F1F1;
}
.child {
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    width: 150px;
    height: 150px;
    margin: auto;
    background: #0c7cb5;
}
</style>
```
### **css3 实现垂直居中**
* * *
###### **语法：display:flex,justify-content:center, align-items: center**
1. display:flex,设置弹性布局显示；
2. justify-content: center, 设置子元素水平居中；
3. align-items: center, 设置子元素垂直居中；
```
div {
    display: flex;  
    justify-content: center;  
    align-items: center;
}
```
### **css3 实现阴影效果**
* * *
###### 语法：box-shadow: h-shadow v-shadow blur spread color inset;
1. h-shadow：水平阴影位置(必选)，允许负值；
2. v-shadow： 垂直阴影的位置(必选)，允许负值；
3. blur：模糊距离(选填)；
4. spread: 阴影大小(选填)；
5. color:阴影颜色(选填)；
6. inset: 从外层的阴影（开始时）改变阴影内侧阴影(选填),默认是外阴影；
```
div {
  box-shadow: 2px 2px 2px 2px #f00 inset;
}
```
### **css3 实现圆角效果**
* * *
###### 语法：border-radius: number px; number 为数字
border-radius可设置多个值；
一个值：表示四个圆角都相同；
二个值：第一个值为右上和左下圆角的值，第二个值为右下和左上圆角的值；
三个值：第一个值为左上圆角的值，第二个值为右上和左下圆角的值，第三个值为右下的值；
四个个值：第一个值为左上圆角的值，第二个值为右上，第三个值为右下的值，第四个为左下圆角的值；
```
div {
   border-radius: 30px; 
   /*border-radius: 10px 30px*/
   /*border-radius: 10px 20px 30px*/
   /*border-radius: 10px 20px 30px 40px*/
}
```
### **css3 实现文本效果**
* * *
###### 语法：text-shadow: h-shadow v-shadow blur color;
1. h-shadow：必需。水平阴影的位置。允许负值；
2. v-shadow：必需。垂直阴影的位置。允许负值；
3. blur： 可选。模糊的距离；
4. color：可选。阴影颜色；
```
div {
    text-shadow: 2px 2px 2px #F00;
}
```
### **css 伪类first-letter**
* * *
###### 语法： first-letter表示向段落文本第一个字符添加特殊样式
```
div:first-letter{
    font-size: 50px;
    color:#f00;
    ........
}
```
### **css 伪类first-line**
* * *
###### 语法： first-line表示向文本的首行添加特殊样式
```
div:first-line {
    font-size: 50px;
    color:#f00;
    ........
}
```
### **css 跨游览器透明**
* * *
兼容IE8及以下版本
```
div{
    width: 200px;  
    height: 200px;  
    background: #00B7FF;  
    opacity: 0.5; /*标准游览器*/  
    filter: alpha(opacity=50);/*IE低版本 8*/
}
```
### **css3 图片裁剪**
* * *
###### 语法：object-fit: contain | cover | fill |  none | scale-down
1. contain: 缩放内容，保持内容的宽高比；
2. cover: 填充整个内容框，保持内容宽高比，如果对象的宽高比与内容框不匹配，该对象将裁剪以适应内容宽；
3. fill: 填充整个内容框（默认值），不保持原有比例；
4. none: 保持图片宽高不变；
5. scale-down: 当图片实际宽高小于所设置的图片宽高时，显示效果与none一致；否则，显示效果与contain一致；

```
div img {
    width:100%;
    height:100%;
    object-fit: cover;
}
```
### ** 设置 input placeholder 的颜色**
* * *
```
div::-webkit-input-placeholder {color: #999} 
div:-moz-placeholder { color: #999} 
div::-moz-placeholder {color: #999} 
div:-ms-input-placeholder {  color: #999}
```

### ** 模糊滤镜效果**
* * *
###### 语法： filter：blur() | brightness() | contrast() | drop-shadow() | grayscale() |  hue-rotate() | invert() | opacity() | saturate() | sepia() | url()
1. blur(px): 设置高斯模糊，使用px为单位；
2. brightness(%): 设置图像明暗，使用%为单位，值越大越亮；
3. contrast(%): 调整图像的对比度。
4. drop-shadow(h-shadow v-shadow blur spread color): 给图像设置一个阴影效果，参考box-shadow；
5. grayscale(%): 将图像转换为灰度图像，使用%为单位；
6. hue-rotate(deg): 给图像应用色相旋转，使用deg为单位；
7. invert(%): 设置反转输入图像，值为0-100%；
8. opacity(0.5): 设置透明程度,值为0-1；
9. saturate(%): 设置图像饱和度；
10. sepia(%): 将图像转换为深褐色，值为0-100%；
11. url(): URL函数接受一个XML文件，该文件设置了 一个SVG滤镜，且可以包含一个锚点来指定一个具体的滤镜元素
```
div{
    filter: blur(1px);
}
```

### **伪类清除浮动**
```
<div class="float clear">  
    <div class="left"></div>  
    <div class="right"></div>  
</div>
/*伪类清除浮动*/  
.float {  
    background: #00B7FF;  
}  
.float .left {  
    width: 300px;  
    height: 200px;  
    float: left;  
    background: #00B7aa;  
}  

.float .right {  
    width: 300px;  
    height: 200px;  
    float: right;  
    background: #00B7aa;  
}  
.clear::after {  
    display: block;  
    clear: both;  
    content: "";  
}
```

### **移动端 1px 处理**
* * *
#### 伪元素 + transform 实现

```
<!--html-->
<div class="line-1px"></div>

/*css*/
.line-1px {
    position: relative;
    height: 100px;
}

.line-1px:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    width: 100%;
    height: 1px;
    background: #f00;
    transform: scaleY(0.5);
}
```

### 处理 ios 滚动不流畅问题
***
```
div {
    -webkit-overflow-scrolling:touch;
}
```

持续更新。。。。
