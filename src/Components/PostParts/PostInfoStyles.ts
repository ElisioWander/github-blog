import styled from 'styled-components'

export const PostInfoSection = styled.section`
  margin-top: -5.0375rem;

  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

  background-color: ${(props) => props.theme['base-profile']};

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
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

        background-color: ${(props) => props.theme['blue-base']};
      }
    }
  }

  h1 {
    margin: 1.25rem 0 0.5rem;

    font-size: 1.5rem;
    line-height: 1.95rem;
  }

  footer {
    display: flex;
    align-items: center;
    gap: 2rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      color: ${(props) => props.theme['base-label']};

      svg {
        width: 1.125rem;
        height: 1.125rem;
      }
    }
  }
`
