import React from 'react'
import styled from 'styled-components'

export interface IAvatarProps {
  /**
   * Address of the image for an image avatar
   */
  source?: string
  /**
   * Alternative text describing the image
   */
  alt?: string
  /**
   * Size of the avatar
   */
  size?: string
  /**
   * Shape of avatar
   */
  shape?: 'default' | 'circle'
}

export const Avatar = ({ source, alt, shape = 'default', size = '64px' }: IAvatarProps) => {
  const [isLoaded, setLoaded] = React.useState(false)

  return (
    <StyledAvatar shape={shape} size={size}>
      <Image
        src={source}
        isLoaded={isLoaded}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        alt={alt}
      />
      {!isLoaded && alt?.[0]}
    </StyledAvatar>
  )
}

// Avatar.defaultProps = {
//   shape: 'default',
//   size: '64px',
// }

// export { Avatar }

const StyledAvatar = styled.div<IAvatarProps>`
  && {
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '10px')};
  }
`

const Image = styled.img<{ isLoaded: boolean }>`
  width: 100%;
  object-fit: cover;
  display: ${({ isLoaded }) => (isLoaded ? 'block' : 'none')};
`
