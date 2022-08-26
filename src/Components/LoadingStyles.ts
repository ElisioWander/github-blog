import styled from 'styled-components'

export const SpinnerOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(22, 22, 22, 0.8);
`

export const SpinnerContent = styled.div`
  padding: 1.5rem;

  @keyframes go-rotating {
    to {
      transform: rotate(1turn);
    }
  }
  svg {
    font-size: 2.5rem;
    animation: go-rotating 1s infinite;
    color: ${(props) => props.theme['base-title']};
  }
`
