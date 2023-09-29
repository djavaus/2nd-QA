import React from 'react'
import axios from 'axios'

export const getComments = async () => {
    let {data} = await axios("https://jsonplaceholder.typicode.com/comments")
    return data
}

getComments()


