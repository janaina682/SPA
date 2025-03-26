<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card p-3 shadow-lg" style="width: 80%; max-width: 900px">
      <div class="card-header d-flex justify-content-center">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          style="width: 100%; max-width: 800px"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
            ></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/banner3.png"
                class="d-block w-100 rounded"
                style="height: 300px"
                alt="Banner de promoção"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/banner.png"
                class="d-block w-100 rounded"
                style="height: 300px"
                alt="Banner de promoção"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/banner2.png"
                class="d-block w-100 rounded"
                style="height: 300px"
                alt="Banner de promoção"
              />
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      <div class="card-body text-center">
        <h5 class="card-title">Veja agora as nossas super ofertas</h5>
        <p class="card-text">
          Faça seu login e aproveite nossas ofertas exclusivas por tempo limitado.
        </p>
        <router-link to="/login" class="btn btn-primary">Entre agora!</router-link>
      </div>
    </div>
  </div>
</template>
<script></script>
