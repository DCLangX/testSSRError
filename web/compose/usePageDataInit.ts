import { computed } from 'vue'
import { useStore } from 'vuex'
export default function usePageDataInit (
  storeName: string
) {
  const store = useStore()
  const storeData = computed(() => {
    if (store.state[storeName]) {
      return store.state[storeName]
    } else {
      return {}
    }
  })
  const pageData = computed(() => {
    if (storeData.value?.data) {
      return storeData.value.data
    } else {
      return {}
    }
  })
  return { pageData, storeData }
}
