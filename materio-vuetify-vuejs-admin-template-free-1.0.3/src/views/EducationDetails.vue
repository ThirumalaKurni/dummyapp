<template>
    <div>
        <h3>Recent Graduation</h3>
        <v-form>
    <v-text-field
      v-model="collegename"
      label="College-Name"
      outlined
      dense
      placeholder="collegename"
    ></v-text-field>

    <v-text-field
      v-model="yearofpassing"
      label="yearofpassing"
      type="date"
      outlined
      dense
      placeholder="YearofPasing"
    ></v-text-field>

    <v-text-field
      v-model="Grade"
      label="Grade"
      outlined
      dense
      type="number"
      placeholder="Grade"
    ></v-text-field>


    <v-btn color="primary">
      Save
    </v-btn>
  </v-form>


    <h3 class="mt-5">12th Standard</h3>
        <v-form>
    <v-text-field
      v-model="collegename"
      label="College-Name"
      outlined
      dense
      placeholder="collegename"
    ></v-text-field>

    <v-text-field
      v-model="yearofpassing"
      label="yearofpassing"
      type="date"
      outlined
      dense
      placeholder="YearofPasing"
    ></v-text-field>

    <v-text-field
      v-model="Grade"
      label="Grade"
      outlined
      dense
      type="number"
      placeholder="Grade"
    ></v-text-field>


    <v-btn color="primary">
      Save
    </v-btn>
  </v-form>
    <h3 class="mt-5">10th Standard</h3>
        <v-form>
    <v-text-field
      v-model="schoolname"
      label="School-Name"
      outlined
      dense
      placeholder="schoolname"
    ></v-text-field>

    <v-text-field
      v-model="yearofpassing"
      label="yearofpassing"
      type="date"
      outlined
      dense
      placeholder="YearofPasing"
    ></v-text-field>

    <v-text-field
      v-model="Grade"
      label="Grade"
      outlined
      dense
      type="number"
      placeholder="Grade"
    ></v-text-field>


    <v-btn color="primary">
      Save
    </v-btn>
  </v-form>
    </div>
</template>