<template>
  <div class="hello">
    <div >
      <h1>
        Welcome to Syncbits
      </h1>
      <h2>
        SignUp with Email
      </h2>
      <form>
        <input type="text" placeholder="Email"><br>
        <input type="passsword" placeholder="password">
      </form>
      <button class="primary">
        Signup
      </button>

    </div>

    

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
