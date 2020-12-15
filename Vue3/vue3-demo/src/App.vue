<template>
	<a-layout id="components-layout-demo-custom-trigger">
		<a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
			<div class="logo" />
			<a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys" @click="menuClick">
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
			menuClick(e) {
				// 路由跳转
				this.$router.push(e.key)
			}
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
