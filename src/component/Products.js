import React from 'react';

const ProductsLists = () => {
    const Products = [
        { id: 1, name: 'Laptop', price: "$1000", category: "Electronics" },
        { id: 2, name: 'Shoes', price: "$50", category: "Fashion" },
        { id: 3, name: 'Watch', price: "$150", category: "Accessories" },
    ];
    return (
        <div>
            <h2>Products Names</h2>
            <ul>
                {Products.map((product, index) => (
                    <li key={index}>{product.name}</li>
                ))}
            </ul>

            <h2>Product Details</h2>
            <table border={1} style={{borderCollapse: 'collapse', width: '50%'}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {Products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default ProductsLists;