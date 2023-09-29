import React from 'react'
import axios from 'axios'

export const getPosts = async () => {
    let {data} = await axios("https://jsonplaceholder.typicode.com/posts")
    return data
}

getPosts()


