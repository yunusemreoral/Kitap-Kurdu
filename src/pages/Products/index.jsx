import { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import api from "../../api";
import Card from "../../components/Card";
import { useSearchParams } from "react-router-dom";

const Products = () => {
    // kitap statei
    const [books, setBooks] = useState([]);

    // url den parametriyi alma
    const [searchParams] = useSearchParams();

    useEffect(() => {
        // parametre
        const params = {
            q: searchParams.get("search"),
            _sort: "title",
            _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",
            // bu projede jsn-server kullandık.bu api bize sıralama yapabilmemiz için iki ade parametre istediğigini süyledi.birincisi hangi değere göre sıralama yapacagımız ikincisi ise nasıl bir sıralama yapacağımız.sıralama noktasında ise asc (ascending [artan] descending [azalan]) seçenekleri sunar.bizde burada bu değerleri parametre olarak geçerek apidan sıralanmış verileri aldık.
        };
        api.get("/books", { params }).then((res) => setBooks(res.data));
    }, [searchParams]);
    // urldeki parametreye baglı olarak apiden veri alabilmek için arama parametresini url e geçtik

    return (
        <div className="container my-5">
            {/* results */}
            {books.length === 0 ? (
                <h3 className="bg-danger p-3 rounded fs-3 w-50 text-nowrap text-center">
                    Kitap Bulunamadı !!
                </h3>
            ) : (
                <h3>{books.length} kitap bulundu </h3>
            )}

            {/* filter */}
            <Filter/>

            {/* cards */}

            <div className="card-container">
                {books.map((book) => (
                    <Card key={book.id} book={book}/>
                ))}
            </div>
        </div>
    );
};

export default Products;