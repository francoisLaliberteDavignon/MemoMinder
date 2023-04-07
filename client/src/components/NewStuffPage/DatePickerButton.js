import { forwardRef } from 'react'
import styled from 'styled-components';

const DatePickerButton = forwardRef(({ value, onClick }, ref) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <Button onClick={handleClick} ref={ref}>
      {value ? value : 'Pick a date'}
    </Button>
  );
});


export default DatePickerButton

const Button = styled.button`
`

