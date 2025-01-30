<script setup lang="ts">
import { type HTMLAttributes, ref } from "vue";
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  type TooltipRootProps,
} from "radix-vue";
import { cn } from "@/ts/utilities"; // Use the alias

interface Props extends Omit<TooltipRootProps, "open"> {
  class?: HTMLAttributes["class"];
  content: string;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
}

const props = withDefaults(defineProps<Props>(), {
  class: "",
  side: "top",
  align: "center",
  defaultOpen: false,
  delayDuration: 700,
  disableHoverableContent: false,
  disableClosingTrigger: false,
});

const { content, side, align, ...tooltipRootProps } = props;

const isOpen = ref(props.defaultOpen);

const handleTriggerClick = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <TooltipProvider>
    <TooltipRoot
      v-model:open="isOpen"
      v-bind="tooltipRootProps"
      :disable-closing-trigger="true"
    >
      <TooltipTrigger as="div" @click="handleTriggerClick">
        <slot></slot>
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          :side="side"
          :align="align"
          :class="
            cn(
              'z-50 select-none rounded-md bg-white px-3 py-2 text-sm leading-none text-wsh-navy-500 shadow-md will-change-[transform,opacity]',
              'data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade',
              'data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade',
              'data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade',
              'data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade',
              'w-[300px] max-w-[300px] whitespace-normal break-words',

              props.class,
            )
          "
          :side-offset="5"
        >
          {{ content }}
          <TooltipArrow class="fill-white" :width="8" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
