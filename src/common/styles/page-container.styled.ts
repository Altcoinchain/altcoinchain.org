import styled, { css } from 'styled-components';

type PageContainerStyledProps = {
    disabled?: boolean;
};
export const PageContainerStyled = styled.div<PageContainerStyledProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 1.5rem;

    h2 {
        margin-bottom: 1rem;
    }

    ${(props) =>
        props.disabled
            ? css`
                  pointer-events: none;
                  opacity: 0.5;
              `
            : ''}
`;
