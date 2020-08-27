import React from "react";
import { Grommet, Footer, Anchor, Text } from 'grommet';

function PageFooter(){
        return ( 
            <Grommet plain>
                <Footer background="brand" pad="medium" >
                <Text>Group Reviewer</Text>
                <Anchor label="Github" href="https://github.com/csipe24/Group-Reviewer"/>
                </Footer>
          </Grommet>
        );
}

export default PageFooter;