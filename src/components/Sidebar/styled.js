import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  border-right: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem;
  position: fixed;
  text-align: center;
  width: 20rem;

  ${media.lessThan('large')`
    align-items: flex-start;
    background-color: var(--background);
    border-bottom: 1px solid var(--borders);
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  `}
`