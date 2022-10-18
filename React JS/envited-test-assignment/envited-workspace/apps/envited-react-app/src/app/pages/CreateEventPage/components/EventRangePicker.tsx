import { DatePicker, InputGroup } from 'rsuite';

export const EventRangePicker = () => (<>
    Select the Event timings
  <InputGroup style={{ width: 428 }}>
    
    <DatePicker format="yyyy-MM-dd HH:mm:ss" block appearance="subtle" style={{ width: 230 }} />
    <InputGroup.Addon> - </InputGroup.Addon>
    <DatePicker format="yyyy-MM-dd HH:mm:ss" block appearance="subtle" style={{ width: 230 }} />
  </InputGroup>
  </>);
