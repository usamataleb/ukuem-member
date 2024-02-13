<!-- App.svelte -->
<script>
  import { Router, Route } from "svelte-routing";

  import Auth from "./layouts/Auth.svelte";

    import Admin from "./layouts/Admin.svelte";

  export let url = "";
</script>

<Router {url}>
  <Route path="auth/*auth" component={Auth} />
  <Route path="admin/*admin" component={Admin} />

  <!-- no layout pages -->
  <Route path="/" component={Auth} />

</Router>
