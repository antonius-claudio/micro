<template>
  <section>
    <div>@micro/v-base is mounted!</div>
    <button v-on:click="setNilaiApi">increment</button>
    <div>Nilai: {{nilaiLokal}}</div>
  </section>
</template>

<script>
import { getNilai, setNilai } from "http://localhost:8084/micro-api-gate.js";
export default {
  name: 'App',
  data() {
    return {
      nilaiLokal: 0,
    }
  },
  props: ['props', ],
  methods: {
    async setNilaiApi() {
      const newVal = this.nilaiLokal + 1;
      const newNilai = await setNilai(newVal);
      this.nilaiLokal = newNilai;
    },
    async getNilaiApi() {
      const nilai = await getNilai();
      if (nilai)
        this.nilaiLokal = nilai;
    },
  },
  created() {
    this.getNilaiApi();
    console.log('this', this)
  },
  mounted() {
    console.log('this props', this.props)
  },
}
</script>