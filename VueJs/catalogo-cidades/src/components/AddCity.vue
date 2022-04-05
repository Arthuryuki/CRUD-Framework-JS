<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2>Adicionar Cidade</h2>
          <form @submit.prevent="createCity">
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Cidade"
                v-model="name"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Estado"
                v-model="county"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="País"
                v-model="country"
                required
              />
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="checkbox" checked>
                <label class="form-check-label" for="flexRadioDefault1">
                    Capital
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="checkbox">
                <label class="form-check-label" for="flexRadioDefault2">
                    Interior
                </label>  
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" v-model="checkbox">
                <label class="form-check-label" for="flexRadioDefault3">
                    Sertão
                </label>  
            </div><br>
            <button class="btn btn-primary">Salvar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import citiesColRef from "../firebase";
import { addDoc } from "firebase/firestore";
export default {
  data() {
    return {
      name: null,
      county: null,
      country: null,
      checkbox: null
    };
  },
  methods: {
    async createCity() {
      console.log("Creating Document");
      const addedDoc = await addDoc(citiesColRef, this.$data);
      alert("Cidade Criada com Sucesso!");
      console.log(addedDoc);
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>