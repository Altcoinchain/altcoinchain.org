import styled from 'styled-components';

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
        flex-direction: column;
        z-index: +1000;
        flex-grow: 0;
        padding: 1rem;
        background-color: white;
        width: ${(props) => (props.openMenu ? '16rem' : '6.5rem')};
        transition: width 250ms ease-in-out;

        .label {
            opacity: ${(props) => (props.openMenu ? '1' : '0')};
            transition: opacity 250ms ease-in-out;
        }
    }

    > .content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;

        header {
            display: flex;
            flex-grow: 0;
            min-height: 4.625rem;
            align-items: center;
            padding: 0.75rem 2rem;
            background-color: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

            .header {
                &__left {
                    display: flex;
                    flex-grow: 0;
                    &__trigger {
                        cursor: pointer;
                        display: inline-flex;
                        transform: ${(props) =>
                            props.openMenu ? 'rotate(180deg)' : 'rotate(0)'};
                        transition: transform 250ms ease-in-out;
                    }
                }

                &__right {
                    display: flex;
                    flex-grow: 1;
                    justify-content: flex-end;

                    button {
                        position: inherit;
                        background-color: black;
                        transition: background-color 250ms ease-in-out;

                        &:hover {
                            background-color: darkgray;
                        }
                    }
                }
            }
        }

        main {
            flex-grow: 1;
        }

        footer {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-grow: 0;
            min-height: 4.625rem;
            align-items: center;
            padding: 0.75rem 2rem;
            background-color: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            font-size: 2rem;
            a {
                color: black;
                transition: color 250ms ease-in-out;

                &:hover {
                    color: darkgray;
                }
            }
        }
    }
`;
