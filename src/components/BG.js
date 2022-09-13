import styled from '@emotion/styled'
import theme from '../constants/theme'

const BG = styled('div')`
  background-color: ${({ theme }) => theme.bg};
  padding: ${props => (props.p0 ? 0 : theme.margin.mid)} 0 0;
`

export default BG
