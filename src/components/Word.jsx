import React, { useEffect, useState } from "react";
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
            <img src={logo} className="lrdsi-img" />
            <div className="pres-and-pav">
                <div className="presen">
                    <p className="post">{ChefWord[0]?.post_content}</p>
                    <p className="author">{ChefWord[0]?.author_status} {ChefWord[0]?.author}</p>
                </div>
                <span className="pav" />
            </div>
        </div>
    )
}
export default Word;