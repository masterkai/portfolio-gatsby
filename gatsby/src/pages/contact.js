import * as React from "react"
import Link from "../components/Link";
import {Title} from "../components/Title";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SEO from "../components/SEO";
import useForm from "../utils/useForm";
import useContact from "../utils/useContact";
import validateEmail from "../utils/validateEmail";

export default function ContactPage() {
  const {values, updateValue} = useForm({
    name: '',
    email: '',
    message: '',
    mapleSyrup:''
  });

  const {loading, error, message, submitOrder} = useContact({
    values
  })

  const isValidEmail = validateEmail(values.email);
  if (message) {
    return <p>{message}</p>
  }
  return (
    <>
      <SEO title={`Contact me Page`} />
      <div style={{paddingTop: '2rem'}}>
        <Link to="/">Go to the main page</Link>
        <Title title={'PINE ME!'}/>
        <Box sx={{mb: 10}}>
          <Typography variant={'body1'} color={'text.secondary'}>
            Want to say "Hey!"? Got something you'd like to ask? New project or opportunity? Want to hire me? Ping me!

            Use the form below. Or, for a quicker response, ping me over on Twitter.

            Alternatively, shoot me an email at neoliukai@outlook.com.

            Prefer a face to face? Schedule a call.
          </Typography>
        </Box>
        <Box
          onSubmit={submitOrder}
          component="form"
          sx={{
            '& > :not(style)': {mt: 3, mb: 3, mr: 'auto', ml: 'auto', width: {xs: '100%'}},
            display: 'flex',
            flexDirection: 'column'
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            disabled={loading}
            id="outlined-name"
            name="name"
            label="Name*"
            value={values.name}
            onChange={updateValue}/>
          <TextField
            disabled={loading}
            error={!isValidEmail}
            helperText={isValidEmail ? '' : "please enter a valid email address"}
            id="outlined-email"
            name="email"
            label="Email*"
            value={values.email}
            onChange={updateValue}/>
          <input
            className='mapleSyrup'
            type="mapleSyrup"
            disabled={loading}
            id="mapleSyrup"
            name="mapleSyrup"
            value={values.mapleSyrup}
            onChange={updateValue}/>
          <TextField
            disabled={loading}
            id="outlined-multiline-flexible"
            label="Message*"
            name="message"
            multiline
            maxRows={4}
            value={values.message}
            onChange={updateValue}
          />
          {error ? <p>Error:{error}</p> : ''}
          <Button disabled={loading} type="submit" variant="contained"
                  size={'large'}>{loading ? 'Sending Message' : 'Send'}</Button>
        </Box>
      </div>
    </>
  )
}
