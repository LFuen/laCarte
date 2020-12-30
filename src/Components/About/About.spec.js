import React from 'react'
import ReactDOM from 'react-dom'
import LaCarteContext from '../../context/LaCarteContext'
import About from './About'



describe(`About Component`, () => {
    describe(`Smoke test`, () => {
        it(`Renders without crashing`, () => {
            
            const div = document.createElement('div');

            const value = {
                meals: 'string',
                chefs: 'string',
                cuisines: 'string',
                orders: 'string',
                addOrder: 'string',
                updateOrder: 'string',
                deleteOrder: 'string',
            };

            ReactDOM.render(
                    <LaCarteContext.Provider value={value}>
                        <About />
                    </LaCarteContext.Provider>,
                div);
            ReactDOM.unmountComponentAtNode(div);
        });
    })
});