import styled from 'styled-components';

export const PriceTrackerStyled = styled.div`
    display: flex;
    gap: 0.25rem;
    align-items: center;
    height: 38px;
    color: ${(props) => props.theme.color.main.color};
    background-color: ${(props) => props.theme.color.main.background};
    border: 1px solid ${(props) => props.theme.color.main.color};
    border-radius: 0.25rem;
    padding: 0.5rem 0.25rem;
    transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
        border-color 250ms ease-in-out;

    .information {
        .change {
            display: flex;
            align-items: center;
            gap: 0.25rem;

            svg {
                &.up {
                    color: green;
                }

                &.down {
                    color: maroon;
                }
            }

            .percentage {
                line-height: 0.75rem;
                font-size: 0.75rem;
            }
        }
    }
`;
