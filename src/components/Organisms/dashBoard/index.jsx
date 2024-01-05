import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"

import { filterProperties, flattenObjects } from "../../../utils"
import { getLevelsData } from "../../../utils/statistics.utils"
import TableAtom from "../../atoms/table"
import BarChartMolecule from "../../molecules/barChart"

const columns = ["german_translation", "level", "times_seen"]
const levelValues = {
   hard: 3,
   medium: 2,
   easy: 1
}

function DashBoardOrganism({ data }) {
   const processedData = filterProperties(flattenObjects(data), columns).sort(
      (a, b) => levelValues[b.level] - levelValues[a.level]
   )
   const { t } = useTranslation()

   const translatedData = processedData.map((item) => ({ ...item, level: t(`practice.cardStat.${item.level}`) }))

   const dataToDashBoard = getLevelsData(data)

   return (
      <div className="w-full">
         <TableAtom
            columns={columns}
            data={translatedData}
            displayIndex={false}
            extraClassname="table-compact my-5"
            title={t("data.tableTitle")}
         />
         <BarChartMolecule dataSet={dataToDashBoard} />
      </div>
   )
}

DashBoardOrganism.defaultProps = {
   data: []
}

DashBoardOrganism.propTypes = {
   data: PropTypes.array
}

export default DashBoardOrganism
