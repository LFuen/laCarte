import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import LaCarteContext from '../../context/LaCarteContext'
import OrderUpdated from './OrderUpdated'



describe(`OrderUpdated Component`, () => {
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
                <BrowserRouter>
                    <LaCarteContext.Provider value={value}>
                        <OrderUpdated />
                    </LaCarteContext.Provider>                
                </BrowserRouter>,
                div)
            ReactDOM.unmountComponentAtNode(div)
        })
    })
})