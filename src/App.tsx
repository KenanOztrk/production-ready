
import pkg from '../package.json'
import { Typography } from '@mui/material';
import CustomButton from './components/Button/CustomButton';



function App() {

  return (
    <>
    <div>
      Versiyon : {pkg.version}
<Typography variant="h2">
        Merhaba MUI!
      </Typography>
     <CustomButton
        color="primary"
        variant="contained"
        size="large"
        loading={false}
        tooltip="Kaydet"
        startIcon='💾'
        endIcon='✅'
        onClick={() => alert('Dünyanın en iyi butonuna tıkladınız!')}
      >
        Tıklayın
      </CustomButton>   
    </div>
    </>
  )
}

export default App
