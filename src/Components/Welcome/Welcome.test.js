import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import LaCarteContext from '../../context/LaCarteContext'
import Welcome from './Welcome'



describe(`Welcome Component`, () => {
    describe(`Snapshot`, () => {
        it(`renders the UI as expected`, () => {
            const welcome = renderer.create(<Welcome/>)
                expect(welcome).toMatchSnapshot()
        })
    })

    describe(`Smoke test`, () => {
        it(`Renders without crashing`, () => {
            
            const div = document.createElement('div')

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
                        <Welcome />
                    </LaCarteContext.Provider>,
                div)
            ReactDOM.unmountComponentAtNode(div)
        })
    })
})