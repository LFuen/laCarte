import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom';
import LaCarteContext from '../../context/LaCarteContext'
import Nav from './Nav'



describe(`Nav Component`, () => {
    describe(`Snapshot`, () => {
        it('renders the UI as expected', () => {
            const nav = renderer.create(<BrowserRouter><Nav /></BrowserRouter>).toJSON()
                expect(nav).toMatchSnapshot()
        })
    })

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
                        <Nav />
                    </LaCarteContext.Provider>
                </BrowserRouter>,
                div)
            ReactDOM.unmountComponentAtNode(div)
        })
    })
})