import React, {useState, useEffect} from "react";
import Meme from "./meme";
import ArrOfData from "../data/memes-data.js";

export default function Form(){

    const [pImg, setPImg] = useState({});
    const [pAlt, stPAlt] = useState({});
    const [btnClickFirstTime, btnUpdate] = useState(true);
    const [firstChoosenRandomImg, countUpdate] = useState(0);
    const [msg, setMsg] = useState({topText: "Upper text", btmText: "Bottom text"});

    let allApiData = {};
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                for(let k in data){
                    allApiData[k] = data[k];
                }
            })
            .then(() => {
                setPImg(allApiData.data.memes[0].url);
                stPAlt(allApiData.data.memes[0].name);
            });
    }, [])
    
    console.log(allApiData);

    function randImg(){

            if(btnClickFirstTime){

                let objOfdata = ArrOfData[0].data.memes;
                let randImageFromMeme = Math.floor(Math.random() * objOfdata.length) 
                
                let img = objOfdata[randImageFromMeme].url
                let alt = objOfdata[randImageFromMeme].name
                
                countUpdate(randImageFromMeme + 1)
                
                setPImg(img)
                stPAlt(alt)
                
                btnUpdate(false)

            }else{

                let objOfdata = ArrOfData[0].data.memes;

                let nextImageFromPrevImg = firstChoosenRandomImg;

                if (nextImageFromPrevImg >= objOfdata.length) {
                    nextImageFromPrevImg = 0; // Reset to the first image
                }

                let img = objOfdata[nextImageFromPrevImg].url;
                let alt = objOfdata[nextImageFromPrevImg].name;

                countUpdate(nextImageFromPrevImg + 1)
                
                setPImg(img)
                stPAlt(alt)

            }        
    }


    function form(event) {
        setMsg(prevData => {
            return{
                ...prevData,
                [event.target.id]: event.target.value,
            }
        })
    }

    return(
        <>

            <div className="block">
                <div>
                    
                </div>
                <form className="w-full max-w-lg ml-auto mr-auto mt-10">
                    <div className="flex flex-wrap -mx-3 mb-6 px-10">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Text in the top
                        </label>
                        <input onChange={form} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="topText" type="text" placeholder="Knock! Knock!"></input>
                        <p className="text-gray-500 text-xs italic">Write some text here</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Text in the bottom
                        </label>
                        <input onChange={form} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="btmText" type="text" placeholder="Who is there!" />
                        </div>
                    </div>
                </form>

            </div>

            <Meme img={pImg} funcOnClick={randImg} alt={pAlt} upper={msg.topText} bottom={msg.btmText}></Meme>
        </>
    );
} 