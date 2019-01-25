<template>
  <div>
    <template>
         <v-tabs fixed-tabs v-model="activeTab">
            <v-tab :key="0">Luxury Worktop</v-tab>
            <v-tab :key="1">Wild Life BBQ</v-tab>
            <v-tab :key="2">Pressure Cooker</v-tab>
            <v-tab :key="3">Beverage Stall</v-tab>
          </v-tabs>

          <v-tabs-items 
           
            class="white elevation-1">
      
            <v-tab-item :key="0" v-if="activeTab === 0">
                <v-data-table 
                  :headers="headers" 
                  :items="rows" 
                  :disable-initial-sort="true"
                  item-key="name"
                  class="elevation-1">
                    <template slot="items" slot-scope="props">
                      <td class="text-xs-center">
                        <h3>{{ props.item.name }}</h3>
                        <img :src="require(`@/assets/recipes/${props.item.image}`)">
                      </td>
<!--
                      <td>
                        <div class="ingredients-scope">
                          <div
                            class="ingredients"
                            v-for="(ingredient, index) in props.item.ingredients"
                            :key="ingredient + index">
                              <h3>{{ ingredient.name }}</h3>
                              <img :src="require(`@/assets/ingredients/${ingredient.image}`)">
                          </div>
                        </div>
                      </td>
                      -->
                    </template>
                  </v-data-table>
              </v-tab-item>

      <v-tab-item :key="1" v-if="activeTab === 1">
        <v-data-table 
          :headers="headers" 
          :items="rows" 
          :disable-initial-sort="true" 
          item-key="name"
          class="elevation-1">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">
            <h3>{{ props.item.name }}</h3>
            <img :src="require(`@/assets/recipes/${props.item.image}`)">
          </td>

<!--
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
          -->
        </template>
      </v-data-table>
      </v-tab-item>

       <v-tab-item :key="2" v-if="activeTab === 2">
        <v-data-table 
          :headers="headers" 
          :items="rows" 
          :disable-initial-sort="true" 
          item-key="name"
          class="elevation-1">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">
            <h3>{{ props.item.name }}</h3>
            <img :src="require(`@/assets/recipes/${props.item.image}`)">
          </td>

<!--
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
          -->
        </template>
      </v-data-table>
      </v-tab-item>

       <v-tab-item :key="3" v-if="activeTab === 3">
        <v-data-table 
          :headers="headers" 
          :items="rows" 
          :disable-initial-sort="true" 
          item-key="name"
          class="elevation-1">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">
            <h3>{{ props.item.name }}</h3>
            <img :src="require(`@/assets/recipes/${props.item.image}`)">
          </td>

<!--
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
          -->
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
  ingredients = ingredientsData;
  recipes = recipesData;
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
  activeTab: number = 3;

  mounted() {
    console.log('active tab: ', this.activeTab);
    this.recipesData(this.adoptType(this.activeTab));
  }

  updated() {
    console.log(this.rows);
  }

  @Watch('activeTab')
  onActiveTabChanged(val: number, oldVal: number) {
    console.log('activetab: ', this.activeTab);
    this.recipesData(this.adoptType(this.activeTab));
  }

  // computed
  recipesData(type: string) {
    let myRecipes = recipesData;

    myRecipes.forEach((element) => {
      if (element.ingredients) {
        console.log(element.ingredients);
        element.ingredients = element.ingredients.map(ingredient => {
          console.log(ingredient)
          this.ingredients.find(_ingredient => _ingredient.name === ingredient)
        }
        );
      } else {
        console.error('error');
      }
    });
    // this.rows = recipes;
    const _recipes = myRecipes.filter(recipe => recipe.type === type);
    this.rows = _recipes;
    this.$forceUpdate();
    console.log('updated: ', _recipes);
    // return _recipes;
  }

  filteredData(type: string) {

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
