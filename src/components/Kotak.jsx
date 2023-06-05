import "./Kotak.css"

export default function Kotak(props){
    const list = props
    return(
        <div className="kotak-main">
            <img key={listProduct.id} src={listProduct.urlImage} alt="Gambar" />
            <p key={listProduct.id} className="nama-product">{listProduct.productName}</p>
            <p key={listProduct.id} className="harga-prodct">{listProduct.productPrice}</p>
        </div>
    );
}