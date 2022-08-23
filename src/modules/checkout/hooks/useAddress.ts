import { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { CheckoutContext } from '../../..'
import { slugify } from '../../../utils/string'
import {
  loadCountries,
  getCountryPlusProvinces,
} from '../countriesState/actions'
import { CountryResponse, Province, BrandServicesAddress } from '../types'

export function useAddress(
  defaultValues?: BrandServicesAddress & { email?: string }
) {
  const { t } = useTranslation()

  const { dispatch } = useContext(CheckoutContext)
  const { country, province } = defaultValues || {}

  const useFormMethods = useForm({ defaultValues, mode: 'all' })
  const { clearErrors, setValue, setError, reset } = useFormMethods
  const [selectedCountry, setSelectedCountry] = useState<CountryResponse>()
  const [currentProvinces, setCurrentProvinces] = useState<Province[]>()
  const [countryList, setCountryList] = useState<CountryResponse[] | []>([])

  const handleCountryAlias = (
    countryId: string
  ): { selectedCountryId: string; provinceId: string } => {
    let provinceId = ''
    const splitCode = countryId.split(':')
    const selectedCountryId = splitCode[0]
    setValue('country', selectedCountryId)
    if (splitCode.length > 1) {
      provinceId = countryId
    }
    return { selectedCountryId, provinceId }
  }

  const setSelectedCountryAndGetProvinces = (
    selectedCountryId: string,
    countryList: CountryResponse[],
    provinceId?: string
  ) => {
    const currentCountry = countryList.find(
      (country) => country.id === selectedCountryId
    )

    setSelectedCountry(currentCountry)

    dispatch(getCountryPlusProvinces(selectedCountryId)).then(
      ({ provinces }) => {
        const sortedProvinces = provinces ? sortProvinces(provinces) : undefined
        setCurrentProvinces(sortedProvinces)
        if (provinceId) {
          setValue('province', provinceId)
        }
      }
    )
  }

  const sortProvinces = (provinces: Province[]) => {
    const provincesCopy = [...provinces]

    provincesCopy.sort((first, second) => {
      return first.name.localeCompare(second.name)
    })

    return provincesCopy
  }

  useEffect(() => {
    dispatch(loadCountries()).then((countries) => {
      setCountryList(countries)
      // may be we will save the country that the user selects in the local storage and get it
      // here as the initial selectedCountry when he comes back

      const initialCountryId = country ? country : 'US'

      const { selectedCountryId, provinceId } = handleCountryAlias(
        initialCountryId
      )

      setSelectedCountryAndGetProvinces(
        selectedCountryId,
        countries,
        provinceId ? provinceId : province || undefined
      )
    })
  }, [])

  useEffect(() => {
    if (selectedCountry?.dialCode) {
      setValue('phone_country_code', selectedCountry.dialCode)
    }
  }, [selectedCountry])

  const handleCountryChange = (countryId: string) => {
    clearErrors(['zip', 'province'])
    const { selectedCountryId, provinceId } = handleCountryAlias(countryId)
    setSelectedCountryAndGetProvinces(
      selectedCountryId,
      countryList,
      provinceId
    )
  }

  function validateZip(value: string) {
    let error
    if (!value && selectedCountry?.zipRequired) {
      error = t(
        `checkout:${slugify(selectedCountry?.zipLabel)}-is-required`,
        `${selectedCountry?.zipLabel} is required.`
      )
    }
    return error || true
  }

  function validateProvince(value: string) {
    let error
    if (
      !value &&
      currentProvinces &&
      currentProvinces.length > 0 &&
      selectedCountry
    ) {
      error = t(
        `checkout:${slugify(selectedCountry.provinceLabel)}-is-required`,
        `${selectedCountry?.provinceLabel} is required.`
      )
    }
    return error || true
  }

  return {
    selectedCountry,
    currentProvinces,
    countryList,
    validateProvince,
    validateZip,
    handleCountryChange,
    useFormMethods,
    setError,
    clearErrors,
    resetForm: reset,
    setValue,
  }
}
