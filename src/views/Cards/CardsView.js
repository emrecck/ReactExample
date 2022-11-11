import React from 'react'
import PropTypes from 'prop-types'
import LoginView from '../Login/LoginView'
import Card from '../../components/Card/Card'

const CardsView = ({ cards }) => {

    return (
        <div className=''>
            <div className="flex justify-center">
                {cards.map((element, index) => {
                    return (
                        <div className='p-3 h-64 w-1/4'>
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

