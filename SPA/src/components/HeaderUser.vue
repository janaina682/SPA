<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/usuario">
        <img src="../assets/logo.png" alt="logo" style="width: 70px; height: 70px;">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/usuario">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/usuario/favoritos">Favoritos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/usuario/carrinho">Carrinho</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <button class="btn btn-outline-success" type="submit">Sair</button>
        </form>
      </div>
    </div>
  </nav>
</template>
