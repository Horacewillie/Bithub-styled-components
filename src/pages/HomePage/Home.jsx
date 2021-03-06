import { homeObjFour, homeObjOne, homeObjTwo, homeObjThree } from './Data'
import {InfoSection, Pricing} from '../../components'


const Home = () => {
    return (
        <>
          <InfoSection {...homeObjOne}/>  
          <InfoSection {...homeObjTwo}/> 
          <InfoSection {...homeObjThree}/>
          <Pricing /> 
          <InfoSection {...homeObjFour}/> 
        </>
    )
}

export default Home
