import { Bar } from "react-chartjs-2"
// eslint-disable-next-line unused-imports/no-unused-imports
import { Chart as ChartJs, scales } from "chart.js/auto"
import PropTypes from "prop-types"

function BarChartMolecule({ dataSet }) {
   return <Bar data={dataSet} />
}

BarChartMolecule.propTypes = {
   dataSet: PropTypes.array.isRequired
}

export default BarChartMolecule
