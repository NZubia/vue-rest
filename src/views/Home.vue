<template>
  <div class="home mt-5">
    <h1 class="mt-5">Welcome to Restaurant app</h1>
    <h3 class="mt-5">Please choose an option to continue...</h3>

    <b-card-group class="mt-5">
      <b-card
          title="Administration"
          img-src="https://theempathicinvestigation.com/wp-content/uploads/2018/06/5_0019_accounting-alone-application-938965.jpg"
          img-alt="Admin"
          img-top
          v-on:click="goTo('/admin')"
      >
      </b-card>

      <b-card
          title="Restaurant"
          img-src="https://img1.10bestmedia.com/static/img/placeholder-restaurants.jpg"
          img-alt="Rest"
          img-top
          v-on:click="goTo('/rest')"
      >
      </b-card>

      <b-card title="Kitchen"
              img-src="https://as1.ftcdn.net/jpg/01/66/17/98/500_F_166179880_kpUxBlWAv3c6KUMStSSuZ0aNVLWA9d4k.jpg"
              img-alt="Kitchen"
              img-top
              v-on:click="goTo('/kitchen')"
      >
      </b-card>
    </b-card-group>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
}
</script>
