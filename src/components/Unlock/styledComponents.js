// Style your elements here
import styled from 'styled-components'

export const UnlockLockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  min-height: 100vh;
`
export const ImageAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Image = styled.img`
  width: 96px; ;
`
export const Text = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: #e2e8f0;
  margin-top: 24px;
  margin-bottom: 90px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 68px;
    line-height: 1.5;
  }
`
export const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffffff;
  background-color: #06b6d4;
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 90px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    margin-top: 68px;
  }
`
