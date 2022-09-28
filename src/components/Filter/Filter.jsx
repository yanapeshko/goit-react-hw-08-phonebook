import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { Box, TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    const value = e.currentTarget.value;
    dispatch(setFilter(value));
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-search"
          label="Find contacts by name"
          type="search"
          variant="standard"
          onChange={changeFilter}
        />
      </Box>
    </>
  );
};
