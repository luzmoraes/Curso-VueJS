<template>
	<div id="app" class="container-fluid">
		<!--
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
		-->
		<!-- appear - aplica a animação no carregamento da aplicação -->
		<!--
		<transition name="fade-slide" type="animation" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>
		-->
		<!-- Nesse exemplo não vamos usar o padrão de animação do vue, vamos usar o Animate.css (importado na index) -->
		<!--
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
			<b-alert variant="danger" show v-show="exibir">{{ msg }}</b-alert>
		</transition>

		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
		</transition>
		-->

		<!-- Animation with Javascript -->
		<!--
		<hr>
		<button @click="exibir2 = !exibir2">Alternar</button>
		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">
			<div class="caixa" v-if="exibir2"></div>
		</transition>
		
		<hr>
		<div class="mb-4">
			<b-button variant="primary" class="mr-2"
				@click="componenteSelecionado='AlertaInfo'">Info</b-button>
			<b-button variant="secondary" class="mr-2"
				@click="componenteSelecionado='AlertaAdvertencia'">Advertência</b-button>
		</div>
		<transition name="fade" mode="out-in">
			<component :is="componenteSelecionado"></component>
		</transition>
		-->

		<hr>
		<b-button @click="adiconarAluno" class="mb-4">Adicionar Aluno</b-button>
		<transition-group name="fade-slide" tag="div"> <!-- por default envolve com a tag span, mas podemos setar como no exemplo-->
			<b-list-group v-for="(aluno, i) in alunos" :key="aluno">
				<b-list-group-item @click="removerAluno(i)">{{ aluno }}</b-list-group-item>
			</b-list-group>
		</transition-group>

	</div>
</template>

<script>
import AlertaAdvertencia from './AlertaAdvertencia'
import AlertaInfo from './AlertaInfo'

export default {
	components: { AlertaAdvertencia, AlertaInfo },
	data() {
		return {
			alunos: ['Roberto', 'Julia', 'Tereza', 'Paulo'],
			msg: 'Uma mensagem de informação para o usuário!',
			exibir: false,
			exibir2: true,
			tipoAnimacao: 'fade',
			larguraBase: 0,
			componenteSelecionado: 'AlertaInfo'
		}
	},
	methods: {
		adiconarAluno() {
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},
		removerAluno(indice) {
			this.alunos.splice(indice, 1)
		},
		animar(el, done, negativo) {
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase +
					(negativo ? -rodada * 10 : rodada * 10)
				el.style.width = `${novaLargura}px`
				rodada++
				if (rodada > 30) {
					clearInterval(temporizador)
					done()
				}
			}, 20)
		},
		beforeEnter(el) {
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done) {
			this.animar(el, done, false)
		},
		afterEnter(el) {
			
		},
		enterCancelled() {
			
		},
		beforeLeave(el) {
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done) {
			this.animar(el, done, true)
		},
		afterLeave(el) {
			
		},
		leaveCancelled() {
			
		}
	},
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

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
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
	position: absolute;
	width: 100%;
	animation: fade-slide-out 2s ease;
	transition: opacity 2s;
}

.fade-slide-enter, .fade-slide-leave-to {
	opacity: 0;
}

.fade-slide-move {
	transition: transform 1s;
}

</style>
