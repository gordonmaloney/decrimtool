import React, {useState, useEffect} from 'react'
import {MPs} from '../MPs.jsx'
import {
  TextField,
  Button,
  Grid
} from "@mui/material";
import {BtnStyle, TextFieldStyle} from '../Shared.jsx'
import { Email } from './Email.jsx';
import { WhyAccordion } from '../Components/WhyAccordion.jsx';

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


  useEffect(() => {
    if (invalidPC) {setInvalidPC(false)}
  }, [postcode])

  useEffect(() => {
    window.scrollTo(0,0)
  }, [constituency])

  return (
    <div>
      
      <div className="landingContainer">
        <center><h2 className="moon">
          WRITE TO YOUR MP
        </h2></center>


{!constituency && <>
The evidence is clear: criminalisation makes sex workers less safe. Despite this, there are repeated attempts to further criminalise sex work in the U.K. by instituting the 'Nordic Model'.
<br/>
<br/>
Use the tool to send an email to your MP opposing this, and join sex workers’ call for the full decriminalisation of sex work.

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

{invalidPC && <div style={{margin: '0 0 5px 0', color: 'red'}}>It looks like this postcode isn't valid. Please try again.</div>}

<Button sx={BtnStyle}
onClick={() => fetchPostcodeData()}
>START</Button>
</center>

<WhyAccordion />


</>}



{constituency && <>
It looks like you live in {constituency}. If that is wrong, <span className="pseudolink" onClick={() => {setPostcode(''); setConstituency('')}}>go back</span>.


<Email constituency={constituency} postcode={postcode}/>
</>}
      </div>

    </div>
  )
}
