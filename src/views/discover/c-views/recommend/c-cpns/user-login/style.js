import styled from 'styled-components'

export const UserLoginWrapper = styled.div`
  width: 250px;
  height: 126px;
  background-position: 0 0;

  p {
    width: 205px;
    height: 44px;
    padding: 16px 0;
    box-sizing: content-box;
    margin: 0 auto;
  }

  .login {
    width: 100px;
    height: 31px;
    line-height: 31px;
    background-position: 0 -195px;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    text-align: center;
    margin: 0 auto;

    display: block;

    :hover {
      text-decoration: none;
      background-position: -110px -195px;
    }
  }
`
