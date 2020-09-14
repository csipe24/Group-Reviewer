import React from 'react'
import { Footer, Button, Text, Grommet } from 'grommet'
import { Github } from 'grommet-icons'
import './footer.css'

function PageFooter () {
  return (
    <Grommet>
      <Footer className="footer" background="#FFAA15" justify="center" margin={{top: "small"}} pad="small">
        <Text textAlign="center" size="medium">
          <Button
            icon={<Github />}
            fill="#00739D"
            href="https://github.com/csipe24/Group-Reviewer"
          />
        </Text>
      </Footer>
    </Grommet>
  )
}

export default PageFooter
