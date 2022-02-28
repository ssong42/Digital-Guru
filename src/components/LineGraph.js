import { ResponsiveLine } from '@nivo/line'

export default function LineGraph({ data }) {
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
            xScale={{
                type: "point"
              }}
            yScale={{
                type: 'linear',
                min: '0',
                max: '50',
                stacked: false,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Date',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Score',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'top-right',
                    direction: 'column',
                    justify: false,
                    translateX: -20,
                    translateY: 10,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]} />
    )
}

export function convertToLineGraphFormat(patients) {
    let lineGraphData = {};
    for (let patientNames in patients) {
        let GAD_score = {
            id: "GAD-7 Score",
            data: []
        };

        let PHQ_score = {
            id: "PHQ-9 Score",
            data: []
        };

        //iterate over the json map then push to each individual array
        patients[patientNames].map((entry) => {
            let newDate = convertToMonthDayYearFormat(entry.Timestamp)
        
            GAD_score.data.push({
                x: newDate,
                y: entry["GAD-7 Score"]
            })

            PHQ_score.data.push({
                x: newDate,
                y: entry["PHQ-9 Score"]
            })
        })
        
        //insert into the linegraph data with two sets of data
        lineGraphData[patientNames] = [GAD_score, PHQ_score];
    }
    return lineGraphData
}

function convertToMonthDayYearFormat(timestamp) {
    let date = new Date(timestamp);
    return (
        (date.getMonth() + 1)
        + "-" + date.getDate()
        + "-" + date.getFullYear()
    );
}