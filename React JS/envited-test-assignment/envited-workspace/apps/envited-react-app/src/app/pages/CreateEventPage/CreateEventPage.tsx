import { Button } from '@envited-workspace/shared-ui';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Drawer } from 'rsuite';
import { Form, ButtonToolbar, Input } from 'rsuite';
import { EventRangePicker } from './components/EventRangePicker';
import { ImageUploader } from './components/ImageUploader';
import './CreatEventPage.scss';
// @ts-ignore
const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

export default function CreateEventPage(props: any) {
  const navigate = useNavigate();
  const { open, setOpen } = props;

  return <>
    <Drawer size="lg" placement='left' open={open} onClose={() => setOpen(false)}>
      <Drawer.Header>
        <Drawer.Title>
          <h6>Let's create a new event</h6>
          <p>Easily host and share events with your friends
            across any social media.</p>
        </Drawer.Title>
        <Drawer.Actions>


        </Drawer.Actions>
      </Drawer.Header>
      <Drawer.Body>

        <Form className='form-container'>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <div>
              <Form.Group controlId="name">
                <Form.ControlLabel>    Event Host Name</Form.ControlLabel>
                <Form.Control name="name" />
                {/* <Form.HelpText>Username is required</Form.HelpText> */}
              </Form.Group>
              <EventRangePicker />
            </div>
            <ImageUploader />
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
            <Form.Group controlId="textarea">
              <Form.ControlLabel>Address</Form.ControlLabel>
              <Form.Control name="textarea" accepter={Textarea} />
            </Form.Group>
            <Form.Group controlId="pincode">
              <Form.ControlLabel>Pin code</Form.ControlLabel>
              <Form.Control name="pincode" />
            </Form.Group>


          </div>


          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Form.Group controlId="pincode">
              <Form.ControlLabel>City</Form.ControlLabel>
              <Form.Control name="pincode" />
            </Form.Group>
            <Form.Group controlId="pincode">
              <Form.ControlLabel>Country</Form.ControlLabel>
              <Form.Control name="pincode" />
            </Form.Group>

          </div>
          <div style={{ textAlign: 'center' }}>


            <Form.Group>

              <Button onClick={() => navigate("/event")}>NEXT</Button>

            </Form.Group>
          </div>
        </Form>
      </Drawer.Body>
    </Drawer>
  </>
}