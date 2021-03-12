import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


function Contact() {
    const [state, setState] = useState({
        checkedA: false,
      });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    return (
        <div id='contact'>
            <div className='contact_form'>
                <h2>Contact</h2>
                <div>
                    <form>
                        <TextField label="Email..." variant="outlined" />
                        <TextField label="Name..." variant="outlined" />
                        <textarea placeholder='Subject...'></textarea>
                        <FormControlLabel
                            control={<Checkbox className='checkbox_black' checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                            label='I agree with the "Terms of Service".'
                        />
                        <br></br>
                        <Button type='submit' variant="contained">Submit</Button>
                    </form>
                </div>
            </div>
            <footer>
                    <div className='social_media'>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
            </footer>
        </div>
    )
}

export default Contact;
