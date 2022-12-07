<!-- eslint-disable vue/multi-word-component-names -->

<script setup lang="ts">
defineProps({
  format: {
    type: String,
    default: "A4",
  },
  orientation: {
    type: String,
    default: "portrait",
  },
});
</script>

<template>
  <article :class="`page ${format} ${orientation}`">
    <span v-for="n in 60" v-bind:key="n">Line {{ n }}<br /></span>
  </article>
</template>

<style scoped>
article.page {
  break-inside: avoid;
  break-after: always;
  overflow: hidden;
}

article.page.A4.portrait {
  page: A4-portrait;
}

@page A4-portrait {
  margin: 2cm;
  size: A4 portrait;
}

article.page.A4.landscape {
  page: A4-landscape;
}

@page A4-landscape {
  margin: 2cm;
  size: A4 landscape;
}

@media screen {
  article.page {
    box-shadow: 0 0 0.4cm black;
    box-sizing: border-box;
    margin: 1cm;
  }

  article.page.A4 {
    padding: 2cm;
  }

  article.page.A4.portrait {
    height: 29.7cm;
    width: 21cm;
  }

  article.page.A4.landscape {
    height: 21cm;
    width: 29.7cm;
  }
}
</style>
