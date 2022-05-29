const inputStyles = {backgroundColor: '#35373B',borderColor:'#585960',borderWidth:'1.5px',borderRadius:'0.3rem',height:'3rem', outline:'none'}
//styles
export const colourStyles = {
        control: styles => ({ ...styles,outline:'nones',borderColor:'#585960',backgroundColor: '#35373B',borderWidth:'1.5px',  marginBottom:'0.5rem' }),
        input: (styles) => ({ ...styles,color:'#dededf',opacity:1}),
        valueContainer: (styles) => ({...styles,}),
        indicatorsContainer: (styles) => ({...styles,...inputStyles}),
        multiValue: (styles) => ({...styles, width:'fit-content'}),
        placeholder: (styles) => ({...styles,opacity:1, color:'#dededf',fontSize:'0.9rem'}),        
      };

      const inputStylesValid = {backgroundColor: '#35373B',borderColor:'#76c893',borderWidth:'1.5px',borderRadius:'0.3rem',height:'3rem', outline:'none'}
      //styles
      export const colourStylesValid = {
              control: styles => ({ ...styles,outline:'nones',borderColor:'#76c893',backgroundColor: '#35373B',borderWidth:'1.5px',  marginBottom:'0.5rem' }),
              input: (styles) => ({ ...styles,color:'#dededf',opacity:1}),
              valueContainer: (styles) => ({...styles,}),
              indicatorsContainer: (styles) => ({...styles,...inputStyles}),
              multiValue: (styles) => ({...styles, width:'fit-content'}),
              placeholder: (styles) => ({...styles,opacity:1, color:'#dededf',fontSize:'0.9rem'}),        
            };
      

// Options
export const options = [
  { value: 'USA', label: 'USA' },
  { value: 'Australia', label: 'Australia' },
  { value: 'New-Zealand', label: 'New-Zealand' },
  { value: 'Canada', label: 'Canada' },
  { value: 'UK', label: 'UK' },
  { value: 'Ireland', label: 'Ireland' },
  { value: 'Germany', label: 'Germany' }, 
]