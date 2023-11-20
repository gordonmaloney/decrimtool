import React, {useState, useEffect} from 'react'
import {MPs} from '../MPs.jsx'
import {
  TextField,
  Button,
  Grid
} from "@mui/material";
import {BtnStyle, TextFieldStyle} from '../Shared.jsx'
import { Email } from './Email.jsx';

export const Landing = () => {

  const [invalidPC, setInvalidPC] = useState(false);
  const [searching, setSearching] = useState(false)
  const [postcode, setPostcode] = useState("");
  const [constituency, setConstituency] = useState('')

 // const [postcode, setPostcode] = useState("EH6 5LD");
 // const [constituency, setConstituency] = useState('Edinburgh North and Leith')


  const fetchPostcodeData = async () => {
    setSearching(true);

    try {
      const uk_response = await fetch(
        `https://api.postcodes.io/postcodes/${postcode}`
      );

      const uk_data = await uk_response.json();
      setConstituency(uk_data.result.parliamentary_constituency);
    } catch {
      setInvalidPC(true);
      setSearching(false);
    }
  };


  //handle target doesn't have twitter/email:
  const [noneFound, setNoneFound] = useState(false);

  useEffect(() => {
    if (
      constituency &&
      MPs.filter((mp) => mp.constituency == constituency).filter(
        (mp) => mp.handle
      ).length == 0
    ) {
      console.log("none found");
      setNoneFound(true);
    }

    if (
      constituency &&
      MPs.filter((mp) => mp.constituency == constituency).filter(
        (mp) => mp.handle
      ).length > 0
    ) {
      setNoneFound(false);
    }
  }, [constituency]);

  return (
    <div>
      
      <div className="landingContainer">
        <center><h1 className="moon">
          WRITE TO YOUR MP
        </h1></center>


{!constituency && <>

There are repeated and ongoing attempts to introduce criminalisation of the purchase of sex (a form of legislation sometimes known as the Nordic Model) across the UK. Similar legislation already exists in Northern Ireland. Most recently, Labour MP Diana Johnson called for amendments to the already troubling Police, Crime, Sentencing and Courts Bill. Johnson is calling for the criminalisation of the purchase of sex and for the websites on which sex workers advertise to be made illegal. While Johnson claims these measures will combat sex trafficking, the evidence suggests otherwise.


<center><h4 className="moon">ENTER YOUR POSTCODE TO START</h4>



<div style={{padding: '1px 0 15px 0'}}>


        <TextField
                      id="postcode"
                      inputProps={{style: {textAlign: "center"}}}
                      InputProps={{style: {borderRadius: '6px'}}}

                      sx={TextFieldStyle}
                      value={postcode}
      onChange={(e) => setPostcode(e.target.value)}
                    />
</div>

<Button sx={BtnStyle}
onClick={() => fetchPostcodeData()}
>START</Button>
</center>
</>}



{constituency && <>
It looks like you live in {constituency}. If that is wrong, <span className="pseudolink" onClick={() => {setPostcode(''); setConstituency('')}}>go back</span>.


<Email constituency={constituency} postcode={postcode}/>
</>}
      </div>

    </div>
  )
}
