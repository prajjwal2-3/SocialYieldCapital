import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Fab from '@mui/material/Fab';
export default function FormDialog() {
    
  const [open, setOpen] = React.useState(false);
   const [query,setquery] = React.useState('')
   const [isloading,setisloading]=React.useState(false)
   const [ans,setans]=React.useState('')
   let data = JSON.stringify({
    "inputText": query
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://wordent-be.vercel.app/sum/askSYC',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
function askSYC(){
    setisloading(true)
    axios.request(config)
.then((response) => {
    setans(JSON.stringify(response.data))
  console.log(JSON.stringify(response.data));
  setisloading(false)
})
.catch((error) => {
  console.log(error);
  setisloading(false)
});

}
  return (
    <React.Fragment>
      <Fab color="primary" className="" onClick={handleClickOpen} aria-label="add">
        <QuestionMarkIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Ask our AI</DialogTitle>
        <DialogContent>
          <DialogContentText>
         Ask our ai any questions about social yield capital. You can ask questions like
         our aim, who we are , what do we do etc.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="question"
            label="Your question"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=>{
                setquery(e.target.value)
            }}
          />
        </DialogContent>
        <DialogContent>
            {ans}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button  onClick={askSYC}>{isloading?'Wait...':'Ask'}</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
