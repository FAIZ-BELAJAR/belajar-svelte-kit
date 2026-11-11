<script lang="ts">
  import type { UserProfile } from "#lib/type.js";

    const {data} = $props()
    const hasil: UserProfile = data.user as UserProfile
</script>

<h1>Nim adalah: {data.nim}</h1>

<h1>username: {hasil.user}</h1>
<h2>nama: {hasil.name}</h2>
<h2>email: {hasil.email}</h2>