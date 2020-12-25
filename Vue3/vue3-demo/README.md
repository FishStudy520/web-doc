# vue3-demo

#### Project setup
```
npm install
```

##### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```


#### 正文
***
#### 版本
***
> node v12.16.2
> npm 6.14.9

#### 完整的package.json
***
```
{
  "name": "vue3-demo",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "core-js": "^3.6.5",
    "vue": "^3.0.0",
    "vue-router": "^4.0.1"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "@vue/compiler-sfc": "^3.0.0",
    "ant-design-vue": "^2.0.0-rc.5",
    "autoprefixer": "^9.8.6",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^7.0.0-0",
    "postcss": "^8.2.1",
    "postcss-loader": "^4.1.0",
    "sass": "^1.30.0",
    "sass-loader": "^10.1.0",
    "vuex": "^4.0.0-rc.2"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/vue3-essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "babel-eslint"
    },
    "rules": {}
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ]
}

```

#### 1. 初始化项目
***
 1.1  使用Vue3，需要升级vue-cli，全局安装最先版本@vue/cli；  
 ```
 npm install -g @vue/cli@next
 ```
 1.2 安装成功后输入,显示，安装成功   
 ```
 $ vue -V
 @vue/cli 4.5.4
 ```
 1.3  安装成功Vue cli 4, 使用下面命令创建vue3项目；  
 ```
 vue create vue3-demo
 ```
 运行：在`Manually select features` 输入Vue 3选择vue3版本；   
 ```
 ? Please pick a preset: (Use arrow keys)
> true ([Vue 2] dart-sass, babel, typescript, router, vuex, unit-mocha, e2e-cypr
ess)
  Default ([Vue 2] babel, eslint)
  Default (Vue 3 Preview) ([Vue 3] babel, eslint)
  Manually select features Vue 3

 ```
