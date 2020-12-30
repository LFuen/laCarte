import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import {BrowserRouter} from 'react-router-dom'
import LaCarteContext from '../../context/LaCarteContext'
import MealList from './MealList'



describe(`MealList Component`, () => {
    describe(`Snapshot`, () => {
        it(`renders the UI as expected`, () => {
            const list = renderer.create(<BrowserRouter><MealList/></BrowserRouter>)
                expect(list).toMatchSnapshot()
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
                        <MealList />
                    </LaCarteContext.Provider>                
                </BrowserRouter>,
                div)
            ReactDOM.unmountComponentAtNode(div)
        })
    })
})