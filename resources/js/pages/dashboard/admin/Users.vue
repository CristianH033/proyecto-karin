<template>
  <v-row justify="center" align="center">
    <v-col sm="10" lg="8">
      <v-card class="mx-auto">
        <v-card-title primary-title color="primary">
          <v-text-field
            v-model="search"
            filled
            single-line
            hide-details
            clearable
            rounded
            prepend-inner-icon="mdi-magnify"
            label="Buscar"
            @change="searchByName"
          />
        </v-card-title>
        <v-card-text>
          <v-list two-line subheader sub-group rounded>
            <v-subheader>Resultados</v-subheader>
            <v-list-item-group color="primary">
              <v-list-item v-for="user in users" :key="user.id">
                <v-list-item-avatar color="indigo">
                  <span class="white--text text-capitalize">
                    {{ user.nombre[0] }}
                  </span>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="text-capitalize">
                    {{ user.nombre }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <span class="text--primary">{{ user.email }}</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-pagination
            v-model="meta.current_page"
            :length="meta.last_page"
            @input="onPageChange"
          ></v-pagination>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import users from "@api/users";
export default {
  name: "Users",
  data: () => ({
    search: "",
    params: {},
    users: [],
    links: {},
    meta: {}
  }),
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      users.fetch(this.params).then(response => {
        console.log(response);
        this.users = response.data.data;
        this.links = response.data.links;
        this.meta = response.data.meta;
      });
    },
    onPageChange() {
      this.params.page = this.meta.current_page;
      this.fetchUsers();
    },
    searchByName() {
      this.params.filter = this.search;
      this.fetchUsers();
    }
  }
};
</script>

<style lang="scss" scoped>
// .v-card__title {
//   position: sticky;
//   top: 60px;
//   z-index: 1;
// }

// .theme--dark .v-card__title {
//   background-color: #424242;
//   color: #fff;
// }

// .theme--light .v-card__title {
//   background-color: #fff;
//   color: rgba(0, 0, 0, 0.87);
// }
</style>

<style></style>
