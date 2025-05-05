import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from '../.'
import { products } from '../src/data/products';

const product = products[0];

const App = () => {
  return (
    <>
      <ProductCard 
        product={product}

        // Patrón StateInitializer
        initialValues={{
            count: 4,
            maxCount: 10
        }}
      >
        {
            ({reset, count, increaseBy, isMaxCountReached, maxCount}) => (
              <>
                <ProductCard.Image/>
                <ProductCard.Title/>
                <ProductCard.Buttons/>

                {/* <button onClick={reset}>Reset</button> */}
                {/* <button onClick={()=>increaseBy(-2)}>-2</button> */}
                {/* Si no se llega al isMaxCount, ocultar */}
                {/* {!isMaxCountReached && <button onClick={()=>increaseBy(+2)} >+2</button>} */}
                
                
                {/* <span>{count} - {maxCount}</span> */}
              </>
            )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
