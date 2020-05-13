import React, { createRef } from "react"
import CommonTable, { CommonTableHead } from "@/components/CommonTable"
import tableIcons from "@/components/CommonTable/models/tableIcons"
import { CommonTableDefaultProps as DefaultProps } from "@/components/CommonTable/models/defaultProps"
import { useTheme } from "@material-ui/core/styles"

import { SchemaName, SchemaLabel, SchemaColumns } from "./plugin"
import { useTranslation } from "react-i18next"
import dataCtrl from "@plugins/data-source-strapi/controllers/dataCtrl"
import editableCtrl from "./controllers/editableCtrl"

export default function() {
  const { t } = useTranslation("table")
  const theme = useTheme()
  const tableRef = createRef()

  return (
    <>
      <CommonTableHead title={t(SchemaLabel)} />
      <CommonTable
        tableRef={tableRef}
        title={t(SchemaLabel)}
        columns={SchemaColumns({ t, tableRef })}
        editable={editableCtrl({ SchemaName })}
        // style
        style={DefaultProps.style}
        // icons
        icons={tableIcons({ theme })}
        // options
        options={{
          ...DefaultProps.options,
          filtering: true,
          fixedColumns: {
            left: 0,
            right: 1
          }
        }}
        // data
        data={async query => await dataCtrl({ query, SchemaName })}
      />
    </>
  )
}
