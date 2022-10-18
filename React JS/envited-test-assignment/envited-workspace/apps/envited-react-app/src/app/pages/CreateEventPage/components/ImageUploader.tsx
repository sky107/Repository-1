import { Uploader } from 'rsuite';
import CameraRetroIcon from '@rsuite/icons/legacy/CameraRetro';

export const ImageUploader = () => (
  <Uploader multiple={false} listType="picture" action="//jsonplaceholder.typicode.com/posts/">
  
    <button>
      <CameraRetroIcon />
    </button>
   
   
  </Uploader>
);