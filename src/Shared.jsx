export const BtnStyle = {
    fontFamily: "moon-get",
    borderRadius: '20px',
    color: "white",
    backgroundColor: '#E91F41',
    fontSize: '1.2em',
    lineHeight: '1.5em',
padding: '10px 14px 9px 15px',
    "&:hover, &:active": { backgroundColor: "white", color: '#E91F41' },
  };


  export const TextFieldStyle = {
    backgroundColor: 'white',
    border: '1px solid #E91F41',
    borderRadius: '6px',
    "& label.Mui-focused": {
      color: "#E91F41",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#E91F41",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#E91F41",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#E91F41",
      },
      "& .MuiSelect-root": {
        "&.Mui-focused fieldset": {
          borderColor: "#E91F41",
        },
      },
    },
  };