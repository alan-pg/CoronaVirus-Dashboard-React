import styled from 'styled-components'
import { CardContent, Typography, Avatar } from '../../../components'

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 1.5rem;
`

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 2.5rem;
`

export const CardContentStyled = styled(CardContent)`
 /*  border-left: 8px solid ${({ color }) => color || '#5d78ff'}; */
  background-color: #DCDCDC;
`

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  background-color: rgba(105,105,105, 0.9);
  border-radius: 10px;
  
`

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
`

export const ImgIcon = styled.img`
  width: 20px;
  height: 20px;
`

export const ListCountries = styled.div`
  width: 20%;
  height: 100vh;
  background-color: white;
`

export const ShowData = styled.div`
  width: 80%;
  height: 100vh;
  background-color: red;
`

export const StyledAvatar = styled(Avatar)`
  width: ${({ width }) => width || '30px'};
  height: ${({ height }) => height || '30px'}
`
