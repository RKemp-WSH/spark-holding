<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import lottie, { type AnimationItem } from "lottie-web";
import { cn } from "@/ts/utilities";

const props = withDefaults(
  defineProps<{
    containerClass?: string;
    spinnerClass?: string;
    size?: "small" | "medium" | "large";
  }>(),
  {
    containerClass: "",
    spinnerClass: "",
    size: "medium",
  },
);

const container = ref<HTMLDivElement | null>(null);
const animation = ref<AnimationItem>();

onMounted(() => {
  if (container.value) {
    animation.value = lottie.loadAnimation({
      container: container.value,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/spinner.json", // Ensure this path is correct
      rendererSettings: {
        className: props.spinnerClass,
      },
    });

    // Set animation speed based on size
    if (animation.value) {
      switch (props.size) {
        case "small":
          animation.value.setSpeed(0.5);
          break;
        case "medium":
          animation.value.setSpeed(0.75);
          break;
        case "large":
          animation.value.setSpeed(1);
          break;
      }
    }
  }
});

onBeforeUnmount(() => {
  animation.value?.destroy();
});

const containerClasses = computed(() => {
  let sizeClass = "";
  switch (props.size) {
    case "small":
      sizeClass = "h-5 w-5";
      break;
    case "medium":
      sizeClass = "h-7 w-7";
      break;
    case "large":
      sizeClass = "h-9 w-9";
      break;
  }

  return cn("flex w-full justify-center", props.containerClass, sizeClass);
});
</script>

<template>
  <div ref="container" :class="containerClasses" />
</template>