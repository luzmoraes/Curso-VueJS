<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4"
			@click="exibir = !exibir">Mostrar Mensagem</b-button>
		
		<transition name="fade">
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>
		
		<transition name="fade">
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>

		<transition name="slide">
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>
		<!-- appear - aplica a animação no carregamento da aplicação -->
		<transition name="fade-slide" type="animation" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<!-- Nesse exemplo não vamos usar o padrão de animação do vue, vamos usar o Animate.css (importado na index) -->
		<transition
			enter-active-class="animated bounce"
			leave-active-class="animated shake">
			<b-alert variant="success" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<hr>
		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>

		<transition :name="tipoAnimacao">
			<b-alert variant="danger" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

	</div>
</template>

<script>

export default {
	data() {
		return {
			msg: 'Uma mensagem de informação para o usuário!',
			exibir: false,
			tipoAnimacao: 'fade'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

/* fade */
.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}


/* Slide */
@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0); }
}

@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

.slide-enter-active {
	animation: slide-in 2s ease;
}

.slide-leave-active {
	animation: slide-out 2s ease;
}


/* fade + slide */
@keyframes fade-slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0); }
}

@keyframes fade-slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

.fade-slide-enter-active {
	animation: fade-slide-in 2s ease;
	transition: opacity 2s;
}

.fade-slide-leave-active {
	animation: fade-slide-out 2s ease;
	transition: opacity 2s;
}

.fade-slide-enter, .fade-slide-leave-to {
	opacity: 0;
}


</style>
