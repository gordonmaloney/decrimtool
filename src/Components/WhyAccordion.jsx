
import React, { useRef } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export const WhyAccordion = () => {
    const scollToRef = useRef();

  return (
  
  <div style={{marginTop: '20px', maxWidth: '100%'}}>
<Accordion sx={{border: '1px solid red', maxWidth: '100%'}}
onChange={(event, ex) => {if (ex) {
    setTimeout(() => {scollToRef.current.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      })}, 150)
}}} >
      <AccordionSummary
       ref={scollToRef}
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography><b>What is the "Nordic Model" and why oppose it?</b></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>

        The partial criminalisation of sex work in the U.K. is dangerous. As more people enter sex work due to the cost of living crisis, fully decriminalising sex work is becoming even more of an urgent necessity.
        <br/>
        <br/>
Despite this, there are repeated and continual attempts to further criminalise sex work in the U.K., by instituting the Nordic Model in Scotland, England and Wales.
<br/>
<br/>

Under the Nordic Model, sex workers are subject to increased instances of violence from both clients and the police, are further removed from access to basic human rights and have very few pathways to justice. Sex workers who work together for safety risk arrest and prosecution, and even their friends, family members and third parties (such as security or drivers) are also criminalised.
<br/>
<br/>

It is imperative for sex workers’ safety and human rights that any attempt to implement the Nordic Model or any increased criminalisation is resisted.
<br/>
<br/>

Sex workers demand decriminalisation because it is the only regulatory framework surrounding sex work that centres our safety and rights.
<br/>
<br/>

<a href="https://decrimnow.org.uk/the-facts/" target="_blank">Read more here.</a>
        </Typography>
      </AccordionDetails>

   
    </Accordion>
    
    </div >
  );
};
