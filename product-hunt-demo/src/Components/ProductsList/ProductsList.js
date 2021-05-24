import React from 'react';
import Product from "../Product/Product";
import './ProductsList.css'
import products from "../../Seed/seed";

class ProductsList extends React.Component {
    render() {

        let sorted_products = products.sort((a, b) => (
            b.votes - a.votes
        ))

        return (
            <div className="ProductsListContent">
                <h1>Popular Products</h1>
                <div className="ui unstackable items">
                    {
                        sorted_products.map(product => (
                            <Product
                                key={'product-'+product.id}
                                id={product.id}
                                title={product.title}
                                description={product.description}
                                url={product.url}
                                votes={product.votes}
                                submitterAvatarUrl={product.submitterAvatarUrl}
                                productImageUrl={product.productImageUrl}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default ProductsList;