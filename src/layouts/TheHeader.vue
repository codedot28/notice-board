<template>
  <header>
    <nav class="navbar navbar-expand-sm bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="../assets/memoLogo.svg" alt="메인로고" width="50" height="24" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <!-- <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/about">About</RouterLink>
            </li> -->
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/posts">게시글</RouterLink>
            </li>
          </ul>
          <div class="d-flex" role="search">
            <button class="btn btn-outline-success" type="button" @click="goPage">글쓰기</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter('');
const goPage = () => {
  router.push({
    name: 'PostCreate',
  });
};
</script>

<style lang="scss" scoped></style>
