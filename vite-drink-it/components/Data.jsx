// import { useState } from 'react'


// const [count, setCount] = useState(0)
// const [quote, setQuote] = useState('')
const barNames = ["Carmen", "Baras Backe", "Lion Bar", "BlackElk"];
const barPosition = [[59.346, 18.071], [59.3146, 18.0271], [59.3746, 18.0371], [59.377, 18.0321]];
var barLiked = Array.from({ length: 4 }, () => 0)
const barIds = Array.from(Array(4).keys());
const barCheapestPrice = [39, 42, 49, 49]
const correspondVolume = [40, 40, 50, 50]
const barAddress = [    "Tjärhovsgatan 14, 116 21 Stockholm", 
                        "Götgatan 33, 116 21 Stockholm", 
                        "Sveavägen 74, 113 59 Stockholm",
                        "Sveavägen 61, 113 59 Stockholm" ]

export { barNames, barPosition, barIds, barLiked, barCheapestPrice, correspondVolume, barAddress }