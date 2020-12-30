import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import {BrowserRouter} from 'react-router-dom'
import LaCarteContext from '../../context/LaCarteContext'
import Cuisine from './Cuisine'



describe(`Cuisine Component`, () => {
    describe(`Snapshot`, () => {
        it(`renders the UI as expected`, () => {
            const cuisine = renderer.create(<BrowserRouter><Cuisine/></BrowserRouter>)
                expect(cuisine).toMatchSnapshot()
        })
    })

    describe(`Smoke test`, () => {
        it(`Renders without crashing`, () => {
            
            const div = document.createElement('div');
            const renderer = new ShallowRenderer()

            const value = {
                meals: 'string',
                chefs: 'string',
                cuisines: 'string',
                orders: 'string',
                addOrder: 'string',
                updateOrder: 'string',
                deleteOrder: 'string',
            };

            renderer.render(
                <BrowserRouter>
                    <LaCarteContext.Provider value={value}>
                        <Cuisine />
                    </LaCarteContext.Provider>                
                </BrowserRouter>,
                div)
            ReactDOM.unmountComponentAtNode(div)
        })
    })
})