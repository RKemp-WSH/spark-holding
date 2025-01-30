<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

interface CodeProps {
  class?: HTMLAttributes['class'];
  language?: string; // Add a prop for the language
}

const props = withDefaults(defineProps<CodeProps>(), {
  class: '',
  language: 'javascript', // Default to JavaScript
});

</script>

<template>
  <pre><code :class="[props.class, `language-${props.language}`]">
    <slot />
  </code></pre>
</template>

<style scoped lang="scss">
pre {
  background-color: theme("colors.wsh-gray.800");
  padding: 1rem; // Use rem units for padding
  overflow-x: auto; // Add horizontal scroll for long lines

  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; // Use a monospace font
    color: white;
    .token {
        color: inherit;
    }
  }
}
</style>