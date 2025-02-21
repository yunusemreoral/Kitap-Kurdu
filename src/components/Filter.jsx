import { useSearchParams } from "react-router-dom";

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // form gönderildiğinde çalışacak fonksiyon
    const handleSubmit = (e) => {
        // sayfa yenilemesini engelle
        e.preventDefault();

        // ınput içerisindeki değere eriş
        const text = e.target[0].value;

        // url ye geçicelecek parametriyi ayarla
        searchParams.set("search", text);

        // url'e parametre geç
        setSearchParams(searchParams);
    };
    // select dan birdeğer seçildiğinde çalışacak fonksiyon
    const handleChange = (e) => {
        // select alanındaki değere eriş
        const value = e.target.value;

        // bu degeri parametre olarak kullan
        searchParams.set("sort", value);

        // url'e parametre geç
        setSearchParams(searchParams);
    };
    return (
        <div>
            <div className="d-flex justify-content-between mt-4">
                {/* select */}
                <select 
                onChange={handleChange}
                defaultValue="sırala"
                className="form-select w-25"
                >
                    <option disabled>sırala</option>
                    <option defaultValue="a-z">a-z</option>
                    <option value="z-a">z-a</option>
                </select>
                {/* form */}
                <form onSubmit={handleSubmit} className="d-flex gap-2">
                    <input
                    type="text"
                    placeholder="kitap ismi giriniz ..."
                    className="form-control"
                    />
                    <button className="btn btn-primary px-4">Ara</button>
                </form>
            </div>
        </div>
    );
};

export default Filter;