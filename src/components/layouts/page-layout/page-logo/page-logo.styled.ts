import styled from 'styled-components';

export const PageLogoStyled = styled.div`
    display: flex;
    align-items: center;
    pointer-events: none;
    margin: 0.5rem 0 0.75rem;
    min-width: 24rem;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        min-width: auto;
        width: 14rem;
        margin: 0;
    }

    svg {
      position: absolute;
        flex-grow: 0;
        width: 2rem;
        height: 2rem;

        @media (min-width: ${(props) => props.theme.breakpoints.md}) {
          position: relative;
            width: 6rem;
            height: 6rem;
        }
    }

    h1 {
        flex-grow: 1;
        color: ${(props) => props.theme.main.color};
        font-size: 1.5rem;
        line-height: 1.5rem;
        font-weight: bolder;
        text-transform: uppercase;
        display: inline-flex;
        justify-content: center;
        text-align: center;
        transition: color 250ms ease-in-out;
    }
`;
