import Head from 'next/head'
import Typography from 'typography'
import theme from 'typography-theme-grand-view'
import { TypographyStyle, GoogleFont } from 'react-typography'
import { Container, Grid } from 'react-responsive-grid'

const typography = new Typography(theme)
const { rhythm } = typography

export default () => (
  <div>
    <Head>
      <title>📺 Televisora Nacional 📺</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
    </Head>
    <Container style={{ maxWidth: 960, padding: rhythm(1 / 2) }}>
      <Grid columns={12}>
        <h1>📺 Televisora Nacional 📺</h1>
        <h3>Media Managers</h3>
        <p><a href='http://tv.buriti.ca:8989/' target='_blank'>📺 TV Series </a></p>
        {/* <p><a href='http://tv.buriti.ca:8484/' target='_blank'>🎥 Movies (couchpotato - user:buritica/pass:buritica)</a></p> */}
        <p><a href='http://tv.buriti.ca:8585/' target='_blank'>🎥 Movies </a></p>

        <h3>Media Downloaders</h3>
        <p><a href='http://tv.buriti.ca:8080/' target='_blank'>⬇️ SABnzbd+</a></p>

        <h3>Media Servers</h3>
        <p><a href='http://tv.buriti.ca:32400/' target='_blank'>💻 Plex Media Server</a></p>

      </Grid>
    </Container>
  </div>
)
