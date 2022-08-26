import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 864px;

  margin: 0 auto;
  padding: 0 1rem;

  > main {
    margin: 4.5rem 0 3rem;
  }
`

export const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input {
    padding: 0.75rem 1rem;
    border: solid 1px ${(props) => props.theme['base-border']};
    border-radius: 6px;

    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-input']};

    &::placeholder {
      font-weight: 400;
      font-size: 1rem;

      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const PublicationAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.125rem;
  }

  > span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const PostCardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 3rem;

  @media (min-width: 740px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
