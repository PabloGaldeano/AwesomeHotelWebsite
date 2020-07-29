<template>
  <b-card
    title="Destination"
    img-src="https://picsum.photos/600/300/?image=18"
    img-alt="Image"
    img-top
    img-width="100"
    tag="article"
    style="max-width: 20rem;"
    class="mb-3 text-center"
  >
    <b-card-text>{{name}} ({{id}})</b-card-text>
  </b-card>
</template>
<script>
export default {
  props: ["name", "id"],
};
</script>