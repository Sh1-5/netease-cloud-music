import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;

  .content {
    height: 70px;

    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    width: 176px;
    height: 69px;
    background-position: 0 0;

    display: block;
  }

  .select-list {
    line-height: 70px;

    display: flex;

    .select-item {
      position: relative;

      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }
    }
  }
`

export const HeaderRight = styled.div``
