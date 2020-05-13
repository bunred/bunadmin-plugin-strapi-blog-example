import { EditableDataType } from "@/components/CommonTable/models/editable"
import { EditableCtrl } from "@plugins/data-source-strapi/types"
import addSer from "@plugins/data-source-strapi/services/addSer"
import updateSer from "@plugins/data-source-strapi/services/updateSer"
import deleteSer from "@plugins/data-source-strapi/services/deleteSer"
import Type from "../types"

function editableCtrl({ SchemaName }: EditableCtrl): EditableDataType<Type> {
  return {
    // isEditable: rowData => rowData.not_editable === true, // only name(a) rows would be editable
    // isDeletable: rowData => rowData.not_deletable === true, // only name(a) rows would be deletable
    onRowAdd: async newData => await addSer({ newData, SchemaName }),
    onRowUpdate: async (newData, oldData) =>
      await updateSer({ newData, oldData, SchemaName }),
    onRowDelete: oldData => deleteSer({ oldData, SchemaName })
  }
}

export default editableCtrl
