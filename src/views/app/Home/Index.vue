<template>

  <div v-if="loadActive === true" class="loader_container">
    <div class="loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>

  <div class="container">
    <!--    First Block -->
    <div class="first_block">
      <div class="card">
        <div class="img">
          <img :src="post_1?.image" alt="img">
        </div>
        <div class="desc">
          <h4>{{ post_1?.category }}</h4>
          <h2>{{ post_1?.title }}</h2>
          <div class="text">
            {{ post_1?.description }}
          </div>
          <div class="end">{{ post_1?.time }} <span>Jim Sullivan</span>
            <img src="/images/content/etc/Clock.png" alt="img"> {{ post_1?.time_read }}
            read
          </div>
        </div>
      </div>
      <div class="right_grid">
        <div class="title_grid">
          Our Latest News
        </div>
        <div class="grid_cards">
          <div class="card" v-for="post_1 in posts_1_grid">
            <div class="img">
              <div class="overlay"></div>
              <img :src="post_1?.image" alt="img">
              <div class="desc">
                <h3>{{ post_1?.title }}</h3>
                <p class="date">{{ post_1?.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    Second Block -->
    <div class="second_block">
      <div class="card">
        <div class="img">
          <img :src="post_2?.image" alt="img">
        </div>
        <div class="desc">
          <h4>{{ post_2?.category }}</h4>
          <h2>{{ post_2?.title }}</h2>
          <div class="text">
            {{ post_2?.description }}
          </div>
          <div class="end">{{ post_2?.time }} <span>Jim Sullivan</span>
            <img src="/images/content/etc/Clock.png" alt="img"> {{ post_2?.time_read }}
            read
          </div>
        </div>
      </div>
    </div>
    <!--    Third Block -->
    <div class="third_block">
      <div class="card_grid">
        <div class="card" v-for="post_3 in posts_3">
          <img :src="post_3?.image" alt="img">
          <h4>{{ post_3?.category }}</h4>
          <h2>{{ post_3?.title }}</h2>
          <div class="end">
            {{ post_3?.time }}
            <span>Jim Sullivan </span>
            <img src="/images/content/etc/Clock.png" alt="img">
            {{ post_3?.time_read }} read
          </div>
        </div>
      </div>
      <div v-if="paginate && paginate.total > 6" class="pagination_block">
        <div class="pagination">
          <div class="page_button" v-if="paginate.current_page !== 1"
               @click.prevent="getPostsGrid(paginate.current_page - 1)">
            <div class="number">
              <img src="/images/content/etc/arrow-left.png" alt="img">
            </div>
          </div>
          <template v-for="link in paginate.links">
            <div class="page_button"
                 v-if="Number(link.label) &&
               paginate.current_page - link.label < 2 &&
               paginate.current_page - link.label > -2 ||
               Number(link.label) === 1 ||
               Number(link.label) === paginate.last_page"
                 :class="link.active ? 'active' : ''"
                 @click.prevent="getPostsGrid(link.label)"
            >
              <div class="number">
                {{ link.label }}
              </div>
            </div>

            <div class="dots_page"
                 v-if="Number(link.label) &&
                 paginate.current_page !== 3 &&
                 paginate.current_page - link.label === 2 ||
                 Number(link.label) &&
                 paginate.current_page !== paginate.last_page -2 &&
                 paginate.current_page - link.label === -2"
            >
              <div class="number">
                ...
              </div>
            </div>
          </template>
          <div class="page_button"
               v-if="paginate.current_page !== paginate.last_page"
               @click.prevent="getPostsGrid(paginate.current_page +1)">
            <div class="number">
              <img src="/images/content/etc/arrow-right.png" alt="img">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Index",
  data() {
    return {
      post_1: null,
      posts_1_grid: null,
      post_2: null,
      posts_3: null,
      paginate: null,
      loadActive: false,
    }
  },
  mounted() {
    this.getPostsAll()
    this.getPostsGrid()
  },
  methods: {

    getPostsGrid(page = 1) {
      try {
        axios.get('api/v1/posts_3?page=' + page)
            .then(res => {
              this.posts_3 = res.data.data
              this.paginate = res.data.meta
            })
      } catch (e) {

      }
    },

    async getPostsAll() {
      try {
        this.loadActive = true
        await axios.get('api/v1/posts_grid')
            .then(res => {
              this.post_1 = res.data.post_1
              this.posts_1_grid = res.data.posts_1_grid
              this.post_2 = res.data.post_2
            })
      } catch (e) {

      } finally {
        this.loadActive = false
      }
    }
  },
}
</script>

<style scoped>

</style>