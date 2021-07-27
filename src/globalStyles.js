import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
     box-sizing: border-box;
     margin: 0;
     padding: 0;
     font-family: 'Source Sans Pro', sans-serif
 }
`;


export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right:50px;


  @media screen and (max-width: 991px){
    padding-left: 30px;
    padding-right:30px
  }
`;



export const Button = styled.button`
border-radius: 4px;
background: ${props => props.primary ? '#4b59f7': '#0467fb'};
padding: ${props => props.big ? '12px 64px' : '10px 20px'};
color: #fff;
font-size: ${props => props.fontBig ? '20px' : '16px'};
outline: none;
cursor: pointer;
border: none;

&:hover{
  transition: all 0.3s ease-out;
  background: #fff;
  background: ${props => props.primary ? '#0467fb' : '#4b59f7'}
}

@media screen and (max-width: 960px){
  width: 100%
}
`;



export default GlobalStyle