import React from 'react';
import Product from "../Product/Product";
import './ProductsList.css'
import seedProducts from "../../Seed/seed";

class ProductsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.handleProductUpVote = this.handleProductUpVote.bind(this);
    }

    componentDidMount() {
        this.setState({ products: seedProducts} );
    }

    handleProductUpVote(productId) {
        const nextProducts = this.state.products.map(product => {
            if (product.id === productId) {
                let newProduct = { ...product };
                newProduct.votes = newProduct.votes + 1;
                return newProduct;
            } else {
                return product;
            }
        });

        this.setState({ products: nextProducts });
    }

    render() {

        let sorted_products = this.state.products.sort((a, b) => (
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
                                onVote={this.handleProductUpVote}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default ProductsList;