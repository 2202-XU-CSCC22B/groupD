
import { Pie } from 'react-chartjs-2';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Box from "@mui/material/Box";

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

// export default function TransactionTypeSummaryPieChart({data}){
//     const [selectedOption, setSelectedOption] = useState("Sales");
//
//     const expenseSummary = [
//         { title: 'Salary', value: data?.summary.salary, color: '#E38627',  },
//         { title: 'Cash Out', value: data?.summary.cashOut, color: '#C13C37',  },
//         { title: 'Trainer Fee', value: data?.summary.trainerFee, color: '#6A2135',  },
//         { title: 'Utilities', value: data?.summary.utilities, color: '#7C7C7C',  },
//         { title: 'Maintenance', value: data?.summary.maintenance, color: '#54A4A4',  },
//         { title: 'Missing Money', value: data?.summary.missingMoney, color: '#008F7A', },
//     ]
//
//     const salesSummary = {
//         labels: [
//             'Muay Thai Class',
//             'Membership Fee',
//             'Walk-in Session',
//             'Monthly Fee',
//             'Cash-in'
//         ],
//         datasets: [{
//             label: 'Sales summary',
//             data: [data?.summary.muayThai, data?.summary.membershipFee, 100, data?.summary.walkIn,data?.summary.monthlyFee, ],
//             backgroundColor: [
//                 '#FEBD69',
//                 '#4D9DE0',
//                 '#BF8F00',
//                 '#3D5A80',
//                 '#AF516C'
//             ],
//             hoverOffset: 4
//         }]
//     };
//     const handleSelectChange = (event) => {
//         setSelectedOption(event.target.value);
//
//     }
//     const config = {
//         type: 'pie',
//         data: selectedOption === "Sales" ? salesSummary : salesSummary,
//         options: {
//             responsive: true,
//             plugins: {
//                 legend: {
//                     position: 'top',
//                 },
//                 title: {
//                     display: true,
//                     text: 'Monthly Summary'
//                 }
//             }
//         },
//     };
//
//
//     return (
//         <>
//             <div style="width: 800px;"><canvas id="acquisitions"></canvas></div>
//
//             <!-- <script type="module" src="dimensions.js"></script> -->
//             <script type="module" src="PieChart.js"></script>
//         </>
//     )
// }

class TransactionTypeSummaryPieChart extends React.Component {
    render() {
        const { data } = this.props;

        const salesSummary = {
            labels: [
                'Muay-Thai 🥊',
                'Membership Fee🏋️‍',
                'Walk-in',
                'Monthly Fee 📆',
            ],
            datasets: [{
                label: 'Sales summary',
                data: [data?.summary.muayThai, data?.summary.membershipFee , data?.summary.walkIn, data?.summary.monthlyFee],
                backgroundColor: [
                    '#FEBD69',
                    '#4D9DE0',
                    '#BF8F00',
                    '#3D5A80',

                ],
                hoverOffset: 4
            }]
        };

        return (
            <Box>
                <Pie
                    type="pie"
                    data={salesSummary}
                    style={{display: 'flex', textAlign: 'center', flexWrap: 'wrap'}}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                display: true,
                                textDirection: 'rtl',


                            },
                            title: {
                                display: true,
                                text: 'Sales Summary',
                                position: 'top',
                            },
                            datalabels: {
                                color: '#000',
                                textAlign: 'center',
                                formatter: (value, ctx) => {
                                    let sum = 0;
                                    let dataArr = ctx.chart.data.datasets[0].data;
                                    dataArr.map(data => {
                                        sum += data;
                                    });
                                    let percentage = (value*100 / sum).toFixed(2)+"%";
                                    return  `₱${Number(Math.round(value)).toLocaleString('en-US', {
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0,
                                    })}`;
                                },
                            },

                        }
                    }}

                />
            </Box>



        );
    }
}

export default TransactionTypeSummaryPieChart;