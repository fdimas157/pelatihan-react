import Header from "./components/Header";
import "./App.css";

function App() {
  const listProduct = [
    {
      id: 1,
      productName: "Sneakers Converse CTAS",
      productPrice: "Rp. 599.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/2/02-CONVERSE-FFSSBCONA-CONA03576C-Yellow.jpg",
    },
    {
      id: 2,
      productName: "Converse Run Star Motion Canvas",
      productPrice: "Rp. 1.799.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/C/O/CON171546C-1.jpg",
    },
    {
      id: 3,
      productName: "Converse CTAS Construct Colorblock",
      productPrice: "Rp. 1.599.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA03472C-Grey.jpg",
    },
    {
      id: 4,
      productName: "Converse Chuck Taylor All Star",
      productPrice: "Rp. 899.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCON0-CON135251C-Black.jpg",
    },
    {
      id: 5,
      productName: "Converse Unisex Chuck 70 Plus",
      productPrice: "Rp. 1.599.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA02871C-Brown.jpg",
    },
  ];

  const product = listProduct.map((product) => (
    <div
      className="kotak"
      key={product.id}
      onClick={() => {
        return alert(
          "Produk " +
            product.productName +
            " dengan harga " +
            product.productPrice +
            " merupakan produk dengan kualitas terbaik"
        );
      }}
    >
      <img
        key={product.id}
        src={product.urlImage}
        alt="gambar"
        className="gambar-produk"
      />
      <p key={product.id} className="nama-produk">
        {product.productName}
      </p>
      <p key={product.id} className="harga-produk">
        {product.productPrice}
      </p>
    </div>
  ));

  return (
    <>
      <Header />
      <div key={listProduct.id} className="bungkus" >
        {product}
      </div>
    </>
  );
}
export default App;
