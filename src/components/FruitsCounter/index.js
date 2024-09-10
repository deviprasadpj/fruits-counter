import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
    state = {mangoes: 0, bananas: 0}
    eatMango = () => {
        this.setState(prevState => {
            return {mangoes: prevState.mangoes + 1}
        })
    }

    eatBanana = () => {
        this.setState(prevState =>{
        return {bananas: prevState.bananas + 1}
    })
    }
    render(){
        const {mangoes, bananas} = this.state
        return(
            <div className='fruits-counter-bg'>
                <div className='fruits-counter-card'>
                    <h1 className='fruits-counter-heading'> Rami ate <span className='fruits-count'>{mangoes}</span> mangoes <span className='fruits-count'>{bananas}</span> bananas</h1>
                    <div className='fruits-items-con'>
                        <div className='fruits-item-con'>
                            <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="mango-image"/>
                            <button onClick={this.eatMango}> Eat Mango </button>
                        </div>
                        <div className='fruits-item-con'>
                            <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="banana-image"/>
                            <button onClick={this.eatBanana}> Eat Banana </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default FruitsCounter