export default function Meme({img, alt, funcOnClick, upper, bottom}){

    return(
        <>
            <center>
                <button className="duration-150	rounded hover:bg-orange-700 w-52 py-2 mb-10 bg-orange-600 text-white ml-auto mr-auto font-bold" onClick={funcOnClick}>Change image 🎆</button>

                <div className="img-wrapper">
                    <img src={img} alt={alt}></img>

                    <div className="text-wrapper">
                        <h1 className="upper-text">{upper}</h1>
                        <h1 className="bottom-text">{bottom}</h1>
                    </div>
                </div>
            </center>
        </>
    )
}