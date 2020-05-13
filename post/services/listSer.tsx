/**
 * Remote data controller
 */
import { Query } from "material-table"
import request from "@/utils/scripts/request"
import storedToken from "@/utils/scripts/storedToken"
import { ENV } from "@/utils/config"
import { SchemaName } from "../plugin"

export default async function listSer(query: Query<any>) {
  const { search, page, pageSize } = query
  // const { search, page, pageSize, filters } = query
  // todo filters
  const token = await storedToken()

  const defSearchField = "name"

  let searchField = `${defSearchField}_contains`

  const params = {
    [searchField]: search || "",
    _limit: pageSize,
    _sort: "created_at:DESC",
    _start: page * pageSize
  }

  const data = await request(
    `/content-manager/explorer/application::${SchemaName}.${SchemaName}`,
    {
      params,
      prefix: ENV.AUTH_URL,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  const { count } = await request(
    `/content-manager/explorer/application::${SchemaName}.${SchemaName}/count`,
    {
      params,
      prefix: ENV.AUTH_URL,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  return {
    data,
    totalCount: count,
    errors: data.status >= 400 ? "Fetch error" : undefined
  }
}
