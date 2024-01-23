import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

export default function BasicPagination({ currentPage, setCurrentPage }) {
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Stack spacing={2} style={{marginTop: '20px', textAlign: 'center'}}>
        <Box marginLeft="17px !important">
            <Pagination count={10} page={currentPage} onChange={handleChange} />
        </Box>
    </Stack>
  );
}