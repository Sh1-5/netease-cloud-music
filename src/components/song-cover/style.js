import styled from 'styled-components'

export const SongCoverWrapper = styled.div`
  width: 140px;
  margin: 20px ${(props) => props.right || 0} 20px 0;

  .cover-top {
    position: relative;

    & > img {
      width: 140px;
      height: 140px;
    }

    .cover {
      width: 100%;
      height: 100%;
      background-position: 0 0;

      position: absolute;
      top: 0;
      left: 0;

      .info {
        padding: 0 10px;
        background-position: 0 -537px;
        color: #ccc;
        height: 27px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        .erji {
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
          margin-right: 5px;

          display: inline-block;
        }

        .play {
          width: 16px;
          height: 17px;
          background-position: 0 0;

          display: inline-block;
        }
      }
    }
  }

  .cover-bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }

  .cover-source {
    color: #666;
  }
`
