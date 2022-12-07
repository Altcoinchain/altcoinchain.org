import styled from 'styled-components';
import { ConnectKitButton } from 'connectkit';

export const StyledContentButton = styled.button`
    display: inline-block;
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    z-index: +10000;
    font-family: Verdana, sans-serif;
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    gap: 0.25rem;
    cursor: pointer;
    background-color: #000;
    border: 1px solid #777;
    border-radius: 0.2rem;
    color: #fff;
    width: 8.2rem;
    height: 2.4rem;

    transition: background-color 250ms ease-in-out;

    &:hover {
        background-color: rgba(228, 222, 78, 0.5);
    }
`;

export const StyledContentButtonLabel = styled.div`
    flex-grow: 1;
    text-align: center;
    text-transform: capitalize;
`;
