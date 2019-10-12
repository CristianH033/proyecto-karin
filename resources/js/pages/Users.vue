<template>
  <v-row justify="center" align="center">
    <v-col sm="10" lg="8">
      <h1>Usuarios</h1>
      <v-card class="mx-auto">
        <v-card-title primary-title>
          <v-text-field
            filled
            single-line
            hide-details
            clearable
            rounded
            prepend-inner-icon="mdi-magnify"
            label="Buscar"
          />
        </v-card-title>
        <v-list two-line subheader sub-group rounded>
          <v-subheader>Resultados</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item v-for="user in users" :key="user.id">
              <v-list-item-avatar color="indigo">
                <!-- <v-img :src="''"></v-img> -->
                <span class="white--text">{{ user.name[0] }}</span>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ user.name }}</v-list-item-title>
                <v-list-item-subtitle>
                  <span class="text--primary">{{ user.email }}</span>
                  &mdash; Texto
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import users from "@api/users";
export default {
  name: "Users",
  data: function() {
    return {
      users: []
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      users.fetch().then(response => {
        console.log(response);
        this.users =  response.data.data;
      });
    }
  }
};
</script>

<style>
</style>
