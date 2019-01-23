<template>
  <a-table :columns="columns" :dataSource="ingredientsData">
    <div slot="name" slot-scope="text">
      {{ text }}
      
    </div>
    <div slot="image" slot-scope="image">
      <img :src="require(`@/assets/ingredients/${image}`)"> 
    </div>
    <div class="monsters-scope" slot="monsters" slot-scope="monsters">
      <div class="monsters" v-for="(monster, index) in monsters" :key="monster + index">
          <h3>{{ monster.name }}</h3>
          <img :src="require(`@/assets/monsters/${monster.image}`)">
      </div>
    </div>
  </a-table>
</template>

<script lang="ts">
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    scopedSlots: { customRender: "image" }
  },
  {
    title: "Monsters",
    dataIndex: "monsters",
    key: "monsters",
    scopedSlots: { customRender: "monsters" }
  }
];

import { Component, Prop, Vue } from "vue-property-decorator";
import { Table } from "ant-design-vue";

import { monsters as monstersData } from "../data/Monsters";
import { ingredients } from "../data/Ingredients";
import { Monster } from "@/models/Monster";

@Component
export default class Ingredients extends Vue {
  public data() {
    return {
      columns
    };
  }

  // computed
  get ingredientsData() {
    ingredients.forEach(element => {
      if (element.monsters) {
        element.monsters = element.monsters.map(monster =>
          monstersData.find(_monster => _monster.name === monster)
        );
      }
    });
    console.log(ingredients);
    return ingredients;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.monsters-scope {
  display: flex !important;
  flex-direction: row;
}
.monsters {
  padding: 10px;
}
.monsters:hover {
  cursor: pointer;
}
</style>
