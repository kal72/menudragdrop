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
    //         menu_id: 0,
    //         menu_name: 'test1'
    //       }, {
    //         menu_id: 1,
    //         menu_name: 'test2',
    //         Childs: [{
    //           menu_id: 2,
    //           menu_name: 'David'
    //         }]
    //       }, {
    //         menu_id: 3,
    //         temenu_namext: 'Lisa',
    //       }
    //     ]
  }
};
</script>

<style scoped>
</style>