![image.png](https://segmentfault.com/img/bVcLCXx)

 1.4 启动服务
 ```
 cd vue3-demo  //进入文件
 npm run serve // 运行项目
 ```
 使用网络浏览器转到：`http://localhost:8080/`,如图
![image.png](https://segmentfault.com/img/bVcLC1E)

 
 1.4 项目文件列表
 ```
├─.gitignore
├─ .git
├─ node_modules
├─babel.config.js
├─package-lock.json
├─package.json
├─README.md
├─src
|  ├─App.vue
|  ├─main.js
|  ├─components
|  |     └HelloWorld.vue
|  ├─assets
|  |   └logo.png
├─public
|   ├─favicon.ico
|   └index.html

 ```
#### 2. 配置PostCSS
***
PostCSS 插件转换 CSS 代码的工具,增加代码的可读性。利用从 Can I Use 网站获取的数据为 CSS 规则添加特定厂商的前缀。  

[Autoprefixer](https://github.com/postcss/autoprefixer) 自动获取浏览器的流行度和能够支持的属性，并根据这些数据帮你自动为 CSS 规则添加前缀。  

2.1  安装 postcss、postcss-loader、autoprefixer插件；  
```
npm i postcss postcss-loader autoprefixer@9.8.6 -D
```

`autoprefixer`使用9.8.6版本主要是与`postcss`的兼容性问题，`autoprefixer`默认使用最新版本。

2.2  在`vue3-demo`项目下创建`postcss.config.js`文件；
```
//创建 postcss.config.js
touch postcss.config.js

// postcss.config.js
module.exports = {
	plugins: [
		// 配置 Autoprefixer 插件
		require('autoprefixer')({
            // 游览器最近的两个版本
			'overrideBrowserslist': ['last 2 versions']
		})
	],
};
```

2.3 在`App.vue` 中输入下面代码，重新运行：
```
<template>
  <div>123</div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>
	div {
		display: flex;
	}
</style>
```
通过游览器查看输出：
```
div {
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
}
```

#### 3. 配置Css 预处理语言 —— Sass
3.1 使用下面命令安装 Sass;
```
npm install sass sass-loader -D
```
3.2  安装好了sass，那我们就在`App.vue`中使用Sass；
```
<!-- App.vue -->
<template>
  <div>123</div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss" scoped>
	$color: #f00;
	div {
		display: flex;
		color: $color,
	}
</style>
```
这里我们可以在页面上，文字已经是红色了。

#### 4. 配置UI组件库
***
4.1 使用下面命令按装UI组件`ant-design-vue@next`,`ant-design-vue`组件已经支持 `Vue3`;
```
npm i ant-design-vue@next -D
```

4.2 在`main.js` 中, 全局引入`ant-design-vue`组件库
```
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(Antd)
app.mount('#app')
```

4.3  在`App.vue`中引入`ant-design-vue`组件；
```
<template>
	<a-layout id="components-layout-demo-custom-trigger">
		<a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
			<div class="logo" />
			<a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
				<a-menu-item key="home">
					<HomeOutlined />
					<span>Home</span>
				</a-menu-item>
				<a-sub-menu key="sub1">
					<template #title>
						<span>
							<user-outlined />
							<span>User</span>
						</span>
					</template>
					<a-menu-item key="user"> Tom</a-menu-item>
				</a-sub-menu>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-header style="background: #fff; padding: 0">
				<menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
				<menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
			</a-layout-header>
			<a-layout-content class="main">
				<router-view></router-view>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>
<script>
	import {
		UserOutlined,
		HomeOutlined,
		MenuUnfoldOutlined,
		MenuFoldOutlined
	} from '@ant-design/icons-vue';

	export default {
		components: {
			UserOutlined,
			HomeOutlined,
			MenuUnfoldOutlined,
			MenuFoldOutlined
		},
		data() {
			return {
				selectedKeys: ['home'],
				collapsed: false,
			};
		},
		methods: {
			
		}
	};
</script>
<style lang="scss" scoped>
	#components-layout-demo-custom-trigger {
		height: 100vh;

		.trigger {
			font-size: 18px;
			line-height: 64px;
			padding: 0 24px;
			cursor: pointer;
			transition: color 0.3s;

			&:hover {
				color: #1890ff;
			}
		}

		.logo {
			height: 32px;
			background: rgba(255, 255, 255, 0.2);
			margin: 16px;
		}

	}

	.main {
		margin: 24px 16px;
		padding: 24px;
		background: #fff;
		height: calc(100% - 64px);
	}
</style>
```


#### 5. 配置路由 vue-router
5.1  下载安装`vue-router`
```
npm install vue-router@4 
```

5.2  安装成功后，在`src`中创建`views` 文件夹，并且创建`home.vue``user.vue`两个文件；   
`home.vue`文件
```
<template>
	Home
</template>
```
`user.vue`文件
```
<template>
	User
</template>
```

5.3  在`src`中创建`router` 文件夹，并且创建`index.js`文件
```
import {
	createRouter,
	createWebHashHistory
} from 'vue-router'

const Home = ()=> import('./../views/home.vue')
const User = ()=> import('./../views/user.vue')

const routes = [{
		path: '/home',
		name: 'home',
		component: Home
	},
	{
		path: '/user',
		name: 'user',
		component: User
	},
	{
		path: '/',
		redirect: '/home',
		component: Home
	}
]
export default createRouter({
	history: createWebHashHistory(),
	routes
});
```

5.4  在 `main.js` 中引用 `vue-router`;  
```
//main.js
import router from './router/index.js'
...
app.use(router)
```

5.5  在`App.vue` 中第5中添加方法`menuClick`;   
`<a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys" @click="menuClick">`

实现路由跳转，在methods 中添加方法`menuClick`   
```
methods: {
    menuClick(e) {
       // 路由跳转
        this.$router.push(e.key)
    }
}
```
等页面更新，我们点击user、hone菜单就可以看到效果了。

#### 6.  配置状态管理器 `Vuex`
***
6.1 安装 `vuex`;
```
npm install vuex@next -D
```

6.2 在`src`中创建`store` 文件夹，并且创建`index.js`文件;  
并且在`state` 里面存放一个 `count`值;  
在`mutations`里面创建一个操作`increment`，每次加1；  
```
import {
	createStore
} from 'vuex'

export default createStore({
	// 存放状态
	state:{
		count: 0
	},
	mutations: {
		// 操作
		increment(state) {
			state.count++
		}
	},
    actions: {
    
    },
    modules: {
    
    }
})

```
6.3  在 `main.js` 中引入 `vuex`;
```
import store from './store/index.js'
...
app.use(store)
```

6.4 在`home.vue`中添加一个按钮，并使用`count`这个值；通过按钮更新`Vuex`的值。
```
<template>
	<div>使用count 这个状态{{this.$store.state.count}}</div>	
	<a-button @click="add" type="primary">点击状态加一</a-button>
</template>

<script>
	export default {
		methods: {
			add() {
				this.$store.commit('increment')
			}
		}
	}
</script>
```

#### 总结
***
这篇文章比较基础，但根据以上的步骤，就可以把项目搭建起来。今天的`Vue3`的项目搭建就到这里了，现在暂时还有很多插件不能使用，后续慢慢就会更新，越来越多的插件将会支持`Vue3`。

#### 最后
***
如果喜欢或对你有用，那就点个赞呗（👍👍👍）！ (╯ε╰)(╯ε╰)(╯ε╰)。   

#### 参考
***
[Vue文档](https://vue3js.cn/)  
[postcss](https://www.postcss.com.cn/)  
[autoprefixer](https://github.com/postcss/autoprefixer)   



