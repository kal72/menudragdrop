<template>
  <div class="app">
    <!-- Component Demo -->
    <div class="content">
      <h1>Menu Nested by drag & drop</h1>
      <p>Wrap your item in a <code>vue-nestable-handle</code> to allow it to be dragged.</p>
      <br/>
       <br/>
      <Simple />
    </div>
  </div>
</template>

<script>
// import example components
import Simple from '@/components/Simple.vue'
// import styles
import('./assets/vue-nestable.css')
import('./assets/docs.css')
export default {
  name: 'App',
  components: {
    Simple
  }
}
</script>
