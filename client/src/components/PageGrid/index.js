import React from "react";
import { Grid } from "grommet";

function PageGrid(props) {
    return(
        <Grid className="page-grid"
            responsive="true"
            columns={['auto', 'large', 'large', 'auto']}
            rows={['flex']}
            gap="small"
            areas={[
                { name: 'leftSpace', start: [1, 0], end: [1, 0] },
                { name: 'main', start: [2, 0], end: [2, 0] },
                { name: 'rightSpace', start: [3, 0], end: [3, 0] }
            ]}
        >
            {props.children}
        </Grid>
    )
}

export default PageGrid;
