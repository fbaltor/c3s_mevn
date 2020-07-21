<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav nav-fill w-100">
        <li class="nav-item">
          <a href="/transactions" class="nav-link"
            ><strong>transactions</strong></a
          >
        </li>
        <li class="nav-item">
          <a href="/add" class="nav-link"><strong>add</strong></a>
        </li>
        <li class="nav-item">
          <a href="/cashflow" class="nav-link"><strong>cash flow</strong></a>
        </li>
        <li class="nav-item">
          <a href="/find" class="nav-link"><strong>find</strong></a>
        </li>
      </div>
    </nav>

  <div class="container mt-3">
    <router-view />
  </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>
