import styled, { css } from 'styled-components';

type PageStyledProps = {
    openMenu: boolean;
};
export const PageLayoutStyled = styled.div<PageStyledProps>`
    display: flex;
    position: fixed;
    overflow: hidden;
    height: 100vh;
    width: 100vw;

    > menu {
        display: flex;

        position: absolute;
        top: 0;
        bottom: 0;

        flex-direction: column;
        z-index: +1000;
        flex-grow: 0;
        padding: 0.5rem;
        color: ${(props) => props.theme.main.color};
        background-color: ${(props) => props.theme.main.background};
        width: ${(props) => (props.openMenu ? '100%' : '3rem')};
        transition: width 250ms ease-in-out, background-color 250ms ease-in-out;

        @media (min-width: ${(props) => props.theme.breakpoints.md}) {
            position: relative;
            padding: 1rem;

            width: ${(props) => (props.openMenu ? '16rem' : '6.5rem')};
        }

        .label {
            opacity: ${(props) => (props.openMenu ? '1' : '0')};
            transition: opacity 250ms ease-in-out;
        }
    }

    > .content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding-left: 3rem;

        @media (min-width: ${(props) => props.theme.breakpoints.md}) {
            padding-left: 0;
        }

        header {
            display: flex;
            flex-grow: 0;
            min-height: 4.625rem;
            align-items: center;
            padding: 0.5rem;
            color: ${(props) => props.theme.main.color};
            background-color: ${(props) => props.theme.main.background};
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
                    justify-content: flex-end;

                    button {
                        position: inherit;
                        color: ${(props) => props.theme.main.background};
                        background-color: ${(props) => props.theme.main.color};
                        transition: background-color 250ms ease-in-out;
                        width: auto;
                        max-width: 6rem;

                        &:hover {
                            background-color: darkgray;
                        }

                        @media (min-width: ${(props) =>
                                props.theme.breakpoints.md}) {
                            padding: 0 1rem;
                            max-width: 10rem;
                        }
                    }
                }
            }
        }

        main {
            flex-grow: 1;
            background-color: ${(props) => props.theme.main.background};
            color: ${(props) => props.theme.main.color};
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
            transition: background-color 250ms ease-in-out,
                color 250ms ease-in-out;
        }

        footer {
            display: flex;
            flex-grow: 0;
            justify-content: center;
            gap: 1rem;
            align-items: center;
            padding: 0.5rem;
            background-color: ${(props) => props.theme.main.background};
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            transition: background-color 250ms ease-in-out;

            @media (min-width: ${(props) => props.theme.breakpoints.md}) {
                padding: 0.75rem 2rem;
            }

            a {
                color: ${(props) => props.theme.main.color};
                transition: color 250ms ease-in-out;
                font-size: 1rem;

                &:hover {
                    color: darkgray;
                }

                @media (min-width: ${(props) => props.theme.breakpoints.md}) {
                    font-size: 2rem;
                }
            }
        }
    }
`;
