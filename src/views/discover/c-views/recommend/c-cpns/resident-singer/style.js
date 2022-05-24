import styled from 'styled-components'

export const ResidentSingerWrapper = styled.div`
  width: 250px;
  height: 455px;
  margin-top: 15px;

  .header {
    height: 23px;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-size: 12px;

    display: flex;
    justify-content: space-between;

    a {
      font-weight: normal;
    }
  }

  .main {
    width: 230px;
    height: 380px;
    margin: 6px 0 14px 20px;

    .item {
      width: 210px;
      height: 62px;
      margin-top: 14px;
      background: #fafafa;
      text-decoration: none;

      display: flex;

      :hover {
        background: #f4f4f4;
      }

      .pic {
        width: 62px;
        height: 62px;
      }

      .info {
        width: 148px;
        height: 62px;
        padding: 1px 1px 1px 14px;
        border: 1px solid #e9e9e9;

        h3 {
          margin-top: 8px;
        }

        p {
          width: 90%;
          margin-top: 8px;
          color: #666;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
      }
    }
  }
`
