import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;

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
        padding: 0 19px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/sprite_01.png')});
          background-position: -190px 0;
          top: 21px;
          right: -20px;
        }
      }

      &:hover a,
      a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`

export const HeaderRight = styled.div`
  color: #ccc;
  font-size: 12px;

  display: flex;
  align-items: center;

  position: relative;
  left: -26px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 32px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;
  }

  div {
    cursor: pointer;
  }
`
