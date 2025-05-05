import React from "react";
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from "../../src";
import { product2 } from "../data/products";

describe('ProductImage', () => {

    test('debe de mostrar el componente correctamente con la imagen', () => {

        const wrapper = renderer.create(
            <ProductImage img="./imagePrueba"/>
        )
        
        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    });

    test('debe de mostrar el componente con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
            {
                () => (
                    <ProductImage/>
                )
            }
            </ProductCard>
        )
        
        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    });
})