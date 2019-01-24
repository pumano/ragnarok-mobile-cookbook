<template>
  <div>
    <template>
         <v-tabs fixed-tabs v-model="tabs">
    <v-tab>
      Luxury Worktop
    </v-tab>
    <v-tab>
      Wild Life BBQ
    </v-tab>
    <v-tab>
      Pressure Cooker
    </v-tab>
    <v-tab>
      Beverage Stall
    </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs" class="white elevation-1">
      <v-tab-item>
        <v-data-table :headers="headers" :items="rows" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">
            <h3>{{ props.item.name }}</h3>
            <img :src="require(`@/assets/recipes/${props.item.image}`)">
          </td>

          <td>
            <div class="ingredients-scope">
              <div
                class="ingredients"
                v-for="(ingredient, index) in props.item.ingredients"
                :key="ingredient + index"
              >
                <h3>{{ ingredient.name }}</h3>
                <img :src="require(`@/assets/ingredients/${ingredient.image}`)">
              </div>
            </div>
          </td>
        </template>
      </v-data-table>
      </v-tab-item>
    </v-tabs-items>

      
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { recipes } from "../data/Recipes";
import { ingredients } from "../data/Ingredients";

import { Recipe } from "@/models/Recipe";
import { Ingredient } from "@/models/Ingredient";

@Component
export default class Recipes extends Vue {
  headers = [
    {
      text: "Name",
      value: "name",
      align: "center"
    },
    {
      text: "Ingredients",
      value: "ingredients",
      align: "center"
    }
  ];

  rows: Recipe[] = [];
  tabs = 0;

  mounted() {
    this.recipesData(this.adoptType(this.tabs));
  }

  // computed
  recipesData(type: string) {
    recipes.forEach(element => {
      if (element.ingredients) {
        element.ingredients = element.ingredients.map(ingredient =>
          ingredients.find(_ingredient => _ingredient.name === ingredient)
        );
      }
    });
    const _recipes = recipes.filter(recipe => recipe.type === type);
    this.rows = _recipes;
    console.log(this.rows);
    return recipes;
  }

  adoptType(tabId: number) {
    switch(tabId) {
      case 0: { 
      return 'Luxury Worktop';
      }
      case 1: {
        return 'Wild Life BBQ';
      }
      case 2: {
        return 'Pressure Cooker';
      }
      case 3: {
        return 'Beverage Stall';
      }
      default: {
        return 'Luxury Worktop';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ingredients-scope {
  display: flex !important;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.ingredients {
  padding: 10px;
}
.ingredients:hover {
  cursor: pointer;
}
</style>
