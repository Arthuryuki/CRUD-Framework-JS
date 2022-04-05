<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2>Editar Cidade</h2>
          <form @submit.prevent="updateCity">
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Cidade"
                v-model="cityInfo.name"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Estado"
                v-model="cityInfo.county"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="País"
                v-model="cityInfo.country"
                required
              />
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="cityInfo.checkbox" checked>
                <label class="form-check-label" for="flexRadioDefault1">
                    Capital
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="cityInfo.checkbox">
                <label class="form-check-label" for="flexRadioDefault2">
                    Interior
                </label>  
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" v-model="cityInfo.checkbox">
                <label class="form-check-label" for="flexRadioDefault3">
                    Sertão
                </label>  
            </div>
            <button class="btn btn-primary">Salvar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import citiesColRef from "../firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
  data() {
    return {
      selectedCity: {},
      cityId: null,
      docRef: null,
      cityInfo: {
        name: null,
        county: null,
        country: null,
        checkbox: null
      },
    };
  },
  methods: {
    async getCity() {
      let cityRef = doc(citiesColRef, this.cityId);
      this.docRef = cityRef;
      let city = await getDoc(this.docRef);
      let cityData = city.data();
      this.cityInfo.name = cityData.name;
      this.cityInfo.county = cityData.county;
      this.cityInfo.country = cityData.country;
    },
    async updateCity() {
      await setDoc(this.docRef, this.cityInfo);
      alert(
        `A ciade com ID of ${this.cityId} foi atualizado com sucesso!`
      );
      this.$router.push("/");
    },
  },
  created() {
    let cityId = this.$route.params.cityId;
    this.cityId = cityId;
    this.getCity();
  },
};
</script>

<style>
</style>