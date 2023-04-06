import styled from 'styled-components'

export default styled.button`
  padding: 8px;
  border: none;
  background: transparent;
  color: var(--gryffindor-gold);
  font-family: serif;
  border: 1px solid var(--gryffindor-gold);
  border-radius: 8px;
  height: 60px;
  font-size: 120%;

  &:disabled {
    color: var(--slytherin-silver);
    border: 1px solid var(--slytherin-silver);
  }
`
