import styled from 'styled-components'

export const ThemeRankingWrapper = styled.div`
  flex: 1;

  .header {
    height: 100px;
    margin: 20px 0 0 20px;

    display: flex;

    .image {
      width: 80px;
      height: 80px;

      position: relative;

      img {
        width: 80px;
        height: 80px;
      }
    }

    .info {
      margin: 5px 0 0 10px;

      a {
        font-size: 14px;
        font-weight: 700;
        color: #333;
      }

      .btn {
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
        text-indent: -9999px;

        display: inline-block;
      }

      .play {
        background-position: -267px -205px;
      }

      .favor {
        background-position: -300px -205px;
      }
    }
  }

  .list {
    .list-item {
      height: 32px;

      display: flex;
      align-items: center;

      position: relative;

      :nth-child(-n + 3) .rank {
        color: #c10d0c;
      }

      .rank {
        width: 35px;
        text-align: center;
        margin-left: 10px;
        font-size: 16px;
      }

      .info {
        width: 170px;
        height: 17px;
        line-height: 17px;
        color: #000;

        display: flex;
        justify-content: space-between;

        .name {
          flex: 1;
        }

        .operate {
          display: none;
          width: 82px;

          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }

          .play {
            background-position: -267px -268px;
          }

          .addto {
            background-position: 0 -700px;

            position: relative;
            top: 2px;
          }

          .favor {
            background-position: -297px -268px;
          }
        }
      }

      &:hover {
        .operate {
          display: flex;
        }
      }
    }
  }

  .footer {
    height: 32px;
    margin-right: 32px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
      color: #000;
    }
  }
`
