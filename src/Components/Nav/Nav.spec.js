import React from 'react'
import ReactDOM from 'react-dom'
import LaCarteContext from '../../context/LaCarteContext'
import Nav from './Nav'



describe(`Nav Component`, () => {
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
                        <Nav />
                    </LaCarteContext.Provider>,
                div);
            ReactDOM.unmountComponentAtNode(div);
        });
    })
});