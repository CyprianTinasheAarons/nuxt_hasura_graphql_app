import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

// create a provider
const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: "https://cyprianaaronsapp.herokuapp.com/v1/graphql",
  }),
});

Vue.use(VueApollo, gql);

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  router,
  render: (h) => h(App),
}).$mount("#app");
