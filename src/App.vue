<template>
  <container >
    <h1 class="text-3xl"> Class style binding</h1>
    <button @click="Hello = !Hello" class="border border-black bg-black text-white">CLICK HELLO</button>

    
    <h1 :class="{test: Hello}">HELLO1</h1>

    <h1 :class="[{ test: Hello }, Hi, Ho]">hello</h1>

    <h1 :class="[Hello ? test : Hi, Ho]">helloTest</h1>

    <h1 class="text-3xl">Conditional Rendering</h1>
    <h1 v-if="Hello">HELLO V-IF</h1>
    <h1 v-else-if="!Hello">HELLO V-Else</h1>
    <h1 v-show="Hello">V-SHOW </h1>
  </container>

  <container>
    <h1 class="text-3xl">Event handling</h1>
    <button @click="Hey = Hey - 1" class="border border-black bg-black text-white mr-2">CLICK Minus</button>
    <button @click="Hey = Hey + 1" class="border border-black bg-black text-white mr-2">CLICK Plus</button>
    <button @click.once="Hey = Hey + 1" class="border border-black bg-black text-white mr-2">+ ONCE</button>
    <input v-on:keyup.enter="Hey = Hey + 1" class="border border-black bg-black text-white mr-2" />
    <h1 class="mt-2" :class="Ho">Hey : {{ Hey }}</h1>
    <h1 v-if="Hey >= 20" class="text-3xl">Result when Hey >= 20</h1>
  </container>

  <container>
    <h1 class="text-3xl">Input Binding</h1>
    <label for="input1">Input 1 : </label>
    <input type="text" name="input1" v-model.lazy="Input1" class="border border-black pl-2" />
    <h1 class="text-2xl">input Result : {{ Input1 }}</h1>
 
    <h1 class="mt-2">Checkbox v-for</h1>
    <span v-for = "arr in arrs" :key="arr"> <label for="checkbox">{{ arr }} : </label>
    <input type="checkbox" name="checkbox" v-model="checkbox" class="border border-black pl-2 mr-2" :value="arr"/>
    </span>
    <h1 class="text-3xl">{{ checkbox }}</h1>

    <h1 class="mt-2">Select Option v-for</h1>
    <label for ="option">Select : </label>
    <select v-model="select" >
      <option v-for ="arr in arrs" :key="arr" :value="arr">{{ arr }}</option>
    </select>
  <h1 class="text-3xl">{{ select }}</h1>
  </container>

  <container>
    <h1 class="text-3xl">List rendering</h1>
    <span v-for = "(arr,index) in arrs" :key="index">{{ arr }}</span> <br />
    <span v-for = "(n,index) in number" :key="index">{{ n }}</span> <br />
    <span v-for = "value in obj" :key="value">{{ value }} </span><br />
    <span v-for = "(value,name) in obj" :key="value">{{ name }} : {{value}} </span>
  </container>



  <container>
    <h1 class="text-3xl">Router</h1>
   <h1 class="hover:border-black border"> <router-link to="/test">router</router-link></h1>
    <router-view></router-view>
  </container>


  <container >
    <base-card>
    <template v-slot:header>
    hellozz
    </template>
    <template v-slot:default>
     Hi
    </template>
  
  </base-card>

  </container>


  <container id="forTele">
   <scope v-slot="slotGet">
     {{ slotGet.scopeTest }}
   </scope>
  </container>



<container>

<teleportz></teleportz>

</container>

</template>

<script>
import Container from './components/Container.vue'
import BaseCard from './components/BaseCard.vue'
import Scope from './components/Scope.vue'
import Teleportz from './components/Teleportz.vue'
export default {
  name: 'App',
  components: { Container,BaseCard,Scope,Teleportz },
  data() {
    return {

      Hello: false,
      Hi: 'text-red-600',
      Ho: 'text-3xl',
      Testt : 'test',
      Hey: 20,
      Input1: '',
      arrs : [1,2,3],
      number : 20,
      obj : {
        a :'hello',
        b:'hi'
      },
      checkbox : [],
      select : "",
      user : {
firstName : "bot", lastName : "GOGO"

      }
    }
  },

}
</script>

<style>
.test {
  text-decoration: underline;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
