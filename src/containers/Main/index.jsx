import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../api'
import Board from './components/Board'
import Panel from './components/Panel'
import VirtualizedList from './components/List'
import COUNTRIES from '../../commons/constants/countries'
import flagBrazil from '../../assets/images/flags/brazil.png'
import { ContainerStyled, ContainerBoard, ShowData, ListCountries } from './style'

function Main() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState({ value: 'brazil', flag: flagBrazil, label: 'Brasil' })
  const [countriesList, setCountriesList] = useState(COUNTRIES)
  const updateAt = new Date().toLocaleString()

  const getCovidData = useCallback((country) => {
    Api.getCountry(country)
      .then(data => setData(data))
  }, [])

  useEffect(() => {
    console.log('useEffect ', country.value)
    getCovidData(country.value)
  }, [getCovidData, country])

  function selectCountry(country) {
    console.log(country)
    const { label, value, flag } = country
    setCountry({ label, value, flag })
  }

  return (
    <ContainerStyled>
      <div className="mb-2">
        <Panel
          data={data}
          updateAt={updateAt}
          country={country}
        />
      </div>
      <ContainerBoard>
        <ListCountries>
          <VirtualizedList countries={countriesList} onClick={selectCountry} />
        </ListCountries>
        <ShowData>
          <Board data={data} onClick={selectCountry} />
        </ShowData>
      </ContainerBoard>
    </ContainerStyled>
  )
}

export default memo(Main)
