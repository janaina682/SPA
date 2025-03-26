<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow-lg" style="width: 100%; max-width: 400px">
      <div>
        <img src="../assets/logo.png" alt="Logo de ShopHub" class="mx-auto d-block" />
      </div>

      <h2 class="text-center mb-3">Login</h2>

      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <input v-model="email" type="email" class="form-control" placeholder="Email" required />
        </div>
        <div class="mb-3">
          <input
            v-model="senha"
            type="password"
            class="form-control"
            placeholder="Senha"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">Entrar</button>
      </form>

      <div class="text-center mt-3">
        <p>Não é cadastrado? <router-link to="/cadastro">Cadastre-se</router-link></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const senha = ref('')
const router = useRouter()

// URL para os endpoints da API
const url = 'https://serverest.dev/'
const loginUrl = url + 'login'
const usuariosUrl = url + 'usuarios'

// Função para lidar com o login
const handleLogin = async () => {
  try {
    const body = JSON.stringify({ email: email.value, password: senha.value })

    // Requisição para o login
    const loginResponse = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    })

    if (!loginResponse.ok) {
      if (loginResponse.status === 401) {
        throw new Error('Email ou senha inválidos')
      } else {
        throw new Error('Falha ao fazer login')
      }
    }

    const loginData = await loginResponse.json()
    console.log('Login bem-sucedido:', loginData)

    // Armazenar a autorização no localStorage
    localStorage.setItem('autorizacao', loginData.authorization)

    // Requisição para obter os usuários
    const usuariosResponse = await fetch(usuariosUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${loginData.authorization}`,
      },
    })

    if (!usuariosResponse.ok) {
      throw new Error('Erro ao buscar usuários')
    }

    const usuariosData = await usuariosResponse.json()
    console.log('Lista de usuários: ', usuariosData)

    // Verifica se o usuário existe e redireciona conforme o tipo
    const usuario = usuariosData.usuarios.find((u) => u.email === email.value)

    if (usuario && usuario.administrador === 'true') {
      console.log('Usuário admin:', usuario.nome)
      localStorage.setItem('nomeUsuario', usuario.nome)
      router.push('/admin/home') // Redireciona para a área do admin
    } else if (usuario) {
      localStorage.setItem('nomeUsuario', usuario.nome)
      router.push('/usuario') // Redireciona para a área do usuário
    } else {
      alert('Usuário não encontrado')
    }
  } catch (error) {
    console.error('Erro:', error)
    alert(error.message)
  }
}
</script>
