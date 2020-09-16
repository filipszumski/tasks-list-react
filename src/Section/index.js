import React from "react";
import { StyledSection, Header, Title, Body } from "./styled";

const Section = ({ title, extraHeaderContent, body }) => (

    <StyledSection>
        <Header>
            <Title>
                {title}
            </Title>
            {extraHeaderContent}
        </Header>
        <Body>
            {body}
        </Body>
    </StyledSection>
);

export default Section;