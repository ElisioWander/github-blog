import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;

  margin-top: -106px;

  padding: 2rem 2.5rem;
  border-radius: 10px;

  background-color: ${(props) => props.theme['base-profile']};

  img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 50%;
  }
`

export const ProfileContent = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 1.5rem;
      font-weight: bold;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      position: relative;

      font-size: 0.75rem;
      font-weight: bold;
      text-transform: uppercase;

      color: ${(props) => props.theme['blue-base']};

      &:hover::after {
        content: '';

        width: 100%;
        height: 2px;

        position: absolute;
        bottom: -4px;
        left: 0;

        background-color: ${(props) => props.theme['blue-base']};
      }
    }
  }

  p {
    line-height: 1.6rem;
    margin: 0.5rem 0 1.5rem;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      color: ${(props) => props.theme['base-subtitle']};

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
