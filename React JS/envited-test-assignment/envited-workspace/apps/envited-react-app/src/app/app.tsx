// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import {RoutesConfig} from './routes-config';
// import default style
// or 'rsuite/dist/rsuite.min.css'
import '../assets/css/custom-theme.less'
export function App() {
  return (
    <>
      {/* <NxWelcome title="envited-react-app" /> */}
      {/* <div /> */}
      <RoutesConfig/>
      {/* <LandingPage/> */}
    </>
  );
}

export default App;
