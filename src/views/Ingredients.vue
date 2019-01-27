<template>
  <div>
    <template>
      <v-data-table
        :headers="headers"
        :items="rows"
        item-key="name"
        v-if="rows.length > 0"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-center" v-if="props.item">
            <h3>{{ props.item.name }}</h3>
            <img :src="require(`@/assets/ingredients/${props.item.image}`)">
          </td>

          <td>
            <div class="monsters-scope" v-if="props.item.monsters">
              <div
                class="monsters"
                v-for="(monster, index) in props.item.monsters"
                :key="monster + index"
              >
                <h3>{{ monster.name }}</h3>
                <img :src="require(`@/assets/monsters/${monster.image}`)">
              </div>
            </div>
          </td>
        </template>
      </v-data-table>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { monsters as monstersData } from "../data/Monsters";
import { ingredients as ingredientsData } from "../data/Ingredients";
import { Monster } from "@/models/Monster";
import { Ingredient } from "@/models/Ingredient";

@Component
export default class Ingredients extends Vue {
  ingredients = ingredientsData;
  monsters = monstersData;
  headers = [
    {
      text: "Name",
      value: "name",
      align: "center"
    },
    {
      text: "Monsters",
      value: "monsters",
      align: "center"
    }
  ];

  rows: Ingredient[] = [];

  created() {
    console.log("created");
    this.normalizeData();
  }

  mounted() {
    console.log("mounted");
    this.rows = this.ingredientsData();
  }

  beforeDestroyed() {
    console.log("destroyed");
    this.rows = [];
  }

  // computed
  ingredientsData() {
    return this.ingredients;
  }

  normalizeData() {
    this.ingredients = this.ingredients.filter(
      ingredient => ingredient.type === "rare"
    );
    this.ingredients.forEach(element => {
      if (element.monsters) {
        element.monsters = element.monsters.map(monster => {
          return this.monsters.find(_monster => _monster.name === monster);
        });
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.monsters-scope {
  display: flex !important;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.monsters {
  padding: 10px;
}
.monsters:hover {
  cursor: pointer;
}
</style>
