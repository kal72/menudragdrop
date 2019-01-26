<template>
  <div>
    <VueNestable v-model="nestableItems" key-prop="menu_id" children-prop="Childs">
      <VueNestableHandle slot-scope="{ item }" :item="item">
        
        <button class="btn btn-light">
          <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect fill="#007aff" width="100%" height="100%"></rect></svg>
           [ {{ item.menu_id}} ] {{ item.menu_name}}
           </button>
           
      </VueNestableHandle>
    </VueNestable>
  </div>
</template>

<script>
// import ComponentExample from './ComponentExample.vue'
import axios from "axios";

export default {
  components: {
    // ComponentExample
  },

  data() {
    return {
      nestableItems: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:8181/api/v1/menus/find")
      .then(response => (this.nestableItems = response.data.data));
    //   this.nestableItems = [
    //       {
    //         id: 0,
    //         text: 'Andy'
    //       }, {
    //         id: 1,
    //         text: 'Harry',
    //         children: [{
    //           id: 2,
    //           text: 'David'
    //         }]
    //       }, {
    //         id: 3,
    //         text: 'Lisa'
    //       }
    //     ]
  }
};
</script>

<style scoped>
</style>
