import { homeObjFour,homeObjTwo, homeObjThree } from './Data'
import {InfoSection, Pricing} from '../../components'


const Home = () => {
    return (
        <>
          <InfoSection {...homeObjTwo}/> 
          <InfoSection {...homeObjThree}/>
          <Pricing /> 
          <InfoSection {...homeObjFour}/> 
        </>
    )
}

export default Home
