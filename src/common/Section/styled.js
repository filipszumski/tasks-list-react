import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.sectionBackground};
    margin: 10px 0px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
    border-bottom: 3px solid ${({ theme }) => theme.colors.background};
`;

export const Title = styled.h2`
    margin: 0px;
    font-size: 20px;
`;

export const Body = styled.div`
    padding: 20px;
`;