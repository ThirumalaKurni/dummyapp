<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card mx-auto" max-width=374>
          <v-card-title class="d-flex align-center justify-center py-7"> 
         <h2 class="text-2xl font-weight-semibold">
           Welcome to <a href="#">Syncbits</a>
         </h2>
        </v-card-title>
        <v-card-text>
            <p class="mb-2">
            Please <strong>sign-in</strong> to your account and start the adventure
          </p>
        </v-card-text>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="email"
              outlined
              label="Email"
              hide-details
              placeholder="john@example.com"
              class="mb-3"
            ></v-text-field>
            <v-text-field
              v-model="password"
              outlined
              label="Password"
              placeholder="············"
            ></v-text-field>
            <div class="d-flex align-center justify-space-between flex-wrap">
              <v-checkbox
                label="Remember Me"
                hide-details
                class="me-3 mt-1"
              >
              </v-checkbox>
              <a
                href="javascript:void(0)"
                class="mt-1"
              >
                Forgot Password?
              </a>
            </div>
            <v-btn
              block
              color="primary"
              class="mt-6"
            >
              Login
            </v-btn>
          </v-form>
        </v-card-text>
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2">
            New on our platform?
          </span>
            Create an account
        </v-card-text>

      </v-card>
    </div>
  </div>
</template>

<script>

export default({
    setup() {
        
    },
})
</script>
