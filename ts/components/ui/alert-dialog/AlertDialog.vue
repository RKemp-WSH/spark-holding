<script setup lang="ts">
import {
  type AlertDialogEmits,
  type AlertDialogProps,
  AlertDialogRoot,
  useForwardPropsEmits,
} from "radix-vue";
import { ref, watch, onMounted } from 'vue';

const props = withDefaults(defineProps<AlertDialogProps & {
  open?: boolean;
  defaultOpen?: boolean;
}>(), {
  open: undefined,
  defaultOpen: false
});

const emits = defineEmits<AlertDialogEmits & {
  'update:open': [value: boolean]
}>();

const forwarded = useForwardPropsEmits(props, emits);

const isOpen = ref<boolean>(props.defaultOpen);

watch(() => props.open, (newOpen) => {
  isOpen.value = newOpen;
});

onMounted(() => {
  isOpen.value = props.open;
})
</script>

<template>
  <AlertDialogRoot v-bind="{ ...forwarded, open: isOpen }" @update:open="(value) => emits('update:open', value)">
    <slot>
      <button>Open AlertDialog</button>
    </slot>
  </AlertDialogRoot>
</template>