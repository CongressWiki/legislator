import React from "react"
import Layout from "../components/layout"
export default function Bill({ pageContext: bill }) {
  return (
    <Layout>
      <h1>{bill.id}</h1>
      <h2>{bill.title}</h2>
      <p>{bill.summary}</p>
    </Layout>
  )
}
