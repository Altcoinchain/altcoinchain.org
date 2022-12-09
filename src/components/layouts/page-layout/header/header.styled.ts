import styled, { css } from 'styled-components';
import { PageDefaultProps } from '@/components/layouts/page-layout/common/types';

export const HeaderStyled = styled.header<PageDefaultProps>`
    display: flex;
    flex-grow: 0;
    min-height: 4.625rem;
    align-items: center;
    padding: 0.5rem;
    color: ${(props) => props.theme.color.main.color};
    background-color: ${(props) => props.theme.color.main.background};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    transition: background-color 250ms ease-in-out;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        padding: 0.75rem 2rem;
    }

    .header {
        &__left {
            display: flex;
            flex-grow: 0;
            &__trigger {
                z-index: +1000;
                cursor: pointer;
                display: inline-flex;
                transform: ${(props) =>
                    props.openMenu ? 'rotate(180deg)' : 'rotate(0)'};
                transition: transform 250ms ease-in-out;

                ${(props) =>
                    props.openMenu
                        ? css`
                              position: absolute;
                              right: 1rem;
                              top: 1rem;

                              @media (min-width: ${(props) =>
                                      props.theme.breakpoints.md}) {
                                  position: relative;
                                  right: auto;
                                  top: auto;
                              }
                          `
                        : ``}
            }
        }

        &__right {
            display: flex;
            flex-grow: 1;
            gap: 1rem;
            justify-content: flex-end;

            button {
                position: inherit;
                color: ${(props) => props.theme.color.main.background};
                background-color: ${(props) => props.theme.color.main.color};
                transition: color 250ms ease-in-out,
                    background-color 250ms ease-in-out;
                width: auto;
                max-width: 6rem;

                &:hover {
                    background-color: darkgray;
                }

                @media (min-width: ${(props) => props.theme.breakpoints.md}) {
                    padding: 0 1rem;
                    max-width: 10rem;
                }
            }
        }
    }
`;
