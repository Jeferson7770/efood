import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  padding: 8px;
  border: 1px solid ${colors.rose};
  background-color: ${colors.rose};
  color: ${colors.beige};
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  box-sizing: border-box;
`

export const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-top: 8px;
`

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 1.4;
  margin: 8px 0;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Button = styled.button`
  width: 100%;
  background-color: ${colors.beige};
  color: ${colors.rose};
  border: none;
  padding: 8px;
  cursor: pointer;
  font-weight: bold;

  margin-top: auto;
`
