<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    class?: string;
  }>(),
  {
    class: "",
  },
);
</script>

<template>
  <svg
    :class="props.class"
    width="30"
    height="31"
    viewBox="0 0 30 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Vector 6"
      d="M24.9521 18.9448L14.6326 29.2644L4.31295 18.9448"
      stroke="currentColor"
      stroke-width="2.25"
    />
    <path
      id="Vector 7"
      d="M14.6318 29L14.6318 -8.28176e-07"
      stroke="currentColor"
      stroke-width="2.25"
    />
  </svg>
</template>
