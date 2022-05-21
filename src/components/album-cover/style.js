import styled from 'styled-components'

export const AlbumCoverWrapper = styled.div`
  width: ${(props) => props.width + 'px'};

  .album-image {
    width: ${(props) => props.width + 'px'};
    height: ${(props) => props.size + 'px'};
    overflow: hidden;
    margin-top: 15px;

    position: relative;

    img {
      width: ${(props) => props.size + 'px'};
      height: ${(props) => props.size + 'px'};
    }

    .cover {
      bottom: 0;
      background-position: 0 ${(props) => props.bgp};
      text-indent: -9999px;

      position: absolute;
      left: 0;
      right: 0;
      top: 0;
    }
  }

  .album-info {
    width: ${(props) => props.size};
    font-size: 12px;

    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`
