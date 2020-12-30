import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import LaCarteContext from '../../context/LaCarteContext'
import Footer from './Footer'



describe(`Footer Component`, () => {
    describe(`Snapshot`, () => {
        it('renders the UI as expected', () => {
            const foot = renderer.create(<Footer />).toJSON()
            expect(foot).toMatchSnapshot()
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
                        <Footer />
                    </LaCarteContext.Provider>,
                div)
            ReactDOM.unmountComponentAtNode(div)
        })
    })
})