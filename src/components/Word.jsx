import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Word.css";
import logo from "../assets/logo-word.png"
import fetchFunction from "../Functions/fetchFunction";

function Word({ loaded }) {
    const [ChefWord, setChefWord] = useState([])
    useEffect(() => {
        fetchFunction('/presentation').then(async (res) => {
            const data = await res.json()
            setChefWord(data)
            loaded()
        })

    }, [])
    return (
        <div className="word-container">
            <div className="presen">
                <img src={logo} className="lrdsi-img" />
                <p className="post">{ChefWord[0]?.post_content}</p>
                <p className="author">{ChefWord[0]?.author_status} {ChefWord[0]?.author}</p>
            </div>
            <span className="pav"></span>
        </div>
    )
}
export default Word;