<template>
  <div class="logo-container">
    <img src="@/assets/logo.png" alt="">
    <!-- <h1 v-if="!isCollapse">{{ $t(systemTitle) }}</h1> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { systemTitle } from '@/config'
export default defineComponent({
  setup() {
    const store = useStore()
    const isCollapse = computed(() => store.state.app.isCollapse)
    return {
      isCollapse,
      systemTitle
    }
  }
})
</script>

<style lang="scss" scoped>
  .logo-container {
    padding: 10px 0;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: var(--system-logo-background);
    h1 {
      font-size: 18px;
      white-space: nowrap;
      color: var(--system-logo-color);
    }
    img{

    }
  }
</style>