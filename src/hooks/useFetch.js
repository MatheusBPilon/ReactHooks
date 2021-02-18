import axios from 'axios'
import React, { useState, useEffect } from 'react'

export const useFetch = async (url) => {

    console.log('chamou a func')

    let data;
    await axios.get(url).then(res => {
        // console.log('pegou o data')
        // console.log(res.data)
        data = res.data.content;
    }).catch(err => {
        console.log('throw erro')
        console.log(err);
    })

    console.log('return')
    return data

}
