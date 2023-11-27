import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"

import { filterProperties, flattenObjects } from "../../../utils"
import TableAtom from "../../atoms/table"

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
   return (
      <div className="w-full">
         <TableAtom
            columns={columns}
            data={processedData}
            displayIndex={false}
            extraClassname="table-compact"
            title={t("data.tableTitle")}
         />
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
