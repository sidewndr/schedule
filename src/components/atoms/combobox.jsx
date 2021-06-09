import React from 'react'
import styled from 'styled-components'
import {colors} from "../../shared/global-styles/colors";
import {media} from "../../shared/media/media";


const ComboboxStl = styled.div`
  width: 50%;
  height: 32px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 20px;

  @media ${media.isTablet} {
    width: 60%;
  }

  @media ${media.isDesktop} {
    width: 70%;
  }
`

const SelectStl = styled.select`
  width: 100%;
  height: 100%;
  display: block;
  appearance: none;
  outline: none;
  padding: 3px 10px;
  background-color: transparent;
  border: ${colors.primary} 1px solid;
  font-size: inherit;
  color: ${colors.primary};
  cursor: pointer;
`

const BlankOptionStl = styled.option`
  display: none;
`


export const Combobox = ({data = [], dataColumn, value, onChange}) => {
  return (
    <ComboboxStl>
      <SelectStl value={value} onChange={onChange} >
        <BlankOptionStl selected>{''}</BlankOptionStl>
        {
          data.map((item, index) => (
            <option key={index} value={item[dataColumn]} >
              {item[dataColumn]}
            </option>
          ))
        }
      </SelectStl>
    </ComboboxStl>
  )
}