<script lang="ts">
  import type { UserAlamat } from '#lib/type.ts';

    let {data} = $props()
    let hasil: UserAlamat = data.alamat as UserAlamat;
</script>

<div>
    <h1>Nama Alamat: {hasil.nama}</h1>
    <ul>
        <li>
            <span>Long: {hasil.koordinat[0]}</span>
            <span>Lat: {hasil.koordinat[1]}</span>
        </li>
    </ul>
    <h2>Jalan: {hasil.jalan}</h2>
</div>