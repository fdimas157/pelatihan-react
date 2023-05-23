// 2
const mahasiswa = {
    nama: "Dimas Firmansyah",
    nim: "01022111013",
    email: "fdimas157@gmail.com"
}

// 3
let {nama, nim, email} = mahasiswa;

// 4
console.log(nama);
console.log(nim);
console.log(email);

// 5
let temanGila = ["Rey Bujang", "Wabred"];
let temanStress = ["Ananda", "Ahmet"];
let temanNakal = ["Azriel", "Toyyib"];

// 6
console.log([...temanGila, ...temanStress, ...temanNakal]);