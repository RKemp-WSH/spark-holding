<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from "vue"; // Import computed
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

const container = ref<HTMLDivElement>();
const animation = ref<AnimationItem>();

onMounted(() => {
  if (container.value) {
    animation.value = lottie.loadAnimation({
      container: container.value, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/spinner.json", // the path to the animation json
      rendererSettings: {
        className: props.spinnerClass, // CSS class assigned to the animation
      },
    });

    // Set the size of the animation
    animation.value.setSpeed(props.size === "small" ? 0.5 : 1);
    animation.value.setSpeed(props.size === "medium" ? 0.75 : 1);
    animation.value.setSpeed(props.size === "large" ? 1 : 1);
  }
});

onBeforeUnmount(() => {
  if (animation.value) {
    animation.value.destroy();
  }
});

const containerClasses = computed(() => {
  return cn(
    "flex w-full justify-center",
    props.containerClass,
    props.size === "small" ? "h-5 w-5" : "",
    props.size === "medium" ? "h-7 w-7" : "",
    props.size === "large" ? "h-9 w-9" : "",
  );
});
</script>

<template>
  <div
    ref="container"
    :class="containerClasses"
  />
</template>