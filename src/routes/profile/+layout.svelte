<script lang="ts">
  import type { LayoutProps } from "../$types";

    const {children}: LayoutProps = $props()
</script>

<ul>
    <li><a href="/profile/user">Home</a></li>
    <li><a href="/profile/wallet">Wallet</a></li>
    <li><a href="/profile/address">Address</a></li>
</ul>

{@render children()}