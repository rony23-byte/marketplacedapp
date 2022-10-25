import styled from 'styled-components';

import {Container} from '../../Globalstyles';

export const HistoryOrderContainer = styled(Container)`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 0rem 8rem 6rem;
color: #333333;
${Container};
`;

export const HistoryOrderTitle = styled.h2`
font-size: clamp(2rem, 8.5vw, 5rem);
font-weight: bold;
`;

export const HistoryOrderCardContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
margin-left: -8px;
margin-right: -8px;
width: 100%;
`;

export const HistoryOrderIconContainer = styled.div`
width: 9rem;
height: 9rem;
border-radius: 50%;
border: 2px solid #333;
transition: all .3s ease-out;
margin-top: 2rem;
display: flex;
justify-content: center;
align-items: center;

`;

export const HistoryOrderInput = styled.input`
    border-radius: 3px;
    border: 1px solid #e5e5e5;
    display: block;
    margin: 0 0 1em;
    padding: 10px 20px;
    width: 49%;
  `
