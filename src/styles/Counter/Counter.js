import { styled } from 'styled-components'

const Wrapper = styled.div`
background-color: #999999;
display: flex;
align-items: center;
justify-content: column;
`;

const MainTag = styled.h1`
color: green;
transform: uppercase;
`;

const InputBox = styled.input`
border: 2px solid black;
width: 80%;
`;

const NewWrapper = styled(Wrapper)`
border: 1px solid red;
border-radius: 20px;
margin-top: 50px;
width: 40%;
padding: 20px;
`

export {Wrapper, MainTag, InputBox, NewWrapper};