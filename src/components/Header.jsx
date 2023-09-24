import { Typography, Box } from '@material-ui/core';

function Header() {
  return (
    <Box style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    }}
    >
      <div>Logo</div>
      <div>
        <Typography
          variant="h5"
          style={{
            textAlign: 'center',
            fontWeight: '700',
          }}
        >
          TRINITY JUNIOUR SCHOOL
          <br />
          {' '}
          KAMULI - UGANDA
        </Typography>
        <Typography style={{
          fontWeight: 'bold',
          fontSize: '16px',
        }}
        >
          Tel: +256-752-971-270, +256-752-583-683
        </Typography>
        <div style={{
          textAlign: 'center',
        }}
        >
          Email: trinityjunioursch1@gmail.com
        </div>
      </div>
    </Box>
  );
}

export default Header;
