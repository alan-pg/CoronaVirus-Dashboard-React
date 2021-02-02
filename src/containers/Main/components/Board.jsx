import React, { memo } from 'react'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const getValue = (value) => value ? value.toLocaleString('pt-br') : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card value={getValue(cases)} label="Total de casos" color="#FF0000" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#FF0000" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card value={getValue(deaths)} label="Total de óbitos" color="#1C1C1C" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#1C1C1C" />
      </Grid>
      <Grid item xs={12} md={12}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#67C887" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)