<script>
  import { Router, Route } from "svelte-routing";

  // components for this layout
  import AdminNavbar from "components/Navbars/AdminNavbar.svelte";
  import Sidebar from "components/Sidebar/Sidebar.svelte";
  import HeaderStats from "components/Headers/HeaderStats.svelte";
  import FooterAdmin from "components/Footers/FooterAdmin.svelte";

  // pages for this layout
  import Dashboard from "views/admin/Dashboard.svelte";
  import Settings from "views/admin/Settings.svelte";
  import Statement from "views/admin/Statement.svelte";
  import Contribution from "../views/admin/Contribution.svelte";
  import Department from "../views/admin/Department.svelte";
  import Registration from "../views/admin/Registration.svelte";
  import Auth from "./Auth.svelte";

  export let location;
</script>

<div>
  <Sidebar {location} />
  <div class="relative md:ml-64 bg-blueGray-100">
    <AdminNavbar />

    {#if !location.href.includes("/admin/department")}
      <HeaderStats />

      {:else}
      <div class="relative bg-slate-500 md:pt-32 pb-16 pt-12">
        <div class="px-4 md:px-10 mx-auto w-full"></div>
      </div>
    {/if}


    <div class="px-4 md:px-10 mx-auto w-full -m-24">
      <Router url="admin">
        <Route path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="settings" component={Settings} />
        <Route path="registration" component={Registration} />
        <Route path="contribution" component={Contribution} />
        <Route path="statement" component={Statement} />
        <Route path="department" component={Department} />
        <Route path="auth" component="{Auth}" />
      </Router>
      <FooterAdmin />
    </div>
  </div>
</div>
