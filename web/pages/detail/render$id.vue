
<template>
  <div>
    <Search />
    <template v-if="storeData">
      <Player :data="pageData[0].dataNode" />
      <Brief :data="pageData[1].dataNode" />
      <Recommend :data="pageData[2].dataNode" />
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
import Player from '@/components/player/index.vue'
import Search from '@/components/search/index.vue'
import Brief from '@/components/brief/index.vue'
import Recommend from '@/components/recommend/index.vue'
import usePageDataInit from '@/compose/usePageDataInit'

export default defineComponent({
  components: {
    Player,
    Search,
    Brief,
    Recommend,
    Button
  },
  // computed: {
  //   ...mapState({
  //     detailData: state => state.detailStore?.data
  //   })
  // },
  setup () {
    const { pageData, storeData } = usePageDataInit('detailStore')
    const router = useRouter()
    const route = useRoute()
    return { pageData, storeData }
  }
})
</script>

<style>

</style>
