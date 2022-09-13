import { rem } from 'polished';
import styled, { css } from 'styled-components';

import colors from 'styles/colors'

export interface TContainer extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    color: keyof typeof colors
    background: keyof typeof colors
}

export const Container = styled.a<TContainer>`
    ${({ theme, color, background }) => css`
        border: none;
        color: ${theme.colors[color]};
        background-color: ${theme.colors[background]};
        font-size: ${rem(16)};
        padding: ${rem(11)} ${rem(15)};
        border-radius: ${rem(4)};
        cursor: pointer;

        :hover {
            transition: ${theme.transition.default};
            opacity: 0.7;
        }

        :active {
            transition: ${theme.transition.fast};
            opacity: 0.4;
        }
    `}
`;
