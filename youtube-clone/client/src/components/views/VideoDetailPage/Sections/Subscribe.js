import React, {useState, useEffect} from 'react'
import Axios from 'axios'

function Subscribe(props) {

    const [SubscribeNumber, setSubscribeNumber] = useState(0)
    const [Subscribed, setSubscribed] = useState(false)

    useEffect(() => {
        let variable = {userTo: props.userTo}
        
        Axios.post('/api/subscribe/subscribeNumber', variable)
            .then( response => {
                if (response.data.success) {
                    setSubscribeNumber(response.data.subscribeNumber)
                } else {
                    alert('Failed to load Subscriber number')
                }
            })

            let subscribedVariable = {userTo: props.userTo, userFrom: props.userFrom}

            Axios.post('/api/subscribe/subscribed', subscribedVariable)
                .then(response => {
                    if (response.data.success) {
                        setSubscribed(response.data.subscribed)
                    } else {
                        alert('Failed to load information')
                    }
                })
    }, [])

    const onSubscribe = () => {
        let subscribedVariable = {
            userTo: props.userTo,
            userFrom: props.userFrom
        }

        if (Subscribed) {
            Axios.post('/api/subscribe/unSubscribe', subscribedVariable)
                .then(response => {
                    if (response.data.success) {
                        setSubscribeNumber(SubscribeNumber - 1)
                        setSubscribed(!Subscribed)
                    } else {
                        alert('Failed to cancel subscribe')
                    }
                })
        } else {
            Axios.post('/api/subscribe/subscribe', subscribedVariable)
                .then(response => {
                    if (response.data.success) {
                        setSubscribeNumber(SubscribeNumber + 1)
                        setSubscribed(!Subscribed)
                    } else {
                        alert('Failed to cancel subscribe')
                    }
                })
        }
    }

    return (
        <div>
            <button 
                style={{
                    backgroundColor: `${Subscribed ? "#AAAAAA" : "#CC0000"}`, borderRadius: "4px",
                    color: "white", padding: "10px 16px",
                    fontWeight: "500", fontSize: "1rem", textTransform: "uppercase"
                }}
                onClick={onSubscribe}
            >
                {SubscribeNumber} {Subscribed ? 'Subscribed' : 'Subscribe'}
            </button>
        </div>
    )
}

export default Subscribe
