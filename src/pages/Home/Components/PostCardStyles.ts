import styled from 'styled-components'

export const PostCardContent = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  padding: 2rem;
  border: solid 2px transparent;
  border-radius: 10px;

  transition: border 0.1s;

  background-color: ${(props) => props.theme['base-post']};

  &:hover {
    border: solid 2px ${(props) => props.theme['base-label']};
  }

  a {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    cursor: pointer;

    h1 {
      font-size: 1.125rem;
      line-height: 2rem;
      flex: 1;
    }

    > span {
      display: block;

      font-size: 0.75rem;
      line-height: 2.2rem;

      color: ${(props) => props.theme['base-span']};
    }
  }
`
