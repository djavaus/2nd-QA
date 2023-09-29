import React from 'react'
import axios from 'axios'

export const getWorks = async () => {
    let {data} = await axios("https://jsonplaceholder.typicode.com/photos")
    return data
}

getWorks()


