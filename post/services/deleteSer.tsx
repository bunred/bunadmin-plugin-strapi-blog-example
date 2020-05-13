import request from "@/utils/scripts/request"
import storedToken from "@/utils/scripts/storedToken"
import { ENV } from "@/utils/config"
import Type from "../types"
import { SchemaName } from "../plugin"
import { notice } from "@/core"

export default async function deleteSer(oldData: Type) {
  const token = await storedToken()

  const res = await request(
    `/content-manager/explorer/application::${SchemaName}.${SchemaName}/${oldData.id}`,
    {
      prefix: ENV.MAIN_URL,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  if (res.error) {
    await notice({
      title: "Sorry, you can't delete this post",
      severity: "warning",
      content: JSON.stringify(oldData)
    })
  } else {
    await notice({
      title: "Successful",
      severity: "success"
    })
  }
}
