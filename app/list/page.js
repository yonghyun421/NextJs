
export default function List() {
    let products = ['Tomatoes', 'Pasta', 'Coconut']

    return (
        <div>
            <h2>Products</h2>
            {products.map((product, index) => (
                <div className="food" key={index}>
                    <img src={`/food${index}.png`} alt='product' className="food-img"/>
                    <h4>{product} $40</h4>
                </div>
            ))}
        </div>
    )
}