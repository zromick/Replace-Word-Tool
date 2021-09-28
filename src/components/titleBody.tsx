import { Grid, Typography, Input, Link } from '@mui/material';

const TitleBody = () => {
  return (
    <Grid item container justifyContent="center" xs={12}>
      <Grid item container justifyContent="center" xs={12}>
        <Typography variant="h3">
          {/* <Input
            color="primary"
            autoFocus
            defaultValue="Replace"
            inputProps={{ style: { fontSize: 45, width: 160 } }}
          /> */}
          {`Replace Word Tool`}
        </Typography>
      </Grid>
      <Grid item container justifyContent="center" xs={12}>
        <Typography>An Experimental Word Replacement Tool By <Link underline='hover' href="https://github.com/zromick">Zac Romick</Link></Typography>
      </Grid>
    </Grid>
  );
}

export default TitleBody;