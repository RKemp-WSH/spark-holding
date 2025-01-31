<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { onMounted, onUpdated, ref, watch, computed } from "vue";
import Prism from "prismjs";
// Import the languages you need from Prism.js
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-css";
// ... other languages

interface CodeProps {
  class?: HTMLAttributes["class"];
  language?: string;
  variant?: "default" | "inline";
}

const props = withDefaults(defineProps<CodeProps>(), {
  class: "",
  language: "javascript", // Default to JavaScript
  variant: "default",
});

const codeElement = ref<HTMLElement | null>(null);

const highlightCode = () => {
  if (codeElement.value) {
    Prism.highlightElement(codeElement.value);
  }
};

onMounted(() => {
  highlightCode();
});

onUpdated(() => {
  highlightCode();
});

watch(
  () => props.language,
  () => {
    highlightCode();
  },
);

const codeClasses = computed(() => {
  return props.variant === "inline"
    ? "px-1 rounded"
    : "block w-full overflow-x-auto";
});
</script>

<template>
  <pre
    v-if="props.variant !== 'inline'"
    :class="[props.class, `language-${props.language}`]"
  >
    <code
      ref="codeElement"
      :class="[props.class, `language-${props.language}`]"
    >
      <slot />
    </code>
  </pre>
  <code
    v-else
    ref="codeElement"
    :class="[codeClasses, `language-${props.language}`]"
  >
    <slot />
  </code>
</template>

<style scoped lang="scss">
pre {
  background-color: theme("colors.wsh-gray.800");
  padding: 1rem;
  overflow-x: auto;

  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
    color: white;
    .token {
      color: inherit;
    }
  }
}

code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  color: theme("colors.wsh-gray.800");
  .token {
    color: inherit;
  }
}
</style>