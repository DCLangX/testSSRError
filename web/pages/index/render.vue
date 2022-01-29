
<template>
  <div>
    <Search />
    <template v-if="pageData">
      <Slider :data="pageData[0].components" />
      <Rectangle :data="pageData[1].components" />
    </template>
    <template v-else>
      <img src="https://gw.alicdn.com/tfs/TB1v.zIE7T2gK0jSZPcXXcKkpXa-128-128.gif" class="loading">
    </template>
    <Button>123</Button>
  </div>
</template>

<script lang="ts">
import { Button } from 'vant'

import { defineComponent } from 'vue'
// import { mapState } from 'vuex'
import Slider from '@/components/slider/index.vue'
import Rectangle from '@/components/rectangle/index.vue'
import Search from '@/components/search/index.vue'
import { testApi1 } from '@/networkApi/pay'
import usePageDataInit from '@/compose/usePageDataInit'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  components: {
    Slider,
    Rectangle,
    Search,
    Button
  },
  setup () {
    const { pageData, storeData } = usePageDataInit('indexStore')
    const router = useRouter()
    const route = useRoute()
    return { pageData, storeData }
  },
  // computed: {
  //   ...mapState({
  //     indexData: state => state.indexStore?.data
  //   })
  // },
  created () {
    testApi1()
  }
})
</script>

<style>
</style>
