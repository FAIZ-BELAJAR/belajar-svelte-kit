export class UserProfile {
    public user: string;
    public name: string;
    public email: string;

    constructor(user: string, name: string, email: string){
        this.user = user;
        this.name = name;
        this.email = email;
    }
}

export class UserAlamat {
    public nama: string;
    public koordinat: [number, number];
    public jalan: string;

    constructor(nama: string, long: number, lat: number, jalan: string){
        this.nama = nama;
        this.koordinat = [long, lat]
        this.jalan = jalan
    }
}

export interface Produk {
    id:number;
    name:string;
    description:string;
    price:number;
}