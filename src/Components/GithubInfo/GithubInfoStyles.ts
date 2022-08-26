import styled from 'styled-components'

export const InfoContainer = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: ${(props) => props.theme['base-span']};

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${(props) => props.theme['base-label']};
    }
  }

  @media (max-width: 712px) {
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;

    span {
      width: 100%;
      justify-content: flex-start;
    }
  }
`
