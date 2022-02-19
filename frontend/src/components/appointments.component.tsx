import React from 'react'
import '../App.css';
import { Text, Form, Button, Layout } from 'react-lifesg-design-system';
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

const StyledContainer = styled(Layout.GridContainer)`
    display: grid;
    grid-template-columns: 0 8fr 0;
`;

const appointments = () => {
  return (
    <div>appointments</div>
  )
}

export default appointments;