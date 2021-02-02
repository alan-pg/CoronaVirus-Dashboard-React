import React, { memo } from 'react'
import { Typography, Button, Box } from '../../../components'
import { CardPanelContentStyled, StyledAvatar } from './style'

const navigatorHasShare = navigator.share

function Panel({ updateAt, data, country }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data

  const textCovid19 = `País: ${country.value} 
  Total de casos: ${cases}
  Novos casos? ${todayCases} 
  Total óbtos: ${deaths} 
  Total óbtos: ${todayDeaths} 
  Recuperados: ${recovered}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://covid19dio.netlify.app/'
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <CardPanelContentStyled>
      <Box display="flex" flexDirection="row" justifyContent="space-between" bgcolor="grey.300" alignItems="center" width="100%">
        <Box>
          <Box p={1} >
            <Typography variant="h5" component="span" color="primary">Corona vírus (COVID19)</Typography>
          </Box>
          <Box p={1} >
            <Typography variant="body2" component="span" color="primary">{updateAt}</Typography>
          </Box>
        </Box>
        <Box p={1} display="flex" flexDirection="row" alignItems="center" width="300px" >
          <Box>
            <StyledAvatar
              width={'50px'}
              height={'50px'}
              alt={`Avatar ${country.value}`}
              src={country.flag}
            />
          </Box>
          <Box ml={5}>
            <Typography variant="h5" component="span" color="primary">{country.label}</Typography>
          </Box>
        </Box>
        <Box p={1} bgcolor="grey.300">
          {navigatorHasShare ? renderShareButton : renderCopyButton}
        </Box>
      </Box>
    </CardPanelContentStyled>

  )
}

export default memo(Panel)