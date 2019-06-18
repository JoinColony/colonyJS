
export default {
  data() {
    return {
      loading: false,
      result: null,
    }
  },
  methods: {
    async create(...args) {
      try {
        this.loading = true
        this.result = await this.request(...args)
      } finally {
        this.loading = false
      }
    },
  },
  computed: {
    msg({
      loading, result, loadingMsg, dataMsg,
    }) {
      if (loading) {
        return `${loadingMsg}...`
      }
      if (result === null || result === undefined) {
        return ''
      }
      return `${dataMsg}: ${result}`
    },
  },
}
