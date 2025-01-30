<script setup lang="ts">
import { AccordionRoot, type AccordionRootProps, type AccordionRootEmits } from "radix-vue";
import { computed } from "vue";

const props = withDefaults(defineProps<AccordionRootProps & {
  type: 'single' | 'multiple';
  collapsible?: boolean;
}>(), {
  type: 'single',
  collapsible: false,
});

const emits = defineEmits<AccordionRootEmits>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { modelValue, defaultValue, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <AccordionRoot
      v-bind="delegatedProps"
      :type="props.type"
      :collapsible="props.collapsible"
      :modelValue="props.modelValue"
      @update:modelValue="emits('update:modelValue', $event)"
  >
    <slot />
  </AccordionRoot>
</template>
