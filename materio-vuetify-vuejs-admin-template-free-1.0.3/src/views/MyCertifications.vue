<template>
    <div>
        <h2 class="ma-5">
            Add Certifications
        </h2>
        <v-form>
    <v-text-field
      v-model="certificatename"
      label="Certificate-Name"
      outlined
      dense
      placeholder="certificatename"
    ></v-text-field>

    <v-text-field
      v-model="Issued_By"
      label="Issued-by"
      type="text"
      outlined
      dense
      placeholder="CompanyName"
    ></v-text-field>

    <v-text-field
      v-model="Field"
      label="Field"
      outlined
      dense
      type="text"
      placeholder="Field"
    ></v-text-field>


    <v-btn color="primary">
      Save
    </v-btn>
  </v-form>
    </div>
</template>