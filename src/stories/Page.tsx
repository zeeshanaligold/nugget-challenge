import React from 'react'
import { Grid } from '@material-ui/core'

import { Card } from '../components'

export interface IPageProps {}

const Page: React.FC<IPageProps> = () => {
  return (
    <Grid container spacing={4}>
      {[...Array(3)].map(() => (
        <Grid item md={4} xs={12}>
          <Card
            name="Zeeshan Ali"
            email="zeeshan@gmail.com"
            avatar="https://buywptemplates.com/demo/construction-realestate-wordpress-theme/wp-content/uploads/sites/8/2019/03/testimonials2.jpeg"
            role="Member"
            avatarProps={{
              size: '135px',
              shape: 'circle',
            }}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export { Page }
