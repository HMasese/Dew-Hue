import { useEffect, useState } from 'react'
import './Skin.css';

const Skin: React.FC = () => {
    const [brand, setBrand] = useState('');
    const [productType, setProductType] = useState('');
    const [tag, setTag] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    const searchProducts = async () => {
        let url = "https://makeup-api.herokuapp.com/api/v1/products.json?";

        if (brand) {
            url += `&brand=${brand}`;
        }
        if (productType) {
            url += `&product_type=${productType}`;
        }
        if (tag) {
            url += `&product_tags=${tag}`;
        }

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Could not fetch Resource");
            }
            const data = await response.json();
            setResults(data.slice(0, 5)); // Display the first 5 products
            setError(null);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Error fetching products. Please try again later.");
            setResults([]);
        }
    };

    return (
        <div>
            <h1>Search Products</h1>
            <div>
                <input
                    type="text"
                    id="brand"
                    placeholder="Brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
                <input
                    type="text"
                    id="product-type"
                    placeholder="Product Type"
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                />
                <input
                    type="text"
                    id="tag"
                    placeholder="Tag"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                />
                <button onClick={searchProducts}>Search</button>
            </div>
            <div id="results">
                {error && <p>{error}</p>}
                {results.length === 0 && !error && <p>No products found.</p>}
                {results.map((product) => (
                    <div key={product.id} className="product">
                        <img src={product.image_link} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p><strong>Brand:</strong> {product.brand}</p>
                        <p><strong>Price:</strong> {product.price}</p>
                        <p><a href={product.product_link} target="_blank" rel="noopener noreferrer">View product</a></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skin;