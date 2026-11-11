import { UserAlamat } from "#lib/type.ts";

export function load(){
    return {
        alamat: new UserAlamat("Rumah", 92.222293, 223.333221, "Smea no 33")
    }
}