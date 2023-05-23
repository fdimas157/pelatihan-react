const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

// 2a
const gabung = () => console.log([...hewanBuas, ...hewanJinak]);

// 2b
const makananKesukaan = () =>{
    let ikan, wortel, beras;
    [ikan, wortel, beras] = hewanJinak;
    console.log("ikan dimakan " + ikan);
    console.log("wortel dimakan " + wortel);
    console.log("beras dimakan " + beras);
}

// 3
makananKesukaan();
const tampil = new Promise(() => {
    setTimeout(gabung, 5000);
});
