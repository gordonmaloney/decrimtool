import React, {useState, useEffect} from 'react'
import { Grid, TextField, Button } from '@mui/material'
import { TextFieldStyle, BtnStyle } from '../Shared'
import { MPs } from '../MPs'
import { SendModal } from './SendModal'
import useMediaQuery from "@mui/material/useMediaQuery";
import {ShareDonateModal} from './ShareDonateModal'
import { Template, Links } from '../Message'

export const Email = ({constituency, postcode}) => {
  const Mobile = useMediaQuery("(max-width:900px)");

  const MP = MPs.find(mp => mp.constituency == constituency)


  const [subject, setSubject] = useState("Stop the Nordic Model")

  //randomise SL
  useEffect(() => {
    switch (Math.floor(Math.random()*5)+1) {
      case 1:
        setSubject("Stop the Nordic Model")
        break
      case 2:
        setSubject("The 'Nordic Model' doesn't work")
        break
      case 3:
        setSubject("Decriminalisation makes sex workers safer")
        break
      case 4:
        setSubject("Listen to the evidence and the experts on sex work")
        break
      case 5:
        setSubject("Criminalisation doesn't work")
        break
    }
  }, [])


  const [message, setMessage] = useState(Template)
  const bcc = "test@test.com"
  const [signOff, setSignOff] = useState(`Yours sincerely,\n\n${postcode}`)


  const [attemptSend, setAttemptSend] = useState(false)


    //modals
    const [isSendOpen, setIsSendOpen] = useState(false);
    const onSendClose = () => {
      setIsSendOpen(false);
    };
    const [isShareOpen, setIsShareOpen] = useState(false);
    const onShareClose = () => {
      setIsShareOpen(false);
    };


  //send function
  const handleSend = (prop) => {

    if (prop !== "gmail" && prop !== "yahoo") {
      let sendLink = `mailto:${MP.email}?subject=${subject}&bcc=${bcc}&body=${encodeURIComponent(
        message + '\n\n' + signOff + '\n\n' + Links
      )}`;

      window.open(sendLink);
    }

    if (prop == "gmail") {
      let sendLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${MP.email}?subject=${subject}&bcc=${bcc}&body=${encodeURIComponent(
        message + '\n\n' + signOff + '\n\n' + Links
      )}`;
      window.open(sendLink);
    }

    if (prop == "yahoo") {
      let sendLink = `http://compose.mail.yahoo.com/?To=${MP.email}?Subject=${subject}&bcc=${bcc}&Body=${encodeURIComponent(
        message + '\n\n' + signOff + '\n\n' + Links
      )}`;
      window.open(sendLink);
    }

    onSendClose();
    setIsShareOpen(true);
  };

  return (
    <div style={{marginTop: '10px'}}>
      <Grid container
      spacing={1}
      sx={{display: 'flex', justifyItems: "center", alignItems: "center"}}>

        <Grid item xs={12} sm={2}>
  <span className="label">To:</span>
        </Grid>
        <Grid item xs={12} sm={10}>
        <TextField
                      id="to"
                      fullWidth
                      sx={TextFieldStyle}
                      value={`${MP.name} - ${MP.party}`}
                    />
        </Grid>

        <Grid item xs={12} sm={2}>
  <span className="label">Subject:</span>
        </Grid>
        <Grid item xs={12} sm={10}>
        <TextField
                      id="to"
                      fullWidth
                      sx={TextFieldStyle}
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
          
                    />
        </Grid>



        <Grid item xs={12}>
          <span className="label">
            Your message:
          </span><br/>
          <span>There is a template message here, but you can adapt and personalise it if you'd like</span>
       
          <TextField
                      id="to"
                      fullWidth
                      multiline
                      rows={8}
                      sx={TextFieldStyle}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                    />
        </Grid>



        <Grid item xs={12}>
          <span className="label">
            Your details:
          </span><br/>
          <span>Make sure you include your address, so they know you're a constituent</span>
       
          <TextField
                      id="from"
                      fullWidth
                      multiline

                     
                      rows={3}
                      sx={TextFieldStyle}
                      value={signOff}
                      onChange={e => {setSignOff(e.target.value); setAttemptSend(false)}}
                    />
        </Grid>


        <Grid item xs={12}>
<center> 
  {attemptSend && <div style={{width: '70%', minWidth: '280px', color: 'red', margin: '5px auto'}}>You need to give them some of your details to show you're a real person and a constituent, or your MP will just ignore your message!<br/></div>}
  
       <Button sx={BtnStyle}
            onClick={() => {
              if (signOff == `Yours sincerely,\n\n${postcode}`) {setAttemptSend(true)}
              else {
              setIsSendOpen(true)}}}

            >SEND EMAIL</Button></center>  

        </Grid>
      </Grid>
      

                

      <SendModal
        isOpen={isSendOpen}
        onClose={() => onSendClose()}
        body={
          <p>
            You're almost there. Press the button below to open your{" "}
            Email client, and the message
            will be pre-filled in there for you. Then just hit send in there to
            fire it off.
            <br />{" "}
            <center>
              <Button
                onClick={() => handleSend()}
                style={{ ...BtnStyle, marginTop: "5px" }}
              >
                Send Email
              </Button>
            </center>
            {!Mobile && (
              <>
                <br />
                <br />
                If you use Gmail or Yahoo Mail, you can use these button to send
                the message from your browser:
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button
                    onClick={() => handleSend("gmail")}
                    style={{ ...BtnStyle, marginTop: "5px" }}
                  >
                    Send via Gmail
                  </Button>
                  <Button
                    onClick={() => handleSend("yahoo")}
                    style={{ ...BtnStyle, marginTop: "5px" }}
                  >
                    Send via Yahoo
                  </Button>
                </div>{" "}
              </>
            )}
          </p>
        }
      />

<ShareDonateModal
        isOpen={isShareOpen}
        onClose={() => onShareClose()}
      />
      
      </div>
  )
}
