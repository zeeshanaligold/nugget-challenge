import React from 'react'
import styled from 'styled-components'

import { Avatar, IAvatarProps } from '../Avatar'

export interface ICardProps {
  /**
   *  Member name
   */
  name: string
  /**
   * Member email
   */
  email: string
  /**
   *  Member role
   */
  role: string
  /**
   * Avatar image address
   */
  avatar: string
  /**
   * Avatar props (size, shape)
   */
  avatarProps: IAvatarProps
  /**
   * card border radius
   */
  borderRadius?: string
  /**
   * card border color
   */
  borderColor?: string
}

const Card: React.FC<ICardProps> = ({ name, email, role, avatar, avatarProps, ...props }) => {
  return (
    <StyledCard {...props}>
      <Avatar source={avatar} alt={name} {...avatarProps} />
      <h3 className="title">{name}</h3>
      <p className="description">{email}</p>
    </StyledCard>
  )
}

Card.defaultProps = {
  borderRadius: '20px',
  borderColor: ' #e2e2ea',
}

export { Card }

const StyledCard = styled.div<Pick<ICardProps, 'borderColor'>>`
  && {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
    border-radius: 20px;
    border: 1px solid;
    border-color: ${({ borderColor }) => borderColor};
    .title {
      color: #2a2827;
      font-size: 18px;
      font-weight: 500;
      margin: 16px 0 0;
    }
    .description {
      font-size: 15px;
      font-weight: normal;
      color: #92929d;
      margin: 11px 0;
    }
  }
`
