<template>
	<v-app>
		
		<app-menu />

		<v-toolbar app>
			<app-toolbar />
		</v-toolbar>

		<v-content>
			<app-carousel />
		</v-content>

		<app-footer />

	</v-app>
</template>

<script>
import Toolbar from './components/template/Toolbar.vue'
import Menu from './components/template/Menu.vue'
import Carousel from './components/widgets/Carousel.vue'
import Footer from './components/template/Footer.vue'

export default {
	components: {
		appFooter: Footer,
		appCarousel: Carousel,
		appToolbar: Toolbar,
		appMenu: Menu
	}
}
</script>
