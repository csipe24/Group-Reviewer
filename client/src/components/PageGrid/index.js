import React from "react";
import {Grid} from "grommet";

function PageGrid(){
    return(
        <Grid
        rows={['large', 'large']}
        columns={['medium', 'medium']}
        gap="small"
        areas={[
            { name: 'content', start: [0, 0], end: [1, 0] },
        ]}
        />
    )
}

export default PageGrid;