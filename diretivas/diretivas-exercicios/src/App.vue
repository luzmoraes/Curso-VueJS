<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando directiva <strong>v-text</strong>'"></p>
		<p v-html="'Usando directiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque:fundo.atrasar="'lightblue'">Usando directiva personalizada</p>
		<p v-destaque.atrasar="cor">Usando directiva personalizada</p>
		<hr>
		<p v-destaque-local:fundo.atrasar.alternar="'lightblue'">Usando directiva local personalizada</p>
		<p v-destaque-local.atrasar="cor">Usando directiva local personalizada</p>
		<hr>
		<p v-destaque-local-objeto:fundo.atrasar.alternar="{cor1: 'green', cor2: 'red', atraso: 2000, intervalo: 200}">Usando directiva local personalizada</p>
		<p v-destaque-local-objeto.atrasar="{cor1: 'green', atraso: 5000}">Usando directiva local personalizada</p>
	</div>
</template>

<script>
export default {
	directives: {
		'destaque-local': {
			bind(el, binding, vnode) {

				const aplicarCor = cor => {
					if (binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let atraso = 0;
				if (binding.modifiers['atrasar']) atraso = 3000
				

				const cor1 = binding.value
				const cor2 = 'purple'
				let corAtual = cor1

				setTimeout(() => {
					setInterval(() => {
						corAtual = corAtual === cor1 ? cor2 : cor1
						if (binding.modifiers['alternar']) {
							aplicarCor(corAtual)
						}
					}, 1000);
					aplicarCor(binding.value)
				}, atraso);
			}
		},
		'destaque-local-objeto': {
			bind(el, binding, vnode) {

				const aplicarCor = cor => {
					if (binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let atraso = 0;
				if (binding.modifiers['atrasar']) atraso = binding.value.atraso
				

				const cor1 = binding.value.cor1
				const cor2 = binding.value.cor2
				let corAtual = cor1

				setTimeout(() => {
					setInterval(() => {
						corAtual = corAtual === cor1 ? cor2 : cor1
						if (binding.modifiers['alternar']) {
							aplicarCor(corAtual)
						}
					}, binding.value.intervalo);
					aplicarCor(binding.value.cor1)
				}, atraso);
			}
		}
	},
	data() {
		return {
			cor: 'red'
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
	font-size: 2.5rem;
}
</style>
