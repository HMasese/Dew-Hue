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
                <select id="brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
                    <option value="">Select Brand</option>
                    <option value="almay">almay</option>
                    <option value="alva">alva</option>
                    <option value="anna sui">anna sui</option>
                    <option value="annabelle">annabelle</option>
                    <option value="benefit">benefit</option>
                    <option value="boosh">boosh</option>
                    <option value="burt's bees">burt's bees</option>
                    <option value="butter london">butter london</option>
                    <option value="c'est moi">c'est moi</option>
                    <option value="cargo cosmetics">cargo cosmetics</option>
                    <option value="china glaze">china glaze</option>
                    <option value="clinique">clinique</option>
                    <option value="coastal classic creation">coastal classic creation</option>
                    <option value="colourpop">colourpop</option>
                    <option value="covergirl">covergirl</option>
                    <option value="dalish">dalish</option>
                    <option value="deciem">deciem</option>
                    <option value="dior">dior</option>
                    <option value="dr. hauschka">dr. hauschka</option>
                    <option value="e.l.f.">e.l.f.</option>
                    <option value="essie">essie</option>
                    <option value="fenty">fenty</option>
                    <option value="glossier">glossier</option>
                    <option value="green people">green people</option>
                    <option value="iman">iman</option>
                    <option value="l'oreal">l'oreal</option>
                    <option value="lotus cosmetics usa">lotus cosmetics usa</option>
                    <option value="maia's mineral galaxy">maia's mineral galaxy</option>
                    <option value="marcelle">marcelle</option>
                    <option value="marienatie">marienatie</option>
                    <option value="maybelline">maybelline</option>
                    <option value="milani">milani</option>
                    <option value="mineral fusion">mineral fusion</option>
                    <option value="misa">misa</option>
                    <option value="mistura">mistura</option>
                    <option value="moov">moov</option>
                    <option value="nudus">nudus</option>
                    <option value="nyx">nyx</option>
                    <option value="orly">orly</option>
                    <option value="pacifica">pacifica</option>
                    <option value="penny lane organics">penny lane organics</option>
                    <option value="physicians formula">physicians formula</option>
                    <option value="piggy paint">piggy paint</option>
                    <option value="pure anada">pure anada</option>
                    <option value="rejuva minerals">rejuva minerals</option>
                    <option value="revlon">revlon</option>
                    <option value="sally b's skin yummies">sally b's skin yummies</option>
                    <option value="salon perfect">salon perfect</option>
                    <option value="sante">sante</option>
                    <option value="sinful colours">sinful colours</option>
                    <option value="smashbox">smashbox</option>
                    <option value="stila">stila</option>
                    <option value="suncoat">suncoat</option>
                    <option value="w3llpeople">w3llpeople</option>
                    <option value="wet n wild">wet n wild</option>
                    <option value="zorah">zorah</option>
                    <option value="zorah biocosmetiques">zorah biocosmetiques</option>
                    {/* Add more options as needed */}
                </select>
                <select id="product-type" value={productType} onChange={(e) => setProductType(e.target.value)}>
                    <option value="">Select Product Type</option>
                    <option value="blush">Blush</option>
                    <option value="bronzer">Bronzer</option>
                    <option value="eyebrow">Eyebrow</option>
                    <option value="eyeliner">Eyeliner</option>
                    <option value="eyeshadow">Eyeshadow</option>
                    <option value="foundation">Foundation</option>
                    <option value="lip liner">Lip liner</option>
                    <option value="lipstick">Lipstick</option>
                    <option value="mascara">Mascara</option>
                    <option value="nail polish">Nail polish</option>
                    {/* Add more options as needed */}
                </select>
                <select id="tag" value={tag} onChange={(e) => setTag(e.target.value)}>
                    <option value="">Select Tag</option>
                    <option value="alcohol free">alcohol free</option>
                    <option value="Canadian">Canadian</option>
                    <option value="CertClean">CertClean</option>
                    <option value="Chemical Free">Chemical Free</option>
                    <option value="cruelty free">cruelty free</option>
                    <option value="Dairy Free">Dairy Free</option>
                    <option value="EWG Verified">EWG Verified</option>
                    <option value="EcoCert">EcoCert</option>
                    <option value="Fair Trade">Fair Trade</option>
                    <option value="Gluten Free">Gluten Free</option>
                    <option value="Hypoallergenic">Hypoallergenic</option>
                    <option value="Natural">Natural</option>
                    <option value="No Talc">No Talc</option>
                    <option value="Non-GMO">Non-GMO</option>
                    <option value="Organic">Organic</option>
                    <option value="oil free">oil free</option>
                    <option value="Peanut Free Product">Peanut Free Product</option>
                    <option value="purpicks">purpicks</option>
                    <option value="silicone free">silicone free</option>
                    <option value="Sugar Free">Sugar Free</option>
                    <option value="USDA Organic">USDA Organic</option>
                    <option value="Vegan">Vegan</option>
                    <option value="water free">water free</option>
                    {/* Add more options as needed */}
                </select>
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