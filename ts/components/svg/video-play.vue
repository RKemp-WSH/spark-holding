<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    class?: string;
  }>(),
  {
    class: "",
  },
);

const themeClass = computed(() => {
  return "bath";
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="117"
    height="117"
    viewBox="0 0 117 117"
    fill="none"
    :class="['base', themeClass, props.class]"
  >
    <circle cx="58.0907" cy="58.0907" r="58.0907" fill="currentColor" />
    <path
      d="M72.3745 58.4912L51.3418 72.3692L51.3418 44.6132L72.3745 58.4912Z"
      fill="currentColor"
    />
  </svg>
</template>

<style scoped lang="scss">
.base {
  width: 72px;
  height: 72px;

  @media (min-width: 768px) {
    width: 117px;
    height: 117px;
  }
}

.bath {
  circle {
    fill: theme("colors.wsh-bath.500");
  }

  path {
    fill: theme("colors.wsh-blue.900");
  }

  &:hover {
    circle {
      fill: theme("colors.wsh-bath-pale.500");
    }

    path {
      fill: theme("colors.wsh-blue.900");
    }
  }
}

.window {
  circle {
    fill: theme("colors.wsh-window.500");
  }

  path {
    fill: theme("colors.white");
  }

  &:hover {
    circle {
      fill: theme("colors.wsh-window-pale.500");
    }

    path {
      fill: theme("colors.wsh-blue.900");
    }
  }
}

.door {
  circle {
    fill: theme("colors.wsh-door.500");
  }

  path {
    fill: theme("colors.white");
  }

  &:hover {
    circle {
      fill: theme("colors.wsh-door-pale.500");
    }

    path {
      fill: theme("colors.wsh-blue.900");
    }
  }
}
</style>