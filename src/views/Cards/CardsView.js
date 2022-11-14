import React from 'react'
import PropTypes from 'prop-types'
import LoginView from '../Login/LoginView'
import Card from '../../components/Card/Card'

const CardsView = ({ cards }) => {

    return (
        <div className='container mx-auto'>
            <div className="flex flex-wrap justify-left">
                {cards.map((element, index) => {
                    return (
                        <div className='p-3 h-64 w-1/3'>
                            <Card key={index} title={element.name} description={element.specs} />
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

LoginView.PropType = {
    cards: PropTypes.array
}

export default CardsView

