export const BtnStyle = {
    fontFamily: "moon-get",
    borderRadius: '20px',
    color: "white",
    backgroundColor: '#DB71A2',
    fontSize: '1.2em',
    lineHeight: '1.5em',
padding: '10px 14px 9px 15px',
    "&:hover, &:active": { backgroundColor: "white", color: '#DB71A2' },
  };


  export const TextFieldStyle = {
    backgroundColor: 'white',
    border: '1px solid #DB71A2',
    borderRadius: '6px',
    "& label.Mui-focused": {
      color: "#DB71A2",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#DB71A2",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#DB71A2",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#DB71A2",
      },
      "& .MuiSelect-root": {
        "&.Mui-focused fieldset": {
          borderColor: "#DB71A2",
        },
      },
    },
  };