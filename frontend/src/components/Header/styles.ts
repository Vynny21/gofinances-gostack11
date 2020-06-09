import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background-color: ${props => props.theme.colors.primary};
  padding: 30px 0;
  transition: background-color 0.5s;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        position: relative;
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:not(.active):hover {
          opacity: 0.6;
        }

        &.active:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -10px;
          background-color: #ff872c;
        }
      }
    }
  }

  .switch:before {
    content: 'Dark:';
    position: absolute;
    top: -3px;
    right: 60px;
    color: #FFF;
  }
`;
