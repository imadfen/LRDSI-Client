import "./Word.css";
import logo from "../assets/logo-word.png"

function Word({ data }) {
    return (
        <div className="word-container">
            <img src={logo} className="lrdsi-img" />
            <div className="pres-and-pav">
                <div className="presen">
                    <p className="post">{data[0]?.post_content}</p>
                    <p className="author">{data[0]?.author_status} {data[0]?.author}</p>
                </div>
                <span className="pav" />
            </div>
        </div>
    )
}
export default Word;