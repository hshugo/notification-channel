<template>
  <header>
    <section class="wrapper">
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/notification">Notification</router-link>
          </li>
          <li>
            <router-link to="/logs">Logs</router-link>
          </li>
        </ul>
      </nav>
    </section>
  </header>
  <main>
    <section class="contenido wrapper">
      <router-view></router-view>
    </section>
  </main>
</template>

<style scoped>
  * {
    font-family: sans-serif;
  }
  header{
    background: rgba(0,0,0,0.9);
    width: 100%;
  }

  nav {
    float: left; /* Desplazamos el nav hacia la izquierda */
  }

  nav ul {
    list-style: none;
    overflow: hidden; /* Limpiamos errores de float */
  }

  nav ul li {
    float: left;
    font-family: Arial, sans-serif;
    font-size: 16px;
  }

  nav ul li a {
    display: block; /* Convertimos los elementos a en elementos bloque para manipular el padding */
    padding: 20px;
    color: #fff;
    text-decoration: none;
  }

  nav ul li:hover {
    background: #3ead47;
  }
  .wrapper {
    margin: auto;
    overflow:hidden;
  }
  .contenido {
    max-width: 1280px;
    margin: 0 auto;
    padding: 5px;
  }
</style>
