// import { useState } from 'react'


// const [count, setCount] = useState(0)
// const [quote, setQuote] = useState('')
const barNames = ["Carmen", "Baras Backe", "Lion's", "BlackElk"];
const barPosition = [[59.346, 18.071], [59.3146, 18.0271], [59.3746, 18.0371], [59.377, 18.0321]];
var barLiked = Array.from({ length: 4 }, () => 0)
const barIds = Array.from(Array(4).keys());

export { barNames, barPosition, barIds, barLiked }