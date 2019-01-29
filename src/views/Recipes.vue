<template>
  <div>
    <template>
      <v-tabs fixed-tabs v-model="activeTab">
        <v-tab :key="0">Luxury Worktop</v-tab>
        <v-tab :key="1">Wild Life BBQ</v-tab>
        <v-tab :key="2">Pressure Cooker</v-tab>
        <v-tab :key="3">Beverage Stall</v-tab>
      </v-tabs>

      <v-tabs-items class="white elevation-1">
        <v-tab-item v-for="i in 4" :value="i" :key="i">
          <v-data-table
            v-if="rows.length > 0"
            :headers="headers"
            :items="rows"
            :disable-initial-sort="true"
            item-key="name"
            :rows-per-page-items="[-1]"
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-center" v-if="props.item">
                <h3>{{ props.item.name }}</h3>
                <img :src="require(`@/assets/recipes/${props.item.image}`)">
              </td>

              <td>
                <div class="ingredients-scope" v-if="props.item.ingredientList">
                  <div
                    class="ingredients"
                    v-for="(ingredient, index) in props.item.ingredientList"
                    :key="ingredient + index"
                  >
                    <h3 v-if="ingredient.name">{{ ingredient.name }}</h3>
                    <img
                      v-if="ingredient.image"
                      :src="require(`@/assets/ingredients/${ingredient.image}`)"
                    >
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
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import { recipes as recipesData } from "../data/Recipes";
import { ingredients as ingredientsData } from "../data/Ingredients";

import { Recipe } from "@/models/Recipe";
import { Ingredient } from "@/models/Ingredient";

@Component
export default class Recipes extends Vue {
  recipes: Recipe[] = [];
  ingredients = ingredientsData;
  normalized: boolean = false;
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
  activeTab: number = 0;

  created() {
    console.log("created");
    this.normalizeData();
  }

  mounted() {
    console.log("mounted");
    this.rows = this.recipesData();
  }

  beforeDestroy() {
    console.log("destroy");
  }

  @Watch("activeTab")
  onActiveTabChanged(val: number, oldVal: number) {
    this.rows = this.recipesData();
  }

  // computed
  recipesData() {
    return this.recipes.filter(
      recipe => recipe.type === this.adoptType(this.activeTab)
    );
  }

  normalizeData() {
    let myRecipes = recipesData;

    myRecipes.forEach(element => {
      if (element.ingredients) {
        element.ingredientList = [];
        element.ingredients.forEach(ingredient => {

          const obj = this.ingredients.find(
              _ingredient => _ingredient.name === ingredient
            );
         
         if (obj) {
            element.ingredientList!.push(obj);
         }
        });
      } else {
        console.error("error");
      }
    });
      this.recipes = myRecipes;
  }

  adoptType(tabId: number) {
    switch (tabId) {
      case 0: {
        return "Luxury Worktop";
      }
      case 1: {
        return "Wild Life BBQ";
      }
      case 2: {
        return "Pressure Cooker";
      }
      case 3: {
        return "Beverage Stall";
      }
      default: {
        return "Luxury Worktop";
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
