<template>
  <!-- Alerta -->
  <div v-if="alertMessage" :class="alertClass" class="alert alert-dismissible fade show" role="alert">
    {{ alertMessage }}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>

  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow-lg" style="width: 100%; max-width: 400px;">

      <div>
        <img src="../assets/logo.png" alt="Logo de ShopHub" class="mx-auto d-block" />
      </div>

      <h2 class="text-center mb-4">Cadastro</h2>

      <form @submit.prevent="handleCadastro">
        <div class="mb-3">
          <input
            v-model="nome"
            type="text"
            class="form-control"
            placeholder="Digite seu Nome"
            required
          />
        </div>
        <div class="mb-3">
          <input
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Digite seu Email"
            required
          />
        </div>
        <div class="mb-3">
          <input
            v-model="senha"
            type="password"
            class="form-control"
            placeholder="Escolha uma Senha"
            required
          />
        </div>
        <div class="mb-3">
          <label>
            <input
              v-model="isAdmin"
              type="checkbox"
              name="admin"
            />
            Cadastrar como administrador?
          </label>
        </div>
        <button type="submit" class="btn btn-primary w-100">Cadastrar</button>
      </form>

      <div class="text-center mt-3">
        <p>
          Já é cadastrado? <router-link to="/login">Entrar</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const nome = ref('');
const email = ref('');
const senha = ref('');
const isAdmin = ref(false);
const alertMessage = ref('');
const alertClass = ref('');
const router = useRouter();

const url = "https://serverest.dev/";
const usuarios = url + "usuarios";

// Função para lidar com o cadastro
const handleCadastro = () => {
  // Monta o objeto de dados do cadastro
  const body = JSON.stringify({
    nome: nome.value,
    email: email.value,
    password: senha.value,
    administrador: isAdmin.value.toString()
  });

  // Faz a requisição POST para o servidor
  fetch(usuarios, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Falha ao cadastrar');
    }
  })
  .then(data => {
    console.log('Usuário cadastrado:', data);
    alertMessage.value = 'Usuário cadastrado com sucesso';
    alertClass.value = 'alert-success'; // Classe para alerta de sucesso
    // Redireciona para a página de login após cadastro bem-sucedido
    setTimeout(() => {
      router.push('/login');
    }, 2000)

  })
  .catch(error => {
    console.error('Erro:', error);
    alertMessage.value = 'Erro ao fazer cadastro. Verifique os dados e tente novamente.';
    alertClass.value = 'alert-danger'; // Classe para alerta de erro
  });
};
</script>



