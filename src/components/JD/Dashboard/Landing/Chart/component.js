import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Line } from 'react-chartjs-2';
import { Grid } from "@material-ui/core";

class DashboardChart extends Component {
    render() {
        const {
            classes
        } = this.props;

        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My First dataset',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(175,0,0,0.4)',
                    borderColor: 'rgba(75,0,0,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,0,0,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,0,0,1)',
                    pointHoverBorderColor: 'rgba(220,0,0,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [165, 115, 110, 118, 115, 155, 140]
                }
            ]
        };

        return (
            <>
                <Grid container>

                    <Grid item xs={12} md={9}>
                        <div className={classes.chartwrapper}>
                            <Line data={data} />
                        </div>
                    </Grid>

                </Grid>
            </>
        )
    }
}

export default withStyles(styles)(DashboardChart);